(()=>{var e={682:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,".title {\n  background-color: yellowgreen;\n  text-decoration: underline;\n}\n",""]);const c=i},984:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),s=n(645),i=n.n(s),c=n(667),a=n.n(c),l=new URL(n(458),n.b),u=i()(o()),d=a()(l);u.push([e.id,".image-bg {\n  background-image: url("+d+");\n  background-size: cover;\n  width: 80px;\n  height: 65px;\n}\n",""]);const p=u},390:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,".title {\n  color: red;\n  font-size: 30px;\n  font-weight: 600;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n",""]);const c=i},117:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(81),o=n.n(r),s=n(645),i=n.n(s),c=n(667),a=n.n(c),l=new URL(n(277),n.b),u=new URL(n(905),n.b),d=new URL(n(332),n.b),p=i()(o()),f=a()(l),m=a()(u),h=a()(d);p.push([e.id,'@font-face {\n  font-family: "iconfont"; /* Project id 3582354 */\n  src: url('+f+") format('woff2'),\n       url("+m+") format('woff'),\n       url("+h+') format(\'truetype\');\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n}\n\n.iconfont {\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-ambitus02:before {\n  content: "\\e600";\n}\n\n',""]);const v=p},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],c=0;c<e.length;c++){var a=e[c],l=r.base?a[0]+r.base:a[0],u=s[l]||0,d="".concat(l," ").concat(u);s[l]=u+1;var p=n(d),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var c=n(s[i]);t[c].references--}for(var a=r(e,o),l=0;l<s.length;l++){var u=n(s[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=a}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},466:e=>{e.exports={priceFormat:function(e){return"¥"+e}}},332:(e,t,n)=>{"use strict";e.exports=n.p+"font/iconfont_7d8b8d.ttf"},277:(e,t,n)=>{"use strict";e.exports=n.p+"font/iconfont_4660f9.woff2"},905:(e,t,n)=>{"use strict";e.exports=n.p+"font/iconfont_7523bb.woff"},458:(e,t,n)=>{"use strict";e.exports=n.p+"img/err_ceb4ac.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),i=n.n(s),c=n(565),a=n.n(c),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(390),m={};m.styleTagTransform=p(),m.setAttributes=a(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=n(682),v={};v.styleTagTransform=p(),v.setAttributes=a(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),t()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var g=n(984),b={};b.styleTagTransform=p(),b.setAttributes=a(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),t()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;var y=n(117),w={};w.styleTagTransform=p(),w.setAttributes=a(),w.insert=i().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=u(),t()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;const x=n.p+"img/people_5cf45c.png",Z=document.createElement("div");Z.className="title",Z.innerHTML="hello world";const T=document.createElement("div");T.className="image-bg";const E=document.createElement("img");E.src=x;const S=document.createElement("i");S.className="iconfont icon-ambitus02",document.body.appendChild(Z),document.body.appendChild(T),document.body.appendChild(E),document.body.appendChild(S);const{priceFormat:A}=n(466);console.log(50),console.log(A(59))})()})();