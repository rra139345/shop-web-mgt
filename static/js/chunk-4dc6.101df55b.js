(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4dc6"],{Ddwv:function(t,e,n){var r,o,i;o=[t,n("YDNs"),n("wOJ8"),n("TiCD")],void 0===(i="function"==typeof(r=function(t,e,n,r){"use strict";var o=c(e),i=c(n),u=c(r);function c(t){return t&&t.__esModule?t:{default:t}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),s(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===a(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return l("action",t)}},{key:"defaultTarget",value:function(t){var e=l("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return l("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(i.default);function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=f})?r.apply(e,o):r)||(t.exports=i)},"S+eF":function(t,e,n){(function(e){
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
!function(e){"use strict";"function"==typeof bootstrap?bootstrap("promise",e):t.exports=e()}(function(){"use strict";var t=!1;try{throw new Error}catch(e){t=!!e.stack}var n,r=E(),o=function(){},i=function(){var t={task:void 0,next:null},n=t,r=!1,o=void 0,u=!1,c=[];function a(){for(var e,n;t.next;)e=(t=t.next).task,t.task=void 0,(n=t.domain)&&(t.domain=void 0,n.enter()),s(e,n);for(;c.length;)s(e=c.pop());r=!1}function s(t,e){try{t()}catch(t){if(u)throw e&&e.exit(),setTimeout(a,0),e&&e.enter(),t;setTimeout(function(){throw t},0)}e&&e.exit()}if(i=function(t){n=n.next={task:t,domain:u&&e.domain,next:null},r||(r=!0,o())},"object"==typeof e&&"[object process]"===e.toString()&&e.nextTick)u=!0,o=function(){e.nextTick(a)};else if("function"==typeof setImmediate)o="undefined"!=typeof window?setImmediate.bind(window,a):function(){setImmediate(a)};else if("undefined"!=typeof MessageChannel){var f=new MessageChannel;f.port1.onmessage=function(){o=l,f.port1.onmessage=a,a()};var l=function(){f.port2.postMessage(0)};o=function(){setTimeout(a,0),l()}}else o=function(){setTimeout(a,0)};return i.runAfter=function(t){c.push(t),r||(r=!0,o())},i}(),u=Function.call;function c(t){return function(){return u.apply(t,arguments)}}var a,s=c(Array.prototype.slice),f=c(Array.prototype.reduce||function(t,e){var n=0,r=this.length;if(1===arguments.length)for(;;){if(n in this){e=this[n++];break}if(++n>=r)throw new TypeError}for(;n<r;n++)n in this&&(e=t(e,this[n],n));return e}),l=c(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),p=c(Array.prototype.map||function(t,e){var n=this,r=[];return f(n,function(o,i,u){r.push(t.call(e,i,u,n))},void 0),r}),h=Object.create||function(t){function e(){}return e.prototype=t,new e},d=Object.defineProperty||function(t,e,n){return t[e]=n.value,t},y=c(Object.prototype.hasOwnProperty),v=Object.keys||function(t){var e=[];for(var n in t)y(t,n)&&e.push(n);return e},m=c(Object.prototype.toString);a="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var g="From previous event:";function k(e,n){if(t&&n.stack&&"object"==typeof e&&null!==e&&e.stack){for(var r=[],o=n;o;o=o.source)o.stack&&(!e.__minimumStackCounter__||e.__minimumStackCounter__>o.stackCounter)&&(d(e,"__minimumStackCounter__",{value:o.stackCounter,configurable:!0}),r.unshift(o.stack));r.unshift(e.stack);var i=function(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;++r){var o=e[r];j(o)||b(o)||!o||n.push(o)}return n.join("\n")}(r.join("\n"+g+"\n"));d(e,"stack",{value:i,configurable:!0})}}function b(t){return-1!==t.indexOf("(module.js:")||-1!==t.indexOf("(node.js:")}function w(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function j(t){var e=w(t);if(!e)return!1;var o=e[0],i=e[1];return o===n&&i>=r&&i<=G}function E(){if(t)try{throw new Error}catch(t){var e=t.stack.split("\n"),r=w(e[0].indexOf("@")>0?e[1]:e[2]);if(!r)return;return n=r[0],r[1]}}function x(t){return t instanceof _?t:P(t)?function(t){var e=S();return x.nextTick(function(){try{t.then(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}}),e.promise}(t):z(t)}x.resolve=x,x.nextTick=i,x.longStackSupport=!1;var T=1;function S(){var e,n=[],r=[],o=h(S.prototype),i=h(_.prototype);if(i.promiseDispatch=function(t,o,i){var u=s(arguments);n?(n.push(u),"when"===o&&i[1]&&r.push(i[1])):x.nextTick(function(){e.promiseDispatch.apply(e,u)})},i.valueOf=function(){if(n)return i;var t=R(e);return N(t)&&(e=t),t},i.inspect=function(){return e?e.inspect():{state:"pending"}},x.longStackSupport&&t)try{throw new Error}catch(t){i.stack=t.stack.substring(t.stack.indexOf("\n")+1),i.stackCounter=T++}function u(o){e=o,x.longStackSupport&&t&&(i.source=o),f(n,function(t,e){x.nextTick(function(){o.promiseDispatch.apply(o,e)})},void 0),n=void 0,r=void 0}return o.promise=i,o.resolve=function(t){e||u(x(t))},o.fulfill=function(t){e||u(z(t))},o.reject=function(t){e||u(H(t))},o.notify=function(t){e||f(r,function(e,n){x.nextTick(function(){n(t)})},void 0)},o}function O(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=S();try{t(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}return e.promise}function A(t){return O(function(e,n){for(var r=0,o=t.length;r<o;r++)x(t[r]).then(e,n)})}function _(t,e,n){void 0===e&&(e=function(t){return H(new Error("Promise does not support operation: "+t))}),void 0===n&&(n=function(){return{state:"unknown"}});var r=h(_.prototype);if(r.promiseDispatch=function(n,o,i){var u;try{u=t[o]?t[o].apply(r,i):e.call(r,o,i)}catch(t){u=H(t)}n&&n(u)},r.inspect=n,n){var o=n();"rejected"===o.state&&(r.exception=o.reason),r.valueOf=function(){var t=n();return"pending"===t.state||"rejected"===t.state?r:t.value}}return r}function C(t,e,n,r){return x(t).then(e,n,r)}function R(t){if(N(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function N(t){return t instanceof _}function P(t){return function(t){return t===Object(t)}(t)&&"function"==typeof t.then}"object"==typeof e&&e&&Object({NODE_ENV:"production",ENV_CONFIG:"prod",BASE_API:"https://www.zzhjshop.com/ma",APP_CONFIG:Object({name:"生产环境应用",baseUrl:"https://www.zzhjshop.com"})})&&Object({NODE_ENV:"production",ENV_CONFIG:"prod",BASE_API:"https://www.zzhjshop.com/ma",APP_CONFIG:Object({name:"生产环境应用",baseUrl:"https://www.zzhjshop.com"})}).Q_DEBUG&&(x.longStackSupport=!0),x.defer=S,S.prototype.makeNodeResolver=function(){var t=this;return function(e,n){e?t.reject(e):arguments.length>2?t.resolve(s(arguments,1)):t.resolve(n)}},x.Promise=O,x.promise=O,O.race=A,O.all=B,O.reject=H,O.resolve=x,x.passByCopy=function(t){return t},_.prototype.passByCopy=function(){return this},x.join=function(t,e){return x(t).join(e)},_.prototype.join=function(t){return x([this,t]).spread(function(t,e){if(t===e)return t;throw new Error("Q can't join: not the same: "+t+" "+e)})},x.race=A,_.prototype.race=function(){return this.then(x.race)},x.makePromise=_,_.prototype.toString=function(){return"[object Promise]"},_.prototype.then=function(t,e,n){var r=this,o=S(),i=!1;return x.nextTick(function(){r.promiseDispatch(function(e){i||(i=!0,o.resolve(function(e){try{return"function"==typeof t?t(e):e}catch(t){return H(t)}}(e)))},"when",[function(t){i||(i=!0,o.resolve(function(t){if("function"==typeof e){k(t,r);try{return e(t)}catch(t){return H(t)}}return H(t)}(t)))}])}),r.promiseDispatch(void 0,"when",[void 0,function(t){var e,r=!1;try{e=function(t){return"function"==typeof n?n(t):t}(t)}catch(t){if(r=!0,!x.onerror)throw t;x.onerror(t)}r||o.notify(e)}]),o.promise},x.tap=function(t,e){return x(t).tap(e)},_.prototype.tap=function(t){return t=x(t),this.then(function(e){return t.fcall(e).thenResolve(e)})},x.when=C,_.prototype.thenResolve=function(t){return this.then(function(){return t})},x.thenResolve=function(t,e){return x(t).thenResolve(e)},_.prototype.thenReject=function(t){return this.then(function(){throw t})},x.thenReject=function(t,e){return x(t).thenReject(e)},x.nearer=R,x.isPromise=N,x.isPromiseAlike=P,x.isPending=function(t){return N(t)&&"pending"===t.inspect().state},_.prototype.isPending=function(){return"pending"===this.inspect().state},x.isFulfilled=function(t){return!N(t)||"fulfilled"===t.inspect().state},_.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},x.isRejected=function(t){return N(t)&&"rejected"===t.inspect().state},_.prototype.isRejected=function(){return"rejected"===this.inspect().state};var F=[],D=[],L=[],I=!0;function M(){F.length=0,D.length=0,I||(I=!0)}function H(t){var n=_({when:function(n){return n&&function(t){if(I){var n=l(D,t);-1!==n&&("object"==typeof e&&"function"==typeof e.emit&&x.nextTick.runAfter(function(){var r=l(L,t);-1!==r&&(e.emit("rejectionHandled",F[n],t),L.splice(r,1))}),D.splice(n,1),F.splice(n,1))}}(this),n?n(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return function(t,n){I&&("object"==typeof e&&"function"==typeof e.emit&&x.nextTick.runAfter(function(){-1!==l(D,t)&&(e.emit("unhandledRejection",n,t),L.push(t))}),D.push(t),n&&void 0!==n.stack?F.push(n.stack):F.push("(no stack) "+n))}(n,t),n}function z(t){return _({when:function(){return t},get:function(e){return t[e]},set:function(e,n){t[e]=n},delete:function(e){delete t[e]},post:function(e,n){return null===e||void 0===e?t.apply(void 0,n):t[e].apply(t,n)},apply:function(e,n){return t.apply(e,n)},keys:function(){return v(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function U(t,e,n){return x(t).spread(e,n)}function Q(t,e,n){return x(t).dispatch(e,n)}function B(t){return C(t,function(t){var e=0,n=S();return f(t,function(r,o,i){var u;N(o)&&"fulfilled"===(u=o.inspect()).state?t[i]=u.value:(++e,C(o,function(r){t[i]=r,0==--e&&n.resolve(t)},n.reject,function(t){n.notify({index:i,value:t})}))},void 0),0===e&&n.resolve(t),n.promise})}function V(t){if(0===t.length)return x.resolve();var e=x.defer(),n=0;return f(t,function(r,o,i){var u=t[i];n++,C(u,function(t){e.resolve(t)},function(t){if(0==--n){var r=t||new Error(""+t);r.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+r.message,e.reject(r)}},function(t){e.notify({index:i,value:t})})},void 0),e.promise}function q(t){return C(t,function(t){return t=p(t,x),C(B(p(t,function(t){return C(t,o,o)})),function(){return t})})}x.resetUnhandledRejections=M,x.getUnhandledReasons=function(){return F.slice()},x.stopUnhandledRejectionTracking=function(){M(),I=!1},M(),x.reject=H,x.fulfill=z,x.master=function(t){return _({isDef:function(){}},function(e,n){return Q(t,e,n)},function(){return x(t).inspect()})},x.spread=U,_.prototype.spread=function(t,e){return this.all().then(function(e){return t.apply(void 0,e)},e)},x.async=function(t){return function(){function e(t,e){var i;if("undefined"==typeof StopIteration){try{i=n[t](e)}catch(t){return H(t)}return i.done?x(i.value):C(i.value,r,o)}try{i=n[t](e)}catch(t){return function(t){return"[object StopIteration]"===m(t)||t instanceof a}(t)?x(t.value):H(t)}return C(i,r,o)}var n=t.apply(this,arguments),r=e.bind(e,"next"),o=e.bind(e,"throw");return r()}},x.spawn=function(t){x.done(x.async(t)())},x.return=function(t){throw new a(t)},x.promised=function(t){return function(){return U([this,B(arguments)],function(e,n){return t.apply(e,n)})}},x.dispatch=Q,_.prototype.dispatch=function(t,e){var n=this,r=S();return x.nextTick(function(){n.promiseDispatch(r.resolve,t,e)}),r.promise},x.get=function(t,e){return x(t).dispatch("get",[e])},_.prototype.get=function(t){return this.dispatch("get",[t])},x.set=function(t,e,n){return x(t).dispatch("set",[e,n])},_.prototype.set=function(t,e){return this.dispatch("set",[t,e])},x.del=x.delete=function(t,e){return x(t).dispatch("delete",[e])},_.prototype.del=_.prototype.delete=function(t){return this.dispatch("delete",[t])},x.mapply=x.post=function(t,e,n){return x(t).dispatch("post",[e,n])},_.prototype.mapply=_.prototype.post=function(t,e){return this.dispatch("post",[t,e])},x.send=x.mcall=x.invoke=function(t,e){return x(t).dispatch("post",[e,s(arguments,2)])},_.prototype.send=_.prototype.mcall=_.prototype.invoke=function(t){return this.dispatch("post",[t,s(arguments,1)])},x.fapply=function(t,e){return x(t).dispatch("apply",[void 0,e])},_.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},x.try=x.fcall=function(t){return x(t).dispatch("apply",[void 0,s(arguments,1)])},_.prototype.fcall=function(){return this.dispatch("apply",[void 0,s(arguments)])},x.fbind=function(t){var e=x(t),n=s(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(s(arguments))])}},_.prototype.fbind=function(){var t=this,e=s(arguments);return function(){return t.dispatch("apply",[this,e.concat(s(arguments))])}},x.keys=function(t){return x(t).dispatch("keys",[])},_.prototype.keys=function(){return this.dispatch("keys",[])},x.all=B,_.prototype.all=function(){return B(this)},x.any=V,_.prototype.any=function(){return V(this)},x.allResolved=function(t,e,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(e+" is deprecated, use "+n+" instead.",new Error("").stack),t.apply(t,arguments)}}(q,"allResolved","allSettled"),_.prototype.allResolved=function(){return q(this)},x.allSettled=function(t){return x(t).allSettled()},_.prototype.allSettled=function(){return this.then(function(t){return B(p(t,function(t){function e(){return t.inspect()}return(t=x(t)).then(e,e)}))})},x.fail=x.catch=function(t,e){return x(t).then(void 0,e)},_.prototype.fail=_.prototype.catch=function(t){return this.then(void 0,t)},x.progress=function(t,e){return x(t).then(void 0,void 0,e)},_.prototype.progress=function(t){return this.then(void 0,void 0,t)},x.fin=x.finally=function(t,e){return x(t).finally(e)},_.prototype.fin=_.prototype.finally=function(t){if(!t||"function"!=typeof t.apply)throw new Error("Q can't apply finally callback");return t=x(t),this.then(function(e){return t.fcall().then(function(){return e})},function(e){return t.fcall().then(function(){throw e})})},x.done=function(t,e,n,r){return x(t).done(e,n,r)},_.prototype.done=function(t,n,r){var o=function(t){x.nextTick(function(){if(k(t,i),!x.onerror)throw t;x.onerror(t)})},i=t||n||r?this.then(t,n,r):this;"object"==typeof e&&e&&e.domain&&(o=e.domain.bind(o)),i.then(void 0,o)},x.timeout=function(t,e,n){return x(t).timeout(e,n)},_.prototype.timeout=function(t,e){var n=S(),r=setTimeout(function(){e&&"string"!=typeof e||((e=new Error(e||"Timed out after "+t+" ms")).code="ETIMEDOUT"),n.reject(e)},t);return this.then(function(t){clearTimeout(r),n.resolve(t)},function(t){clearTimeout(r),n.reject(t)},n.notify),n.promise},x.delay=function(t,e){return void 0===e&&(e=t,t=void 0),x(t).delay(e)},_.prototype.delay=function(t){return this.then(function(e){var n=S();return setTimeout(function(){n.resolve(e)},t),n.promise})},x.nfapply=function(t,e){return x(t).nfapply(e)},_.prototype.nfapply=function(t){var e=S(),n=s(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},x.nfcall=function(t){var e=s(arguments,1);return x(t).nfapply(e)},_.prototype.nfcall=function(){var t=s(arguments),e=S();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},x.nfbind=x.denodeify=function(t){if(void 0===t)throw new Error("Q can't wrap an undefined function");var e=s(arguments,1);return function(){var n=e.concat(s(arguments)),r=S();return n.push(r.makeNodeResolver()),x(t).fapply(n).fail(r.reject),r.promise}},_.prototype.nfbind=_.prototype.denodeify=function(){var t=s(arguments);return t.unshift(this),x.denodeify.apply(void 0,t)},x.nbind=function(t,e){var n=s(arguments,2);return function(){var r=n.concat(s(arguments)),o=S();return r.push(o.makeNodeResolver()),x(function(){return t.apply(e,arguments)}).fapply(r).fail(o.reject),o.promise}},_.prototype.nbind=function(){var t=s(arguments,0);return t.unshift(this),x.nbind.apply(void 0,t)},x.nmapply=x.npost=function(t,e,n){return x(t).npost(e,n)},_.prototype.nmapply=_.prototype.npost=function(t,e){var n=s(e||[]),r=S();return n.push(r.makeNodeResolver()),this.dispatch("post",[t,n]).fail(r.reject),r.promise},x.nsend=x.nmcall=x.ninvoke=function(t,e){var n=s(arguments,2),r=S();return n.push(r.makeNodeResolver()),x(t).dispatch("post",[e,n]).fail(r.reject),r.promise},_.prototype.nsend=_.prototype.nmcall=_.prototype.ninvoke=function(t){var e=s(arguments,1),n=S();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},x.nodeify=function(t,e){return x(t).nodeify(e)},_.prototype.nodeify=function(t){if(!t)return this;this.then(function(e){x.nextTick(function(){t(null,e)})},function(e){x.nextTick(function(){t(e)})})},x.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var G=E();return x})}).call(this,n("8oxB"))},TiCD:function(t,e,n){var r=n("b+/x"),o=n("jFDo");t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},YDNs:function(t,e,n){var r,o,i;o=[t,n("gvr7")],void 0===(i="function"==typeof(r=function(t,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=r+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=i})?r.apply(e,o):r)||(t.exports=i)},"b+/x":function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},gvr7:function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},jFDo:function(t,e,n){var r=n("lNia");function o(t,e,n,o,i){var u=function(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,u,i),{destroy:function(){t.removeEventListener(n,u,i)}}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}},lNia:function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},wOJ8:function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,u=r.length;i<u;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n}}]);