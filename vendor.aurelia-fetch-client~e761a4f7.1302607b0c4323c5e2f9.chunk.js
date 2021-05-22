(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qQke:function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"json",function(){return o}),r.d(e,"retryStrategy",function(){return i}),r.d(e,"RetryInterceptor",function(){return u}),r.d(e,"HttpClientConfiguration",function(){return c}),r.d(e,"HttpClient",function(){return p});var n=r("70NS");function o(t,e){return JSON.stringify(void 0!==t?t:{},e)}var i={fixed:0,incremental:1,exponential:2,random:3},s={maxRetries:3,interval:1e3,strategy:i.fixed},u=function(){function e(t){if(this.retryConfig=Object.assign({},s,t||{}),this.retryConfig.strategy===i.exponential&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}return e.prototype.request=function(t){var e=t;return e.retryConfig||(e.retryConfig=Object.assign({},this.retryConfig),e.retryConfig.counter=0),e.retryConfig.requestClone=t.clone(),t},e.prototype.response=function(t,e){return delete e.retryConfig,t},e.prototype.responseError=function(e,r,o){var s=r.retryConfig,u=s.requestClone;return t.resolve().then(function(){if(s.counter<s.maxRetries){var c=!s.doRetry||s.doRetry(e,r);return t.resolve(c).then(function(c){if(c)return s.counter++,new t(function(t){return n.PLATFORM.global.setTimeout(t,function(t){var e=t.interval,r=t.strategy,n=t.minRandomInterval,o=t.maxRandomInterval,s=t.counter;if("function"==typeof r)return t.strategy(s);switch(r){case i.fixed:return a[i.fixed](e);case i.incremental:return a[i.incremental](s,e);case i.exponential:return a[i.exponential](s,e);case i.random:return a[i.random](s,e,n,o);default:throw new Error("Unrecognized retry strategy")}}(s)||0)}).then(function(){var t=u.clone();return"function"==typeof s.beforeRetry?s.beforeRetry(t,o):t}).then(function(t){return o.fetch(Object.assign(t,{retryConfig:s}))});throw delete r.retryConfig,e})}throw delete r.retryConfig,e})},e}();var a=[function(t){return t},function(t,e){return e*t},function(t,e){return 1===t?e:Math.pow(e,t)/1e3},function(t,e,r,n){return void 0===r&&(r=0),void 0===n&&(n=6e4),Math.random()*(n-r)+r}],c=function(){function t(){this.baseUrl="",this.defaults={},this.interceptors=[]}return t.prototype.withBaseUrl=function(t){return this.baseUrl=t,this},t.prototype.withDefaults=function(t){return this.defaults=t,this},t.prototype.withInterceptor=function(t){return this.interceptors.push(t),this},t.prototype.useStandardConfiguration=function(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()},t.prototype.rejectErrorResponses=function(){return this.withInterceptor({response:f})},t.prototype.withRetry=function(t){var e=new u(t);return this.withInterceptor(e)},t}();function f(t){if(!t.ok)throw t;return t}var p=function(){function e(){if(this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.interceptors=[],"undefined"==typeof fetch)throw new Error("HttpClient requires a Fetch API implementation, but the current environment doesn't support it. You may need to load a polyfill such as https://github.com/github/fetch")}return e.prototype.configure=function(t){var e;if("object"==typeof t)e={defaults:t};else{if("function"!=typeof t)throw new Error("invalid config");(e=new c).baseUrl=this.baseUrl,e.defaults=Object.assign({},this.defaults),e.interceptors=this.interceptors;var r=t(e);c.prototype.isPrototypeOf(r)&&(e=r)}var n=e.defaults;if(n&&Headers.prototype.isPrototypeOf(n.headers))throw new Error("Default headers must be a plain object.");var o=e.interceptors;if(o&&o.length){if(o.filter(function(t){return u.prototype.isPrototypeOf(t)}).length>1)throw new Error("Only one RetryInterceptor is allowed.");var i=o.findIndex(function(t){return u.prototype.isPrototypeOf(t)});if(i>=0&&i!==o.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=e.baseUrl,this.defaults=n,this.interceptors=e.interceptors||[],this.isConfigured=!0,this},e.prototype.fetch=function(e,r){var o=this;!function(t){if(t.isRequesting=!!++t.activeRequestCount,t.isRequesting){var e=n.DOM.createCustomEvent("aurelia-fetch-client-request-started",{bubbles:!0,cancelable:!0});setTimeout(function(){return n.DOM.dispatchEvent(e)},1)}}(this);var i=this.buildRequest(e,r);return function(t,e,r){return y(t,e,"request","requestError",r)}(i,this.interceptors,this).then(function(e){var r=null;if(Response.prototype.isPrototypeOf(e))r=t.resolve(e);else{if(!Request.prototype.isPrototypeOf(e))throw new Error("An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got ["+e+"]");i=e,r=fetch(e)}return function(t,e,r,n){return y(t,e,"response","responseError",r,n)}(r,o.interceptors,i,o)}).then(function(t){return Request.prototype.isPrototypeOf(t)?o.fetch(t):t}).then(function(t){return l(o),t},function(t){throw l(o),t})},e.prototype.buildRequest=function(t,e){var r,n,o,i=this.defaults||{},s=function(t){var e={};for(var r in t||{})t.hasOwnProperty(r)&&(e[r]="function"==typeof t[r]?t[r]():t[r]);return e}(i.headers);if(Request.prototype.isPrototypeOf(t))r=t,o=new Headers(r.headers).get("Content-Type");else{e||(e={});var u=(n=e.body)?{body:n}:null,a=Object.assign({},i,{headers:{}},e,u);o=new Headers(a.headers).get("Content-Type"),r=new Request(function(t,e){if(h.test(e))return e;return(t||"")+e}(this.baseUrl,t),a)}return o||(new Headers(s).has("content-type")?r.headers.set("Content-Type",new Headers(s).get("content-type")):n&&function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(n)&&r.headers.set("Content-Type","application/json")),function(t,e){for(var r in e||{})e.hasOwnProperty(r)&&!t.has(r)&&t.set(r,e[r])}(r.headers,s),n&&Blob.prototype.isPrototypeOf(n)&&n.type&&r.headers.set("Content-Type",n.type),r},e.prototype.get=function(t,e){return this.fetch(t,e)},e.prototype.post=function(t,e,r){return v(this,t,e,r,"POST")},e.prototype.put=function(t,e,r){return v(this,t,e,r,"PUT")},e.prototype.patch=function(t,e,r){return v(this,t,e,r,"PATCH")},e.prototype.delete=function(t,e,r){return v(this,t,e,r,"DELETE")},e}(),h=/^([a-z][a-z0-9+\-.]*:)?\/\//i;function l(t){if(t.isRequesting=!!--t.activeRequestCount,!t.isRequesting){var e=n.DOM.createCustomEvent("aurelia-fetch-client-requests-drained",{bubbles:!0,cancelable:!0});setTimeout(function(){return n.DOM.dispatchEvent(e)},1)}}function y(e,r,n,o){for(var i=[],s=4;s<arguments.length;s++)i[s-4]=arguments[s];return(r||[]).reduce(function(t,e){var r=e[n],s=e[o];return t.then(r&&function(t){return r.call.apply(r,[e,t].concat(i))}||d,s&&function(t){return s.call.apply(s,[e,t].concat(i))}||g)},t.resolve(e))}function d(t){return t}function g(t){throw t}function v(t,e,r,n,o){return n||(n={}),n.method=o,r&&(n.body=r),t.fetch(e,n)}}.call(this,r("B/eG").default)}}]);
//# sourceMappingURL=vendor.aurelia-fetch-client~e761a4f7.1302607b0c4323c5e2f9.bundle.map