// ===== api/glm.js — 智谱 GLM-4V-Flash 视觉识别 Vercel 代理 =====
// 职责：注入 ZHIPU_API_KEY、设置 CORS、白名单透传请求、错误码透传、30s 超时。
// 部署后 URL: https://<your-vercel-app>.vercel.app/api/glm
// 注意：package.json 无 "type":"module"，必须用 CommonJS 导出。

const ZHIPU_ENDPOINT = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
const DEFAULT_MAX_TOKENS = 1024;
const DEFAULT_TEMPERATURE = 0.1;
const UPSTREAM_TIMEOUT_MS = 30000;

// 白名单字段，防止代理被滥用为通用转发
const ALLOWED_FIELDS = ['model', 'messages', 'max_tokens', 'temperature'];

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
  if (!payload.model) payload.model = 'glm-4v-flash';
  if (!payload.max_tokens) payload.max_tokens = DEFAULT_MAX_TOKENS;
  if (payload.temperature === undefined) payload.temperature = DEFAULT_TEMPERATURE;

  // ---- 转发智谱，30s 超时 ----
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

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

    // 原样透传上游响应（401/429/500 等错误码与 message 一并带回，供前端分类）
    const text = await upstream.text();
    res.statusCode = upstream.status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    return res.end(text);
  } catch (err) {
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
