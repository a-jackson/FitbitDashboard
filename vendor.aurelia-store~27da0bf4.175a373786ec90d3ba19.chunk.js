(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"aurelia-store":function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"configure",function(){return F}),r.d(e,"PerformanceMeasurement",function(){return E}),r.d(e,"UnregisteredActionError",function(){return L}),r.d(e,"Store",function(){return D}),r.d(e,"dispatchify",function(){return P}),r.d(e,"executeSteps",function(){return N}),r.d(e,"jump",function(){return v}),r.d(e,"nextStateHistory",function(){return m}),r.d(e,"applyLimits",function(){return b}),r.d(e,"isStateHistory",function(){return w}),r.d(e,"DEFAULT_LOCAL_STORAGE_KEY",function(){return A}),r.d(e,"MiddlewarePlacement",function(){return T}),r.d(e,"logMiddleware",function(){return S}),r.d(e,"localStorageMiddleware",function(){return M}),r.d(e,"rehydrateFromLocalStorage",function(){return _}),r.d(e,"LogLevel",function(){return O}),r.d(e,"LoggerIndexed",function(){return j}),r.d(e,"getLogType",function(){return k}),r.d(e,"connectTo",function(){return x});var n=r("26FU"),o=r("6blF"),i=r("pugT"),a=r("3U8n"),s=r("MP1E"),u=r("70NS"),c=r("0mNj"),p=r("t9fZ"),l=r("vubp");Object.entries||(Object.entries=function(t){for(var e=Object.keys(t),r=e.length,n=new Array(r);r--;)n[r]=[e[r],t[e[r]]];return n})
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */;var f=function(t,e){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function h(t,e){function r(){this.constructor=t}f(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var d=function(){return(d=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function g(e,r,n,o){return new(n||(n=t))(function(t,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function s(t){try{u(o.throw(t))}catch(t){i(t)}}function u(e){e.done?t(e.value):new n(function(t){t(e.value)}).then(a,s)}u((o=o.apply(e,r||[])).next())})}function y(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function v(t,e){return w(t)?e>0?function(t,e){if(e<0||e>=t.future.length)return t;var r=t.past,n=t.future,o=t.present,i=r.concat([o],n.slice(0,e)),a=n[e],s=n.slice(e+1);return{past:i,present:a,future:s}}(t,e-1):e<0?function(t,e){if(e<0||e>=t.past.length)return t;var r=t.past,n=t.future,o=t.present,i=r.slice(0,e),a=r.slice(e+1).concat([o],n),s=r[e];return{past:i,present:s,future:a}}(t,t.past.length+e):t:t}function m(t,e){return Object.assign({},t,{past:t.past.concat([t.present]),present:e,future:[]})}function b(t,e){return w(t)&&(t.past.length>e&&(t.past=t.past.slice(t.past.length-e)),t.future.length>e&&(t.future=t.future.slice(0,e))),t}function w(t){return void 0!==t.present&&void 0!==t.future&&void 0!==t.past&&Array.isArray(t.future)&&Array.isArray(t.past)}var T,O,A="aurelia-store-state";function S(t,e,r){var n=r&&r.logType&&console.hasOwnProperty(r.logType)?r.logType:"log";console[n]("New state: ",t)}function M(t,e,r){if(u.PLATFORM.global.localStorage){var n=r&&r.key||A;u.PLATFORM.global.localStorage.setItem(n,JSON.stringify(t))}}function _(t,e){if(!u.PLATFORM.global.localStorage)return t;var r=u.PLATFORM.global.localStorage.getItem(e||A);if(!r)return t;try{return JSON.parse(r)}catch(t){}return t}!function(t){t.Before="before",t.After="after"}(T||(T={})),function(t){t.trace="trace",t.debug="debug",t.info="info",t.log="log",t.warn="warn",t.error="error"}(O||(O={}));var E,j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e}(s.Logger);function k(t,e,r){return e&&t.logDefinitions&&t.logDefinitions.hasOwnProperty(e)&&t.logDefinitions[e]&&Object.values(O).includes(t.logDefinitions[e])?t.logDefinitions[e]:r}!function(t){t.StartEnd="startEnd",t.All="all"}(E||(E={}));var L=function(t){function e(e){return t.call(this,"Tried to dispatch an unregistered action "+(e&&("string"==typeof e?e:e.name)))||this}return h(e,t),e}(Error),D=function(){function e(t,e){this.initialState=t,this.logger=Object(s.getLogger)("aurelia-store"),this.devToolsAvailable=!1,this.actions=new Map,this.middlewares=new Map,this._markNames=new Set,this._measureNames=new Set,this.dispatchQueue=[],this.options=e||{};var r=this.options.history&&!0===this.options.history.undoable;this._state=new n.a(t),this.state=this._state.asObservable(),this.options.devToolsOptions&&!0===this.options.devToolsOptions.disable||this.setupDevTools(),r&&this.registerHistoryMethods()}return e.prototype.registerMiddleware=function(t,e,r){this.middlewares.set(t,{placement:e,settings:r})},e.prototype.unregisterMiddleware=function(t){this.middlewares.has(t)&&this.middlewares.delete(t)},e.prototype.isMiddlewareRegistered=function(t){return this.middlewares.has(t)},e.prototype.registerAction=function(t,e){if(0===e.length)throw new Error("The reducer is expected to have one or more parameters, where the first will be the present state");this.actions.set(e,{type:t})},e.prototype.unregisterAction=function(t){this.actions.has(t)&&this.actions.delete(t)},e.prototype.isActionRegistered=function(t){return"string"==typeof t?void 0!==Array.from(this.actions).find(function(e){return e[1].type===t}):this.actions.has(t)},e.prototype.resetToState=function(t){this._state.next(t)},e.prototype.dispatch=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var o=this.lookupAction(e);return o?this.queueDispatch([{reducer:o,params:r}]):t.reject(new L(e))},e.prototype.pipe=function(t){for(var e=this,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var o=[],i={dispatch:function(){return e.queueDispatch(o)},pipe:function(r){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];var s=e.lookupAction(r);if(!s)throw new L(t);return o.push({reducer:s,params:n}),i}};return i.pipe.apply(i,[t].concat(r))},e.prototype.lookupAction=function(t){if("string"==typeof t){var e=Array.from(this.actions).find(function(e){e[0];return e[1].type===t});if(e)return e[0]}else if(this.actions.has(t))return t},e.prototype.queueDispatch=function(e){var r=this;return new t(function(t,n){r.dispatchQueue.push({actions:e,resolve:t,reject:n}),1===r.dispatchQueue.length&&r.handleQueue()})},e.prototype.handleQueue=function(){return g(this,void 0,void 0,function(){var t,e;return y(this,function(r){switch(r.label){case 0:if(!(this.dispatchQueue.length>0))return[3,5];t=this.dispatchQueue[0],r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.internalDispatch(t.actions)];case 2:return r.sent(),t.resolve(),[3,4];case 3:return e=r.sent(),t.reject(e),[3,4];case 4:this.dispatchQueue.shift(),this.handleQueue(),r.label=5;case 5:return[2]}})})},e.prototype.internalDispatch=function(t){return g(this,void 0,void 0,function(){var e,r,n,o,i,a,s,c,p,l,f,h,d=this;return y(this,function(g){switch(g.label){case 0:if(e=t.find(function(t){return!d.actions.has(t.reducer)}))throw new L(e.reducer);return this.mark("dispatch-start"),r=t.map(function(t){return{type:d.actions.get(t.reducer).type,params:t.params,reducer:t.reducer}}),n={name:r.map(function(t){return t.type}).join("->"),params:r.reduce(function(t,e){return t.concat(e.params)},[]),pipedActions:r.map(function(t){return{name:t.type,params:t.params}})},this.options.logDispatchedActions&&this.logger[k(this.options,"dispatchedActions",O.info)]("Dispatching: "+n.name),[4,this.executeMiddlewares(this._state.getValue(),T.Before,n)];case 1:if(!1===(o=g.sent()))return this.clearMarks(),this.clearMeasures(),[2];i=o,a=0,s=r,g.label=2;case 2:return a<s.length?[4,(c=s[a]).reducer.apply(c,[i].concat(c.params))]:[3,5];case 3:if(!1===(i=g.sent()))return this.clearMarks(),this.clearMeasures(),[2];if(this.mark("dispatch-after-reducer-"+c.type),!i&&"object"!=typeof i)throw new Error("The reducer has to return a new state");g.label=4;case 4:return a++,[3,2];case 5:return[4,this.executeMiddlewares(i,T.After,n)];case 6:return!1===(p=g.sent())?(this.clearMarks(),this.clearMeasures(),[2]):(w(p)&&this.options.history&&this.options.history.limit&&(p=b(p,this.options.history.limit)),this._state.next(p),this.mark("dispatch-end"),this.options.measurePerformance===E.StartEnd?(this.measure("startEndDispatchDuration","dispatch-start","dispatch-end"),l=u.PLATFORM.performance.getEntriesByName("startEndDispatchDuration","measure"),this.logger[k(this.options,"performanceLog",O.info)]("Total duration "+l[0].duration+" of dispatched action "+n.name+":",l)):this.options.measurePerformance===E.All&&(f=u.PLATFORM.performance.getEntriesByType("mark"),h=f[f.length-1].startTime-f[0].startTime,this.logger[k(this.options,"performanceLog",O.info)]("Total duration "+h+" of dispatched action "+n.name+":",f)),this.clearMarks(),this.clearMeasures(),this.updateDevToolsState({type:n.name,params:n.params},p),[2])}})})},e.prototype.executeMiddlewares=function(t,e,r){var n=this;return Array.from(this.middlewares).filter(function(t){return t[1].placement===e}).reduce(function(t,o,i,a){return g(n,void 0,void 0,function(){var n,i,a,s,u;return y(this,function(c){switch(c.label){case 0:return c.trys.push([0,5,7,8]),a=(i=o)[0],[4,t];case 1:return[4,a.apply(i,[c.sent(),this._state.getValue(),o[1].settings,r])];case 2:return!1===(n=c.sent())?([],[2,!1]):(s=n)?[3,4]:[4,t];case 3:s=c.sent(),c.label=4;case 4:return[2,s];case 5:if(u=c.sent(),this.options.propagateError)throw[],u;return[4,t];case 6:return[2,c.sent()];case 7:return this.mark("dispatch-"+e+"-"+o[0].name),[7];case 8:return[2]}})})},t)},e.prototype.setupDevTools=function(){var t=this;u.PLATFORM.global.devToolsExtension&&(this.logger[k(this.options,"devToolsStatus",O.debug)]("DevTools are available"),this.devToolsAvailable=!0,this.devTools=u.PLATFORM.global.__REDUX_DEVTOOLS_EXTENSION__.connect(this.options.devToolsOptions),this.devTools.init(this.initialState),this.devTools.subscribe(function(e){if(t.logger[k(t.options,"devToolsStatus",O.debug)]("DevTools sent change "+e.type),"ACTION"===e.type&&e.payload){var r=Array.from(t.actions).find(function(t){return t[0].name===e.payload.name}),n=t.lookupAction(e.payload.name)||r&&r[0];if(!n)throw new Error("Tried to remotely dispatch an unregistered action");if(!e.payload.args||e.payload.args.length<1)throw new Error("No action arguments provided");t.dispatch.apply(t,[n].concat(e.payload.args.slice(1).map(function(t){return JSON.parse(t)})))}else if("DISPATCH"===e.type&&e.payload)switch(e.payload.type){case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return void t._state.next(JSON.parse(e.state));case"COMMIT":return void t.devTools.init(t._state.getValue());case"RESET":return t.devTools.init(t.initialState),void t.resetToState(t.initialState);case"ROLLBACK":var o=JSON.parse(e.state);return t.resetToState(o),void t.devTools.init(o)}}))},e.prototype.updateDevToolsState=function(t,e){this.devToolsAvailable&&this.devTools.send(t,e)},e.prototype.registerHistoryMethods=function(){this.registerAction("jump",v)},e.prototype.mark=function(t){this._markNames.add(t),u.PLATFORM.performance.mark(t)},e.prototype.clearMarks=function(){this._markNames.forEach(function(t){return u.PLATFORM.performance.clearMarks(t)}),this._markNames.clear()},e.prototype.measure=function(t,e,r){this._measureNames.add(t),u.PLATFORM.performance.measure(t,e,r)},e.prototype.clearMeasures=function(){this._measureNames.forEach(function(t){return u.PLATFORM.performance.clearMeasures(t)}),this._measureNames.clear()},e}();function P(t){var e=a.Container.instance.get(D);return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.dispatch.apply(e,[t].concat(r))}}function N(e,r){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return g(this,void 0,void 0,function(){var o,i,a;return y(this,function(s){return o=function(t,e){return function(n){r&&(console.group("Step "+e),console.log(n),console.groupEnd()),t(n)}},i=function(t,e){return function(r){try{t(r)}catch(t){e(t)}}},a=function(t,e){return function(r){t(r),e()}},[2,new t(function(t,r){var s=0;n.slice(0,-1).forEach(function(t){e.state.pipe(Object(c.a)(s),Object(p.a)(1),Object(l.a)(0)).subscribe(i(o(t,s),r)),s++}),e.state.pipe(Object(c.a)(s),Object(p.a)(1)).subscribe(a(i(o(n[n.length-1],s),r),t))})]})})}var R=function(t){return t.state};function x(t){var e,r=d({selector:"function"==typeof t?t:R},t);function n(t){var r=e||(e=a.Container.instance.get(D)),n=t(r);return n instanceof o.a?n:r.state}function s(){var t,e="object"==typeof r.selector,n=((t={})[r.target||"state"]=r.selector||R,t);return Object.entries(d({},e?r.selector:n)).map(function(t){var n,o=t[0],i=t[1];return{targets:r.target&&e?[r.target,o]:[o],selector:i,changeHandlers:(n={},n[r.onChanged||""]=1,n[(r.target||o)+"Changed"]=r.target?0:1,n.propertyChanged=0,n)}})}return function(r){var o=r.prototype.created,a="object"==typeof t&&t.setup?r.prototype[t.setup]:r.prototype.bind,u="object"==typeof t&&t.teardown?r.prototype[t.teardown]:r.prototype.unbind;"function"!=typeof o&&void 0!==o||(r.prototype.created=function(t,r){if(e=r.container.get(D),void 0!==o)return o.call(this,t,r)}),r.prototype["object"==typeof t&&t.setup?t.setup:"bind"]=function(){var e=this;if("object"==typeof t&&"string"==typeof t.onChanged&&!(t.onChanged in this))throw new Error("Provided onChanged handler does not exist on target VM");if(this._stateSubscriptions=s().map(function(t){return n(t.selector).subscribe(function(r){var n=t.targets.length-1,o=t.targets.reduce(function(t,e){return void 0===t&&(t={}),t[e]},e);Object.entries(t.changeHandlers).forEach(function(i){var a=i[0],s=i[1];a in e&&e[a].apply(e,[t.targets[n],r,o].slice(s,3))}),t.targets.reduce(function(t,e,o){return t[e]=o===n?r:t[e]||{},t[e]},e)})}),a)return a.apply(this,arguments)},r.prototype["object"==typeof t&&t.teardown?t.teardown:"unbind"]=function(){if(this._stateSubscriptions&&Array.isArray(this._stateSubscriptions)&&this._stateSubscriptions.forEach(function(t){t instanceof i.a&&!1===t.closed&&t.unsubscribe()}),u)return u.apply(this,arguments)}}}function F(t,e){if(!e||!e.initialState)throw new Error("initialState must be provided via options");var r=e.initialState;e&&e.history&&e.history.undoable&&!w(e.initialState)&&(r={past:[],present:e.initialState,future:[]}),delete e.initialState,t.container.registerInstance(D,new D(r,e))}}.call(this,r("B/eG").default)}}]);
//# sourceMappingURL=vendor.aurelia-store~27da0bf4.175a373786ec90d3ba19.bundle.map