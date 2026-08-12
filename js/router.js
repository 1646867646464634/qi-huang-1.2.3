// ===== 岐黄·辅助诊疗系统 - Hash路由 =====
class Router {
    constructor(routes, defaultRoute) {
        this.routes = routes;
        this.defaultRoute = defaultRoute;
        this.currentRoute = null;
        this.currentKey = null;
        this.params = {};
        
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    }
    
    handleRoute() {
        let rawHash = window.location.hash.slice(1) || this.defaultRoute;
        // 兼容 #/xxx 和 #xxx 两种格式
        if (rawHash.startsWith('/')) rawHash = rawHash.slice(1);
        const [path, ...paramParts] = rawHash.split('?');
        
        // 解析查询参数
        this.params = {};
        if (paramParts.length > 0) {
            paramParts.join('?').split('&').forEach(pair => {
                if (!pair) return;
                const eq = pair.indexOf('=');
                if (eq === -1) {
                    this.params[decodeURIComponent(pair)] = '';
                } else {
                    const k = pair.slice(0, eq);
                    const v = pair.slice(eq + 1);
                    this.params[decodeURIComponent(k)] = decodeURIComponent(v || '');
                }
            });
        }
        
        const route = this.routes[path] || this.routes[this.defaultRoute];
        
        // 同路径但参数不同也重新触发渲染（如 #/symptom?search=xxx）
        const key = path + JSON.stringify(this.params);
        if (route && (route !== this.currentRoute || key !== this.currentKey)) {
            this.currentRoute = route;
            this.currentKey = key;
            if (typeof route === 'function') {
                route(this.params);
            }
        }
        
        this.updateActiveNav(path);
    }
    
    updateActiveNav(path) {
        DOM.$$('.nav-item').forEach(item => {
            const tab = item.getAttribute('data-tab');
            if (tab === path) {
                DOM.addClass(item, 'active');
            } else {
                DOM.removeClass(item, 'active');
            }
        });
    }
    
    // 支持带查询参数的导航：navigate('symptom', { search: '头痛' }) 或 navigate('#/symptom?search=头痛')
    navigate(path, params) {
        let hash = path;
        if (params && typeof params === 'object') {
            const qs = Object.entries(params)
                .filter(([, v]) => v !== undefined && v !== null && v !== '')
                .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
                .join('&');
            if (qs) {
                hash = hash.replace(/[?#].*$/, '');
                if (!hash.startsWith('#')) hash = '#' + (hash.startsWith('/') ? '' : '/') + hash;
                hash += '?' + qs;
            }
        }
        if (!hash.startsWith('#')) {
            hash = '#' + (hash.startsWith('/') ? '' : '/') + hash;
        }
        if (window.location.hash === hash) {
            // 相同 hash 不会触发 hashchange，手动重新处理
            this.handleRoute();
        } else {
            window.location.hash = hash;
        }
    }
    
    getParams() {
        return this.params;
    }
}
