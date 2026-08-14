// ===== api/glm.js — 智谱 GLM 代理（视觉识别 + AI 对话流式） =====
// 职责：注入 ZHIPU_API_KEY、CORS、白名单透传、轻量限流、非流式/流式(SSE)透传。
// 部署后 URL: https://<your-vercel-app>.vercel.app/api/glm
// 注意：package.json 无 "type":"module"，必须用 CommonJS 导出。

const ZHIPU_ENDPOINT = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
const DEFAULT_MAX_TOKENS = 2048;
const DEFAULT_TEMPERATURE = 0.1;
const UPSTREAM_TIMEOUT_MS = 60000;

// 白名单字段（新增 stream / thinking 供对话模块使用）
const ALLOWED_FIELDS = ['model', 'messages', 'max_tokens', 'temperature', 'stream', 'thinking'];

// ---- 轻量限流（Serverless 尽力而为：实例内存不共享，冷启动重置；前端另有 localStorage 限流兜底）----
const RATE_WINDOW_MS = 60000;
const RATE_MAX = 10;          // 60s 内同一 IP 最多 10 次
const MAX_MESSAGES = 40;      // 对话消息条数上限
const MAX_TOTAL_CHARS = 20000;// 对话消息总字符上限
const _rateMap = new Map();   // ip -> { count, ts }

function getClientIp(req) {
  const xff = req.headers['x-forwarded-for'];
  if (xff) return String(xff).split(',')[0].trim();
  return req.headers['x-real-ip'] || 'unknown';
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

module.exports = async function handler(req, res) {
  // ---- CORS ----
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Analysis-Type');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: 'method_not_allowed' }));
  }

  // ---- Key 注入（仅存于 Vercel 环境变量） ----
  const apiKey = process.env.ZHIPU_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: 'ZHIPU_API_KEY not configured on Vercel' }));
  }

  // ---- 请求体白名单透传 ----
  let body = {};
  try {
    body = (req.body && typeof req.body === 'object') ? req.body : {};
  } catch (e) { /* 非 JSON body，走空对象 */ }

  const payload = { messages: undefined };
  for (const k of ALLOWED_FIELDS) {
    if (body[k] !== undefined) payload[k] = body[k];
  }
  if (!Array.isArray(payload.messages) || payload.messages.length === 0) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: 'messages array is required' }));
  }
  if (!payload.model) payload.model = 'glm-4.6v-flash';
  if (payload.max_tokens === undefined) payload.max_tokens = DEFAULT_MAX_TOKENS;
  if (payload.temperature === undefined) payload.temperature = DEFAULT_TEMPERATURE;

  const isStream = payload.stream === true;
  if (isStream) {
    // 限流与长度校验仅作用于流式对话请求；非流式视觉路径保持原逻辑（避免 base64 图被长度校验误杀）
    if (rateLimited(getClientIp(req))) {
      res.statusCode = 429;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ error: 'rate_limited', message: '请求过于频繁，请稍后再试' }));
    }
    if (payload.messages.length > MAX_MESSAGES || messageTotalChars(payload.messages) > MAX_TOTAL_CHARS) {
      res.statusCode = 429;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ error: 'payload_too_large', message: '对话内容过长，请精简后重试' }));
    }
  }

  // ---- 转发智谱，60s 超时；客户端断开时中止上游（停止按钮 → 断开连接 → 上游流终止，节省 token）----
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  res.on('close', () => { if (!res.writableEnded) controller.abort(); });

  try {
    const upstream = await fetch(ZHIPU_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    if (isStream) return streamPassthrough(upstream, res);

    // ---- 非流式路径（视觉识别等，原逻辑）----
    const text = await upstream.text();
    res.statusCode = upstream.status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    return res.end(text);
  } catch (err) {
    if (isStream) {
      // 流请求出错：未开始写流 → 回 JSON 错误；已开始 → 尝试写错误 SSE 后结束
      if (!res.headersSent && !res.writableEnded) {
        res.statusCode = (err && err.name === 'AbortError') ? 504 : 502;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({
          error: (err && err.name === 'AbortError') ? 'upstream_timeout' : 'upstream_error',
          message: (err && err.name === 'AbortError') ? '智谱 API 响应超时' : String((err && err.message) || err)
        }));
      }
      try {
        res.write('data: ' + JSON.stringify({ error: 'upstream_error', message: String((err && err.message) || err) }) + '\n\n');
      } catch (e) { /* 连接已断，忽略 */ }
      return res.end();
    }
    res.setHeader('Content-Type', 'application/json');
    if (err && err.name === 'AbortError') {
      res.statusCode = 504;
      return res.end(JSON.stringify({ error: 'upstream_timeout', message: '智谱 API 响应超时' }));
    }
    res.statusCode = 502;
    return res.end(JSON.stringify({ error: 'upstream_error', message: String((err && err.message) || err) }));
  } finally {
    clearTimeout(timer);
  }
};

// ---- SSE 流式透传：将上游 body 逐块写入响应流 ----
async function streamPassthrough(upstream, res) {
  if (!upstream.ok) {
    // 上游非 2xx（如智谱 401/429/5xx）：透传错误 JSON，前端按错误码分类
    const text = await upstream.text();
    res.statusCode = upstream.status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    return res.end(text);
  }
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-store',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no'
  });
  if (res.flushHeaders) res.flushHeaders(); // 立即冲刷响应头，客户端尽快收到首包
  try {
    // upstream.body 为 web ReadableStream，Node 18+ 支持 async iterable
    for await (const chunk of upstream.body) {
      if (res.destroyed) break;
      res.write(chunk);
    }
    res.end();
  } catch (err) {
    const msg = (err && err.name === 'AbortError') ? '请求中断或超时' : String((err && err.message) || err);
    if (!res.writableEnded) {
      try { res.write('data: ' + JSON.stringify({ error: 'stream_interrupted', message: msg }) + '\n\n'); } catch (e) { /* 忽略 */ }
      res.end();
    }
  }
}
