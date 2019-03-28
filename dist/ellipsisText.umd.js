!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ellipsisText",[],t):"object"==typeof exports?exports.ellipsisText=t():e.ellipsisText=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,i){"use strict";t.a={filters:{trimEnter:function(e){return e?e.replace(/[\r\n]/g,""):""}},props:{content:{type:String},line:{type:Number,default:1},triggerMore:{type:Boolean,default:!0},hasMore:{type:Boolean,default:!1},isHtml:{type:Boolean,default:!1},revealWidth:{type:Number,default:70},revealText:{type:String,default:"【全部】"},foldText:{type:String,default:"收起"}},data:function(){return{showAll:!1,fontSize:14,lineHeight:22}},computed:{maxHeight:function(){return this.lineHeight*this.line+"px"}},watch:{content:function(){this.showAll=!1}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.$refs.txtContent;t.currentStyle?(e.fontSize=Number(t.currentStyle.fontSize.replace("px","")),e.lineHeight=Number(t.currentStyle.lineHeight.replace("px",""))):(e.fontSize=Number(getComputedStyle(t).fontSize.replace("px","")),e.lineHeight=Number(getComputedStyle(t).lineHeight.replace("px","")))})},methods:{more:function(){this.$emit("reveal"),this.triggerMore&&(this.showAll=!0,this.lineHeight=9999)},fold:function(){this.$emit("fold"),this.showAll=!1,this.lineHeight=22}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function n(e){n.installed||(n.installed=!0,e.component("EllipsisText",r.a))}t.install=n,i.d(t,"plugin",function(){return o});var r=i(3),o={install:n},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==e&&(s=e.Vue),s&&s.use(o),t.default=r.a}.call(t,i(2))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";function n(e){i(4)}var r=i(0),o=i(10),s=i(9),l=n,a=s(r.a,o.a,!1,l,"data-v-30acd25f",null);t.a=a.exports},function(e,t,i){var n=i(5);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(7)("2299c2dd",n,!0,{})},function(e,t,i){t=e.exports=i(6)(!1),t.push([e.i,'.vx-ellipsis-text[data-v-30acd25f]{position:relative;width:100%;max-height:66px;line-height:22px;overflow:hidden;color:#333}@-webkit-keyframes width-change-data-v-30acd25f{0%,to{width:100%}50%{width:30%}}@keyframes width-change-data-v-30acd25f{0%,to{width:100%}50%{width:30%}}.vx-ellipsis-text .ellipsis-container[data-v-30acd25f]{position:relative;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;font-size:70px;color:transparent}.vx-ellipsis-text .ellipsis-container span[data-v-30acd25f]{display:-webkit-box}.vx-ellipsis-text .ellipsis-content[data-v-30acd25f]{vertical-align:top;color:#333;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;font-size:14px;white-space:pre-wrap}.vx-ellipsis-text .ellipsis-content.more[data-v-30acd25f]{display:inline}.vx-ellipsis-text .ellipsis-ghost[data-v-30acd25f]{position:absolute;z-index:1;top:0;left:50%;width:100%;height:100%;color:#000}.vx-ellipsis-text .ellipsis-ghost[data-v-30acd25f]:before{content:"";display:block;float:right;width:50%;height:100%}.vx-ellipsis-text .ellipsis-placeholder[data-v-30acd25f]{content:"";display:block;float:right;width:50%;height:66px}.vx-ellipsis-text .ellipsis-more[data-v-30acd25f]{float:right;text-align:right;font-size:14px;width:70px;height:22px;margin-top:-22px;cursor:pointer;color:#3a62f4}.vx-ellipsis-text .ellipsis-more.html[data-v-30acd25f]{padding-left:20px;background:-webkit-gradient(linear,left top,right top,color-stop(15%,#fff0),color-stop(46%,#fff));background:linear-gradient(left,#fff0 15%,#fff 46%)}.vx-ellipsis-text .ellipsis-fold-text[data-v-30acd25f]{position:relative;z-index:5;cursor:pointer;font-size:14px;color:#3a62f4}.vx-ellipsis-text.reveal[data-v-30acd25f]{max-height:auto!important}.vx-ellipsis-text.reveal .ellipsis-container[data-v-30acd25f]{display:block!important}',""])},function(e,t){function i(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var o=n(r);return[i].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=d[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(o(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(o(i.parts[r]));d[i.id]={id:i.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function o(e){var t,i,n=document.querySelector("style["+m+'~="'+e.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(g){var o=u++;n=f||(f=r()),t=s.bind(null,n,o,!1),i=s.bind(null,n,o,!0)}else n=r(),t=l.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function s(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function l(e,t){var i=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),x.ssrId&&e.setAttribute(m,t.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(8),d={},p=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,u=0,h=!1,v=function(){},x=null,m="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,r){h=i,x=r||{};var o=c(e,t);return n(o),function(t){for(var i=[],r=0;r<o.length;r++){var s=o[r],l=d[s.id];l.refs--,i.push(l)}t?(o=c(e,t),n(o)):o=[];for(var r=0;r<i.length;r++){var l=i[r];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete d[l.id]}}}};var y=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],s=o[0],l=o[1],a=o[2],c=o[3],d={id:e+":"+r,css:l,media:a,sourceMap:c};n[s]?n[s].parts.push(d):i.push(n[s]={id:s,parts:[d]})}return i}},function(e,t){e.exports=function(e,t,i,n,r,o){var s,l=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,l=e.default);var c="function"==typeof l?l.options:l;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId=r);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=d):n&&(d=n),d){var p=c.functional,f=p?c.render:c.beforeCreate;p?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:l,options:c}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["vx-ellipsis-text",e.showAll?"reveal":""],style:{"max-height":e.maxHeight}},[e.hasMore?i("div",{staticClass:"ellipsis-container",style:{"-webkit-line-clamp":e.line,fontSize:e.revealWidth+"px"}},[e.isHtml?i("div",{ref:"txtContent",staticClass:"ellipsis-content html",domProps:{innerHTML:e._s(e.content)}}):i("div",{ref:"txtContent",staticClass:"ellipsis-content more"},[e._v(e._s(e._f("trimEnter")(e.content)))]),e._v(" "),e.hasMore?i("div",{staticClass:"ellipsis-ghost"},[i("div",{staticClass:"ellipsis-placeholder",style:{height:e.maxHeight}}),e._v(" "),i("div",{class:["ellipsis-more",e.isHtml?"html":""],style:{width:e.revealWidth+"px"},on:{click:e.more}},[e._v(e._s(e.revealText))])]):e._e()]):i("div",[e.isHtml?i("div",{ref:"txtContent",staticClass:"ellipsis-content",style:{"-webkit-line-clamp":e.line},domProps:{innerHTML:e._s(e.content)}}):i("div",{ref:"txtContent",staticClass:"ellipsis-content",style:{"-webkit-line-clamp":e.line}},[e._v(e._s(e._f("trimEnter")(e.content)))])]),e._v(" "),e.showAll?i("div",{staticClass:"ellipsis-fold-text",on:{click:e.fold}},[e._v(e._s(e.foldText))]):e._e()])},r=[],o={render:n,staticRenderFns:r};t.a=o}])});