(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{QgUw:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u}));var o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t};function r(e,n){void 0===n&&(n={present:!0,interval:50,timeout:5e3});var r=!1;return n=o({present:!0,interval:50,timeout:5e3},n),t.race([new t((function(t,e){return setTimeout((function(){r=!0,e(new Error(n.present?"Element not found":"Element not removed"))}),n.timeout)})),function o(){var i=e(),u=null!==i&&(!(i instanceof NodeList)&&!i.jquery||i.length>0);return!n.present==!u||r?t.resolve(i):new t((function(t){return setTimeout(t,n.interval)})).then(o)}()])}function i(t,e){return r((function(){return document.querySelector(t)}),e)}function u(t,e){return r((function(){return document.querySelectorAll(t)}),e)}}).call(this,n("B/eG").default)},RZ7W:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var o=n("hij8"),r=n("QgUw"),i=function(){function t(){}return t.withResources=function(t){return void 0===t&&(t=[]),(new u).withResources(t)},t}(),u=function(){function e(){this.resources=[]}return e.prototype.configure=function(t){return t.use.standardConfiguration()},e.prototype.bootstrap=function(t){this.configure=t},e.prototype.withResources=function(t){return this.resources=t,this},e.prototype.inView=function(t){return this.html=t,this},e.prototype.boundTo=function(t){return this.bindingContext=t,this},e.prototype.manuallyHandleLifecycle=function(){return this._prepareLifecycle(),this},e.prototype.create=function(e){var n=this;return e((function(e){return t.resolve(n.configure(e)).then((function(){return n.resources&&e.use.globalResources(n.resources),e.start().then((function(){return n.host=document.createElement("div"),n.host.innerHTML=n.html,document.body.appendChild(n.host),e.enhance(n.bindingContext,n.host).then((function(){return n.rootView=e.root,n.element=n.host.firstElementChild,e.root.controllers.length&&(n.viewModel=e.root.controllers[0].viewModel),new t((function(t){return setTimeout((function(){return t()}),0)}))}))}))}))}))},e.prototype.dispose=function(){if(void 0===this.host||void 0===this.rootView)throw new Error("Cannot call ComponentTester.dispose() before ComponentTester.create()");return this.rootView.detached(),this.rootView.unbind(),this.host.parentNode.removeChild(this.host)},e.prototype._prepareLifecycle=function(){var e=this,n=o.l.prototype.bind;o.l.prototype.bind=function(){},this.bind=function(r){return new t((function(t){o.l.prototype.bind=n,void 0!==r&&(e.bindingContext=r),e.rootView.bind(e.bindingContext),setTimeout((function(){return t()}),0)}))};var r=o.l.prototype.attached;o.l.prototype.attached=function(){},this.attached=function(){return new t((function(t){o.l.prototype.attached=r,e.rootView.attached(),setTimeout((function(){return t()}),0)}))},this.detached=function(){return new t((function(t){e.rootView.detached(),setTimeout((function(){return t()}),0)}))},this.unbind=function(){return new t((function(t){e.rootView.unbind(),setTimeout((function(){return t()}),0)}))}},e.prototype.waitForElement=function(t,e){var n=this;return Object(r.a)((function(){return n.element.querySelector(t)}),e)},e.prototype.waitForElements=function(t,e){var n=this;return Object(r.a)((function(){return n.element.querySelectorAll(t)}),e)},e}()}).call(this,n("B/eG").default)},"aurelia-testing":function(t,e,n){"use strict";n.r(e),n.d(e,"configure",(function(){return c}));var o=n("aurelia-testing/compile-spy");n.d(e,"CompileSpy",(function(){return o.CompileSpy}));var r=n("aurelia-testing/view-spy");n.d(e,"ViewSpy",(function(){return r.ViewSpy}));var i=n("RZ7W");n.d(e,"StageComponent",(function(){return i.b})),n.d(e,"ComponentTester",(function(){return i.a}));var u=n("QgUw");function c(t){t.globalResources(["./compile-spy","./view-spy"])}n.d(e,"waitFor",(function(){return u.a})),n.d(e,"waitForDocumentElement",(function(){return u.b})),n.d(e,"waitForDocumentElements",(function(){return u.c}))},"aurelia-testing/compile-spy":function(t,e,n){"use strict";n.r(e),n.d(e,"CompileSpy",(function(){return s}));var o=n("hij8"),r=n("3U8n"),i=n("MP1E"),u=n("70NS"),c=function(t,e,n,o){var r,i=arguments.length,u=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(u=(i<3?r(u):i>3?r(e,n,u):r(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},s=function(){function t(t,e){Object(i.getLogger)("compile-spy").info(t.toString(),e)}return t=c([Object(o.r)("compile-spy"),Object(r.inject)(u.DOM.Element,o.j)],t)}()},"aurelia-testing/view-spy":function(t,e,n){"use strict";n.r(e),n.d(e,"ViewSpy",(function(){return u}));var o=n("hij8"),r=n("MP1E"),i=function(t,e,n,o){var r,i=arguments.length,u=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(u=(i<3?r(u):i>3?r(e,n,u):r(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=function(){function t(){this.logger=Object(r.getLogger)("view-spy")}return t.prototype._log=function(t,e){this.value||"created"!==t?this.value&&-1!==this.value.indexOf(t)&&this.logger.info(t,this.view,e):this.logger.info(t,this.view)},t.prototype.created=function(t){this.view=t,this._log("created")},t.prototype.bind=function(t){this._log("bind",t)},t.prototype.attached=function(){this._log("attached")},t.prototype.detached=function(){this._log("detached")},t.prototype.unbind=function(){this._log("unbind")},t=i([Object(o.r)("view-spy")],t)}()}}]);
//# sourceMappingURL=vendor.aurelia-testing~4eb3b4b8.1dd8f10acef02ec967eb.bundle.map