// ===== 岐黄·辅助诊疗系统 - 平台桥接层 =====
// 必须在 js/utils/storage.js 之前加载。
//
// 职责：把「存储 / 文件导出 / 选图 / 原生 UI」四件事抽象成统一接口。
// 纯浏览器环境下，所有调用等价于改造前的行为（localStorage + Blob 下载 + input file），零副作用。
// 在 Capacitor(Android) / Neutralino(Windows) 壳内，由 native-init.js 注入原生实现。
//
// 兼容目标：Android 7+ WebView（Chrome 51+），故全篇使用 ES5 语法 + Promise，不使用 ?. / ?? / class。

(function () {
    'use strict';

    function detect() {
        try {
            if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
                return 'capacitor';
            }
        } catch (e) { /* 非 Capacitor 环境 */ }
        try {
            if (typeof window.NL_TOKEN === 'string' && window.NL_TOKEN) {
                return 'neutralino';
            }
        } catch (e) { /* 非 Neutralino 环境 */ }
        return 'web';
    }

    var name = detect();

    // ===== Web 回落实现：与原实现逐字等价 =====
    var webImpl = {
        storage: {
            readAll: function () {
                var out = {}, i, k, v;
                try {
                    for (i = 0; i < localStorage.length; i++) {
                        k = localStorage.key(i);
                        if (k && k.indexOf('tcm_') === 0) {
                            try { v = JSON.parse(localStorage.getItem(k)); out[k] = v; } catch (e) { /* 脏数据跳过 */ }
                        }
                    }
                } catch (e) { /* localStorage 不可用 */ }
                return Promise.resolve(out);
            },
            writePatch: function (patch) {
                try {
                    Object.keys(patch).forEach(function (k) {
                        if (patch[k] === null) localStorage.removeItem(k);
                        else localStorage.setItem(k, JSON.stringify(patch[k]));
                    });
                } catch (e) { /* 配额不足等 */ }
                return Promise.resolve();
            }
        },
        files: {
            saveText: function (fileName, text, mime) {
                try {
                    var blob = new Blob([text], { type: mime || 'text/markdown;charset=utf-8' });
                    var a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(function () {
                        URL.revokeObjectURL(a.href);
                        if (a.parentNode) a.parentNode.removeChild(a);
                    }, 200);
                    return Promise.resolve({ ok: true, via: 'download' });
                } catch (e) {
                    return Promise.resolve({ ok: false, via: 'download', error: e });
                }
            },
            pickImage: function (opts) {
                return new Promise(function (resolve, reject) {
                    var input = document.createElement('input');
                    input.type = 'file';
                    input.accept = (opts && opts.accept) || 'image/jpeg,image/jpg,image/png';
                    input.style.position = 'fixed';
                    input.style.left = '-9999px';
                    var settled = false;
                    input.addEventListener('change', function () {
                        if (settled) return;
                        var f = input.files && input.files[0];
                        if (input.parentNode) input.parentNode.removeChild(input);
                        if (f) { settled = true; resolve(f); }
                        else { settled = true; reject({ code: 'CANCEL', message: '未选择图片' }); }
                    });
                    document.body.appendChild(input);
                    input.click();
                });
            }
        },
        ui: {
            onBack: function () { /* Web 端无返回键 */ },
            setBarStyle: function () { /* Web 端无状态栏 */ },
            exit: function () { try { window.close(); } catch (e) { /* 浏览器不允许关闭非脚本打开的窗口 */ } }
        }
    };

    var PB = {
        name: name,
        isNative: name !== 'web',
        hydrated: false,
        ready: null,
        _impl: null,
        _web: webImpl
    };

    // 统一分发：优先原生实现，否则 Web 回落
    function call(group, method) {
        return function () {
            var src = (PB._impl && PB._impl[group]) || webImpl[group];
            var args = arguments, self = src;
            if (!src || !src[method]) {
                return Promise.reject({ code: 'UNSUPPORTED', message: group + '.' + method + ' 未实现' });
            }
            return Promise.resolve().then(function () {
                return self[method].apply(self, args);
            });
        };
    }

    PB.storage = {
        readAll: call('storage', 'readAll'),
        writePatch: call('storage', 'writePatch')
    };
    PB.files = {
        saveText: call('files', 'saveText'),
        pickImage: call('files', 'pickImage')
    };
    PB.ui = {
        onBack: call('ui', 'onBack'),
        setBarStyle: call('ui', 'setBarStyle'),
        exit: call('ui', 'exit')
    };

    // 强制走 Web 回落（供原生实现内部降级使用）
    PB._webCall = function (group, method, args) {
        if (!webImpl[group] || !webImpl[group][method]) return Promise.reject({ code: 'UNSUPPORTED' });
        return webImpl[group][method].apply(webImpl[group], args || []);
    };

    // 读取全量原生数据（供 writePatch 做 merge 时复用）
    PB._readRaw = function () {
        return call('storage', 'readAll')().catch(function () { return {}; });
    };

    /**
     * 由 native-init.js 调用，注入原生实现并触发 hydrate。
     * @param {string} implName 'capacitor' | 'neutralino'
     * @param {Object} implObj  { storage, files, ui }
     * @returns {Promise<boolean>}
     */
    PB.init = function (implName, implObj) {
        PB.name = implName;
        PB.isNative = true;
        PB._impl = implObj;
        PB.ready = PB._readRaw().then(function (data) {
            try {
                if (typeof window.__QH_HYDRATE__ === 'function') window.__QH_HYDRATE__(data);
            } catch (e) { /* storage.js 未加载 */ }
            PB.hydrated = true;
            return true;
        }).catch(function () {
            PB.hydrated = true;
            return false;
        });
        return PB.ready;
    };

    window.PlatformBridge = PB;
})();
