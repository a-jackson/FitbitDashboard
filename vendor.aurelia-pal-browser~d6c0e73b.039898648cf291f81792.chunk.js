(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"aurelia-pal-browser":function(e,t,n){"use strict";n.r(t),n.d(t,"_PLATFORM",function(){return i}),n.d(t,"_FEATURE",function(){return N}),n.d(t,"_DOM",function(){return k}),n.d(t,"initialize",function(){return _});var r=n("70NS"),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i={location:window.location,history:window.history,addEventListener:function(e,t,n){this.global.addEventListener(e,t,n)},removeEventListener:function(e,t,n){this.global.removeEventListener(e,t,n)},performance:window.performance,requestAnimationFrame:function(e){return this.global.requestAnimationFrame(e)}};if("undefined"==typeof FEATURE_NO_IE){void 0===function(){}.name&&Object.defineProperty(Function.prototype,"name",{get:function(){var e=this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];return Object.defineProperty(this,"name",{value:e}),e}})}if("undefined"==typeof FEATURE_NO_IE)if("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var c=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){for(var n=0,r=arguments.length;n<r;++n)e=arguments[n],t.call(this,e)}};c("add"),c("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var u=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:u.call(this,e)}}a=null}else{var l=String.prototype.trim,m=Array.prototype.indexOf,s=[],d=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},p=function(e,t){if(""===t)throw new d("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new d("INVALID_CHARACTER_ERR","String contains an invalid character");return m.call(e,t)},f=function(e){for(var t=l.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):s,r=0,o=n.length;r<o;++r)this.push(n[r]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},w=f.prototype=[];d.prototype=Error.prototype,w.item=function(e){return this[e]||null},w.contains=function(e){return-1!==p(this,e+="")},w.add=function(){var e=arguments,t=0,n=e.length,r=void 0,o=!1;do{r=e[t]+"",-1===p(this,r)&&(this.push(r),o=!0)}while(++t<n);o&&this._updateClassName()},w.remove=function(){var e=arguments,t=0,n=e.length,r=void 0,o=!1,i=void 0;do{for(r=e[t]+"",i=p(this,r);-1!==i;)this.splice(i,1),o=!0,i=p(this,r)}while(++t<n);o&&this._updateClassName()},w.toggle=function(e,t){e+="";var n=this.contains(e),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},w.toString=function(){return this.join(" ")},Object.defineProperty(Element.prototype,"classList",{get:function(){return new f(this)},enumerable:!0,configurable:!0})}if("undefined"==typeof FEATURE_NO_IE){var E=function(e,t){for(var n=0,r=y.length,o=[];n<r;n++)y[n][e]==t&&o.push(y[n]);return o},v=function(e,t){for(var n,r=y.length;r--;)(n=y[r]).entryType!=e||void 0!==t&&n.name!=t||y.splice(r,1)};if(
// @license http://opensource.org/licenses/MIT
"performance"in window==!1&&(window.performance={}),"now"in window.performance==!1){var h=Date.now();performance.timing&&performance.timing.navigationStart&&(h=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-h}}Date.now?Date.now():new Date;var y=[],g={};window.performance.mark||(window.performance.mark=window.performance.webkitMark||function(e){var t={name:e,entryType:"mark",startTime:window.performance.now(),duration:0};y.push(t),g[e]=t}),window.performance.measure||(window.performance.measure=window.performance.webkitMeasure||function(e,t,n){t=g[t].startTime,n=g[n].startTime,y.push({name:e,entryType:"measure",startTime:t,duration:n-t})}),window.performance.getEntriesByType||(window.performance.getEntriesByType=window.performance.webkitGetEntriesByType||function(e){return E("entryType",e)}),window.performance.getEntriesByName||(window.performance.getEntriesByName=window.performance.webkitGetEntriesByName||function(e){return E("name",e)}),window.performance.clearMarks||(window.performance.clearMarks=window.performance.webkitClearMarks||function(e){v("mark",e)}),window.performance.clearMeasures||(window.performance.clearMeasures=window.performance.webkitClearMeasures||function(e){v("measure",e)}),i.performance=window.performance}if("undefined"==typeof FEATURE_NO_IE){var b=window.console=window.console||{},T=function(){};b.memory||(b.memory={}),"assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",").forEach(function(e){b[e]||(b[e]=T)}),"object"===o(b.log)&&"log,info,warn,error,assert,dir,clear,profile,profileEnd".split(",").forEach(function(e){console[e]=this.bind(console[e],console)},Function.prototype.call)}if("undefined"==typeof FEATURE_NO_IE&&(!window.CustomEvent||"function"!=typeof window.CustomEvent)){var S=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};S.prototype=window.Event.prototype,window.CustomEvent=S}if(Element&&!Element.prototype.matches){var M=Element.prototype;M.matches=M.matchesSelector||M.mozMatchesSelector||M.msMatchesSelector||M.oMatchesSelector||M.webkitMatchesSelector}var L,N={shadowDOM:!!HTMLElement.prototype.attachShadow,scopedCSS:"scoped"in document.createElement("style"),htmlTemplateElement:(L=document.createElement("div"),L.innerHTML="<template></template>","content"in L.children[0]),mutationObserver:!(!window.MutationObserver&&!window.WebKitMutationObserver),ensureHTMLTemplateElement:function(e){return e}};if("undefined"==typeof FEATURE_NO_IE){var C=function(e){var t=e.ownerDocument.createElement("template"),n=e.attributes,r=n.length,o=void 0;for(e.parentNode.insertBefore(t,e);r-- >0;)o=n[r],t.setAttribute(o.name,o.value),e.removeAttribute(o.name);return e.parentNode.removeChild(e),O(t)},O=function(e){for(var t=e.content=document.createDocumentFragment(),n=void 0;n=e.firstChild;)t.appendChild(n);return e};N.htmlTemplateElement||(N.ensureHTMLTemplateElement=function(e){for(var t,n=O(e).content.querySelectorAll("template"),r=0,o=n.length;r<o;++r){var i=n[r];"template"===(t=i).tagName&&"http://www.w3.org/2000/svg"===t.namespaceURI?C(i):O(i)}return e})}var A=window.ShadowDOMPolyfill||null,k={Element:Element,NodeList:NodeList,SVGElement:SVGElement,boundary:"aurelia-dom-boundary",addEventListener:function(e,t,n){document.addEventListener(e,t,n)},removeEventListener:function(e,t,n){document.removeEventListener(e,t,n)},adoptNode:function(e){return document.adoptNode(e)},createAttribute:function(e){return document.createAttribute(e)},createElement:function(e){return document.createElement(e)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},createDocumentFragment:function(){return document.createDocumentFragment()},createTemplateElement:function(){var e=document.createElement("template");return N.ensureHTMLTemplateElement(e)},createMutationObserver:function(e){return new(window.MutationObserver||window.WebKitMutationObserver)(e)},createCustomEvent:function(e,t){return new window.CustomEvent(e,t)},dispatchEvent:function(e){document.dispatchEvent(e)},getComputedStyle:function(e){return window.getComputedStyle(e)},getElementById:function(e){return document.getElementById(e)},querySelector:function(e){return document.querySelector(e)},querySelectorAll:function(e){return document.querySelectorAll(e)},nextElementSibling:function(e){if(e.nextElementSibling)return e.nextElementSibling;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e},createTemplateFromMarkup:function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.firstElementChild;if(!n||"TEMPLATE"!==n.nodeName)throw new Error("Template markup must be wrapped in a <template> element e.g. <template> \x3c!-- markup here --\x3e </template>");return N.ensureHTMLTemplateElement(n)},appendNode:function(e,t){(t||document.body).appendChild(e)},replaceNode:function(e,t,n){t.parentNode?t.parentNode.replaceChild(e,t):null!==A?A.unwrap(n).replaceChild(A.unwrap(e),A.unwrap(t)):n.replaceChild(e,t)},removeNode:function(e,t){e.parentNode?e.parentNode.removeChild(e):t&&(null!==A?A.unwrap(t).removeChild(A.unwrap(e)):t.removeChild(e))},injectStyles:function(e,t,n,r){if(r){var o=document.getElementById(r);if(o){if("style"===o.tagName.toLowerCase())return void(o.innerHTML=e);throw new Error("The provided id does not indicate a style tag.")}}var i=document.createElement("style");return i.innerHTML=e,i.type="text/css",r&&(i.id=r),t=t||document.head,n&&t.childNodes.length>0?t.insertBefore(i,t.childNodes[0]):t.appendChild(i),i}};function _(){r.isInitialized||Object(r.initializePAL)(function(e,t,n){Object.assign(e,i),Object.assign(t,N),Object.assign(n,k),Object.defineProperty(n,"title",{get:function(){return document.title},set:function(e){document.title=e}}),Object.defineProperty(n,"activeElement",{get:function(){return document.activeElement}}),Object.defineProperty(e,"XMLHttpRequest",{get:function(){return e.global.XMLHttpRequest}})})}}}]);
//# sourceMappingURL=vendor.aurelia-pal-browser~d6c0e73b.039898648cf291f81792.bundle.map