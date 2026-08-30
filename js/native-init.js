// ===== 岐黄·辅助诊疗系统 - 原生壳探测与实现注入 =====
// 纯浏览器环境下两个分支都不成立，本文件等于空转，零副作用。
// 兼容目标：Android 7+ WebView（Chrome 51+），全篇 ES5 语法 + Promise。

(function () {
    'use strict';

    if (typeof PlatformBridge === 'undefined') return;
    var PB = PlatformBridge;

    // ==================== Capacitor（Android / iOS） ====================
    function setupCapacitor() {
        var C = window.Capacitor;
        if (!C || !C.isNativePlatform || !C.isNativePlatform()) return false;
        var P = C.Plugins;
        if (!P) return false;

        var KEY = 'qh_store';

        // --- 存储：Preferences 单 key 存整包 JSON ---
        var storage = {
            readAll: function () {
                if (!P.Preferences) return Promise.resolve({});
                return P.Preferences.get({ key: KEY }).then(function (res) {
                    if (!res || !res.value) return {};
                    try { return JSON.parse(res.value); } catch (e) { return {}; }
                }).catch(function () { return {}; });
            },
            writePatch: function (patch) {
                if (!P.Preferences) return Promise.resolve();
                return PB._readRaw().then(function (all) {
                    Object.keys(patch).forEach(function (k) {
                        if (patch[k] === null) delete all[k];
                        else all[k] = patch[k];
                    });
                    return P.Preferences.set({ key: KEY, value: JSON.stringify(all) });
                }).catch(function (e) {
                    console.warn('[岐黄] 原生存储写入失败', e);
                });
            }
        };

        // --- 文件导出：写缓存目录 → 调起系统分享面板（零权限） ---
        var files = {
            saveText: function (fileName, text, mime) {
                if (!P.Filesystem) return PB._webCall('files', 'saveText', [fileName, text, mime]);
                return P.Filesystem.writeFile({
                    path: fileName,
                    data: text,
                    directory: 'CACHE',
                    encoding: 'utf8',
                    recursive: true
                }).then(function (res) {
                    var uri = res && res.uri;
                    if (!P.Share || !uri) return { ok: true, path: uri, via: 'cache' };
                    var shareArgs = { title: fileName, files: [uri], dialogTitle: '导出文件' };
                    var shareCall = P.Share.shareFiles
                        ? P.Share.shareFiles({ files: [uri], title: fileName })
                        : P.Share.share(shareArgs);
                    return Promise.resolve(shareCall).then(function () {
                        return { ok: true, via: 'share' };
                    }).catch(function () {
                        return { ok: true, path: uri, via: 'cache' };
                    });
                }).catch(function () {
                    return PB._webCall('files', 'saveText', [fileName, text, mime]);
                });
            },
            // 默认沿用 <input type=file>（Capacitor WebView 原生支持、零权限）；
            // 仅当显式传 source:'native' 且已安装 Camera 插件时才走原生相机。
            pickImage: function (opts) {
                if (P.Camera && opts && opts.source === 'native') {
                    return P.Camera.getPhoto({
                        quality: 90,
                        allowEditing: false,
                        resultType: 'uri',
                        source: 'PROMPT',
                        width: 2000,
                        correctOrientation: true
                    }).then(function (photo) {
                        var url = photo.webPath || photo.path;
                        if (!url) throw new Error('no photo path');
                        return fetch(url).then(function (r) { return r.blob(); }).then(function (blob) {
                            var fmt = (photo.format || 'jpeg').toLowerCase();
                            return new File([blob], 'photo.' + (fmt === 'png' ? 'png' : 'jpg'),
                                { type: fmt === 'png' ? 'image/png' : 'image/jpeg' });
                        });
                    }).catch(function () {
                        return PB._webCall('files', 'pickImage', [opts]);
                    });
                }
                return PB._webCall('files', 'pickImage', [opts]);
            }
        };

        // --- 原生 UI ---
        var ui = {
            onBack: function (handler) {
                if (P.App && P.App.addListener) P.App.addListener('backButton', handler);
            },
            setBarStyle: function (style) {
                if (P.StatusBar && P.StatusBar.setStyle) {
                    P.StatusBar.setStyle({ style: style === 'light' ? 'LIGHT' : 'DARK' });
                }
            },
            exit: function () {
                if (P.App && P.App.exitApp) P.App.exitApp();
            }
        };

        PB.init('capacitor', { storage: storage, files: files, ui: ui });
        return true;
    }

    // ==================== Neutralinojs（Windows / Linux / macOS） ====================
    function setupNeutralino() {
        var N = window.Neutralino;
        if (!N || typeof window.NL_TOKEN !== 'string' || !window.NL_TOKEN) return false;

        var KEY = 'qh_store';

        var storage = {
            readAll: function () {
                if (!N.storage) return Promise.resolve({});
                return N.storage.getData(KEY).then(function (v) {
                    if (!v) return {};
                    try { return JSON.parse(v); } catch (e) { return {}; }
                }).catch(function () { return {}; });
            },
            writePatch: function (patch) {
                if (!N.storage) return Promise.resolve();
                return PB._readRaw().then(function (all) {
                    Object.keys(patch).forEach(function (k) {
                        if (patch[k] === null) delete all[k];
                        else all[k] = patch[k];
                    });
                    return N.storage.setData(KEY, JSON.stringify(all));
                }).catch(function (e) {
                    console.warn('[岐黄] 原生存储写入失败', e);
                });
            }
        };

        var files = {
            saveText: function (fileName, text) {
                if (!N.os || !N.filesystem) return PB._webCall('files', 'saveText', [fileName, text]);
                return N.os.showSaveDialog('保存文件', {
                    defaultPath: fileName,
                    filters: [{ name: '文档', extensions: ['md', 'json', 'txt'] }]
                }).then(function (dest) {
                    if (!dest) return { ok: false, via: 'cancel' };
                    return N.filesystem.writeFile(dest, text).then(function () {
                        return { ok: true, path: dest, via: 'dialog' };
                    });
                }).catch(function () {
                    return PB._webCall('files', 'saveText', [fileName, text]);
                });
            },
            pickImage: function (opts) {
                if (!N.os || !N.filesystem) return PB._webCall('files', 'pickImage', [opts]);
                return N.os.showOpenDialog('选择图片', {
                    filters: [{ name: '图片', extensions: ['jpg', 'jpeg', 'png'] }],
                    multiSelections: false
                }).then(function (paths) {
                    if (!paths || !paths.length) throw { code: 'CANCEL', message: '未选择图片' };
                    var p = paths[0];
                    return N.filesystem.readBinaryFile(p).then(function (buf) {
                        var base = p.split(/[\\/]/).pop();
                        var isPng = /\.png$/i.test(p);
                        return new File([buf], base, { type: isPng ? 'image/png' : 'image/jpeg' });
                    });
                });
            }
        };

        var ui = {
            onBack: function () { /* 桌面端无返回键 */ },
            setBarStyle: function () { /* 桌面端无状态栏 */ },
            exit: function () { if (N.app) N.app.exit(); }
        };

        // 等待 Neutralino 客户端就绪后再注入（避免早期调用 API 失败）
        if (N.events && N.events.on) {
            N.events.on('ready', function () {
                PB.init('neutralino', { storage: storage, files: files, ui: ui });
            });
        } else {
            PB.init('neutralino', { storage: storage, files: files, ui: ui });
        }
        return true;
    }

    if (setupCapacitor()) return;
    setupNeutralino();
})();
