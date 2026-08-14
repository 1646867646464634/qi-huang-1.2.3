// ===== api/glm.js — 智谱 GLM 代理（视觉识别 + AI 对话流式） =====
// 职责：注入 ZHIPU_API_KEY、CORS、白名单透传、轻量限流、非流式/流式(SSE)透传。
// 重要：必须返回 Web Response 对象（Vercel Node runtime 下 res.write 的旧式写法会把 SSE 缓冲到函数结束，
//       导致前端收不到流而超时；返回 Response 且 body 为 ReadableStream 时可逐块转发）。
// 部署后 URL: https://<your-vercel-app>.vercel.app/api/glm
// 注意：package.json 无 "type":"module"，用 CommonJS 导出（返回 Response 即可）。

const ZHIPU_ENDPOINT = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
const DEFAULT_MAX_TOKENS = 2048;
const DEFAULT_TEMPERATURE = 0.1;
const UPSTREAM_TIMEOUT_MS = 60000;

// 白名单字段（stream / thinking 供对话模块使用）
const ALLOWED_FIELDS = ['model', 'messages', 'max_tokens', 'temperature', 'stream', 'thinking'];

// ---- CORS 头（每次响应统一附带） ----
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Analysis-Type',
  'Access-Control-Max-Age': '86400'
};

// ---- 轻量限流（Serverless 尽力而为：实例内存不共享，冷启动重置；前端另有 localStorage 限流兜底）----
const RATE_WINDOW_MS = 60000;
const RATE_MAX = 10;          // 60s 内同一 IP 最多 10 次
const MAX_MESSAGES = 40;      // 对话消息条数上限
const MAX_TOTAL_CHARS = 20000;// 对话消息总字符上限
const _rateMap = new Map();   // ip -> { count, ts }

function getClientIp(req) {
  const xff = req.headers && req.headers.get ? req.headers.get('x-forwarded-for') : (req.headers || {})['x-forwarded-for'];
  if (xff) return String(xff).split(',')[0].trim();
  return 'unknown';
}
function rateLimited(ip) {
  const now = Date.now();
  const rec = _rateMap.get(ip);
  if (!rec || now - rec.ts > RATE_WINDOW_MS) {
    _rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > RATE_MAX;
}
function messageTotalChars(messages) {
  let n = 0;
  (messages || []).forEach(m => {
    const c = m && m.content;
    if (typeof c === 'string') n += c.length;
    else if (Array.isArray(c)) c.forEach(p => { if (p && typeof p.text === 'string') n += p.text.length; });
  });
  return n;
}

function jsonResponse(data, status, extraHeaders) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, CORS_HEADERS, extraHeaders || {})
  });
}

module.exports = async function handler(req) {
  // ---- OPTIONS 预检 ----
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'method_not_allowed' }, 405);
  }

  // ---- Key 注入（仅存于 Vercel 环境变量） ----
  const apiKey = process.env.ZHIPU_API_KEY;
  if (!apiKey) {
    return jsonResponse({ error: 'ZHIPU_API_KEY not configured on Vercel' }, 500);
  }

  // ---- 请求体白名单透传 ----
  let body = {};
  try { body = await req.json(); } catch (e) { body = {}; }
  const payload = { messages: undefined };
  for (const k of ALLOWED_FIELDS) {
    if (body[k] !== undefined) payload[k] = body[k];
  }
  if (!Array.isArray(payload.messages) || payload.messages.length === 0) {
    return jsonResponse({ error: 'messages array is required' }, 400);
  }
  if (!payload.model) payload.model = 'glm-4.6v-flash';
  if (payload.max_tokens === undefined) payload.max_tokens = DEFAULT_MAX_TOKENS;
  if (payload.temperature === undefined) payload.temperature = DEFAULT_TEMPERATURE;

  const isStream = payload.stream === true;
  if (isStream) {
    // 限流与长度校验仅作用于流式对话请求；非流式视觉路径保持原逻辑（避免 base64 图被长度校验误杀）
    if (rateLimited(getClientIp(req))) {
      return jsonResponse({ error: 'rate_limited', message: '请求过于频繁，请稍后再试' }, 429);
    }
    if (payload.messages.length > MAX_MESSAGES || messageTotalChars(payload.messages) > MAX_TOTAL_CHARS) {
      return jsonResponse({ error: 'payload_too_large', message: '对话内容过长，请精简后重试' }, 429);
    }
  }

  // ---- 转发智谱，60s 超时（连接建立前）；客户端断开中止上游 ----
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  if (req.signal) {
    req.signal.addEventListener('abort', () => { if (!controller.signal.aborted) controller.abort(); });
  }

  let upstream;
  try {
    upstream = await fetch(ZHIPU_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timer);
  } catch (err) {
    clearTimeout(timer);
    if (isStream) {
      // 流请求尚未建立：返回 JSON 错误（前端按错误码分类）
      if (err && err.name === 'AbortError') {
        return jsonResponse({ error: 'upstream_timeout', message: '智谱 API 响应超时' }, 504);
      }
      return jsonResponse({ error: 'upstream_error', message: String((err && err.message) || err) }, 502);
    }
    if (err && err.name === 'AbortError') {
      return jsonResponse({ error: 'upstream_timeout', message: '智谱 API 响应超时' }, 504);
    }
    return jsonResponse({ error: 'upstream_error', message: String((err && err.message) || err) }, 502);
  }

  // ---- 非流式路径（视觉识别等）：透传上游 JSON ----
  if (!isStream) {
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, CORS_HEADERS)
    });
  }

  // ---- 流式路径（SSE）：返回 Response，body 直接透传上游 ReadableStream（Vercel 逐块转发） ----
  if (!upstream.ok) {
    // 上游非 2xx（如智谱 401/429/5xx）：透传错误 JSON
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, CORS_HEADERS)
    });
  }
  return new Response(upstream.body, {
    status: 200,
    headers: Object.assign({
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-store',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no'
    }, CORS_HEADERS)
  });
};
