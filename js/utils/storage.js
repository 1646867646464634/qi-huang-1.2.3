// ===== 岐黄·辅助诊疗系统 - 存储封装（平台适配版） =====
// 对外 API 与改造前完全一致：get / set / remove / clear，且全部同步返回。
//
// 内部三层：
//   1. 内存镜像 mem —— 同步权威副本，保证上层同步调用语义不变
//   2. 原生存储     —— APP 内异步落盘（120ms 写合并），抗卸载/清缓存
//   3. localStorage —— Web 端即权威；APP 端退化为缓存，被清掉后由原生存储恢复
//
// 兼容目标：Android 7+ WebView（Chrome 51+），全篇 ES5 语法 + Promise。

const Storage = (function () {
    'use strict';

    var PB = (typeof PlatformBridge !== 'undefined') ? PlatformBridge : null;
    var PREFIX = 'tcm_';
    var mem = Object.create(null);      // 同步权威副本
    var dirty = Object.create(null);    // 待落盘的 key
    var hydrated = false;
    var timer = null;

    function clone(v) {
        if (v === undefined || v === null) return v;
        try { return JSON.parse(JSON.stringify(v)); } catch (e) { return v; }
    }

    function lsGet(k) {
        try {
            var s = localStorage.getItem(k);
            return s === null ? undefined : JSON.parse(s);
        } catch (e) { return undefined; }
    }

    function lsSet(k, v) {
        try {
            if (v === null) localStorage.removeItem(k);
            else localStorage.setItem(k, JSON.stringify(v));
        } catch (e) { /* 隐私模式或配额不足，静默降级 */ }
    }

    // 首帧同步装载：Web 端这就是最终数据；APP 端作为原生存储灌入前的瞬时兜底
    try {
        var i, k, v;
        for (i = 0; i < localStorage.length; i++) {
            k = localStorage.key(i);
            if (k && k.indexOf(PREFIX) === 0) {
                v = lsGet(k);
                if (v !== undefined) mem[k] = v;
            }
        }
    } catch (e) { /* localStorage 不可用 */ }

    function flush() {
        var keys = Object.keys(dirty);
        if (!keys.length || !PB) return;
        var patch = {};
        keys.forEach(function (key) { patch[key] = (key in mem) ? mem[key] : null; });
        dirty = Object.create(null);
        try {
            PB.storage.writePatch(patch).catch(function (err) {
                console.warn('[岐黄] 原生存储写入失败，数据仍在内存中', err);
            });
        } catch (e) { /* 桥接未就绪 */ }
    }

    function scheduleFlush() {
        if (timer) return;
        timer = setTimeout(function () { timer = null; flush(); }, 120);
    }

    // 由 PlatformBridge.init 调用：把原生存储的数据灌入内存镜像
    window.__QH_HYDRATE__ = function (data) {
        if (hydrated) return;
        var hasData = data && Object.keys(data).length > 0;
        if (data) {
            Object.keys(data).forEach(function (key) {
                // 竞态保护：hydrate 之前被改过的 key 以本地为准
                if (!(key in dirty)) mem[key] = data[key];
            });
        }
        hydrated = true;
        if (!hasData) {
            // 原生存储为空 → 首次迁移，把 localStorage 中已有数据全量补写进去
            Object.keys(mem).forEach(function (key) { dirty[key] = true; });
            flush();
        }
        try { document.dispatchEvent(new CustomEvent('qh:storage-ready')); } catch (e) { /* ignore */ }
    };

    return {
        get(key, defaultValue) {
            if (defaultValue === undefined) defaultValue = null;
            var v = (key in mem) ? mem[key] : (PB ? undefined : lsGet(key));
            return v === undefined ? defaultValue : clone(v);
        },

        set(key, value) {
            mem[key] = clone(value);
            lsSet(key, value);
            if (PB) { dirty[key] = true; scheduleFlush(); }
            return true;
        },

        remove(key) {
            delete mem[key];
            lsSet(key, null);
            if (PB) { dirty[key] = true; scheduleFlush(); }
            return true;
        },

        // 仅清理本应用数据（tcm_ 前缀），不影响同域下其他数据
        clear() {
            Object.keys(mem).forEach(function (key) {
                if (key.indexOf(PREFIX) === 0) {
                    delete mem[key];
                    lsSet(key, null);
                    if (PB) dirty[key] = true;
                }
            });
            if (PB) scheduleFlush();
            return true;
        },

        // —— 备份/恢复：Web 数据搬进 APP 的唯一通道 ——
        dump() { return clone(mem); },

        restore(obj) {
            var self = this;
            Object.keys(obj || {}).forEach(function (key) { self.set(key, obj[key]); });
            return true;
        },

        ready() {
            return PB ? (PB.ready || Promise.resolve(true)) : Promise.resolve(true);
        }
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Storage: Storage };
}
