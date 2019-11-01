(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{218:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},219:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function p(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return p})},220:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},221:function(n,a,s){"use strict";var t=s(1);s(222);a.a=function(n){return t.createElement("div",{className:"mobile-preview",key:n.link},t.createElement("header",null,n.link),t.createElement("main",null,t.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},222:function(n,a,s){},224:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function e(n,a){return!a||"object"!==p(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return e})},225:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function p(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return p})},229:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return r});var t=s(218),p=s(219),e=s(224),c=s(220),o=s(225),l=s(1),u=s(71),i=s.n(u),k=s(221),r=function(n){function a(){var n,s;Object(t.a)(this,a);for(var p=arguments.length,o=new Array(p),l=0;l<p;l++)o[l]=arguments[l];return(s=Object(e.a)(this,(n=Object(c.a)(a)).call.apply(n,[this].concat(o)))).state={previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#/card"},s.onCodeClick=function(n){s.setState({previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#"+n})},s}return Object(o.a)(a,n),Object(p.a)(a,[{key:"render",value:function(){return l.createElement("div",null,l.createElement("div",{className:"markdown-content"},l.createElement("h1",null,"Card \u5361\u7247"),l.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/card")}),onClick:this.onCodeClick.bind(null,"/card")},l.createElement("header",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Card<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> disabled<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">\'on click\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u4e0d\u56fa\u5b9a\u5bbd\u9ad8\u6bd4\u7684card\uff0c\u9ad8\u5ea6\u968f\u7740\u5185\u5bb9\u7684\u591a\u5c11\u800c\u53d8\u5316<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">shadow</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'50%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card.Figure</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'50%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span>\n              <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://carphoto.aotuzuche.com/car/19/07/687221426/1562663319417_1.jpg<span class="token punctuation">"</span></span>\n            <span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u8f66\u8f86\u540d\u79f0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card.Figure</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              \u8f66\u8f86\u540d\u79f0\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u54c1\u724c\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u8f66\u724c\u53f7\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u54c1\u724c\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u8f66\u724c\u53f7\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">\n\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u56fa\u5b9a\u5bbd\u9ad8\u6bd4\u7684card\uff0c\u6b64\u5904\u5bbd\u9ad8\u6bd4\u4e3a1:1\uff0c\u56fe\u7247\u5360\u752850%\u9ad8\u5ea6\uff0c\u8d85\u51fa\u6587\u5b57\u90e8\u5206\u5c06\u9690\u85cf<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">shadow</span> <span class="token attr-name">aspectRatio</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'50%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card.Figure</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'50%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span>\n              <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://carphoto.aotuzuche.com/car/19/07/687221426/1562663319417_1.jpg<span class="token punctuation">"</span></span>\n            <span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u8f66\u8f86\u540d\u79f0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card.Figure</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              \u8f66\u8f86\u540d\u79f0\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u54c1\u724c\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u8f66\u724c\u53f7\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u54c1\u724c\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u8f66\u724c\u53f7\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">\n\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5de6\u53f3\u6392\u5217\uff0c3:8\u6bd4\u4f8b\uff0c\u56fe\u7247\u536050%\u5bbd\u5ea6<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">shadow</span> <span class="token attr-name">aspectRatio</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span> <span class="token operator">/</span> <span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card.Figure</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'50%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span>\n              <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://carphoto.aotuzuche.com/car/19/07/687221426/1562663319417_1.jpg<span class="token punctuation">"</span></span>\n            <span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u8f66\u8f86\u540d\u79f0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card.Figure</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              \u8f66\u8f86\u540d\u79f0\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n              \u54c1\u724c\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Demo\n'}})))),l.createElement("h2",null,"\u652f\u6301\u5c5e\u6027"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u5c5e\u6027"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"direction"),l.createElement("td",null,"\u5185\u5bb9\u6392\u5217\u987a\u5e8f"),l.createElement("td",null,"row/column/row-reverse/column-reverse"),l.createElement("td",null,"row")),l.createElement("tr",null,l.createElement("td",null,"onClick"),l.createElement("td",null,"\u70b9\u51fb\u4e8b\u4ef6"),l.createElement("td",null,"Function"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"aspectRatio"),l.createElement("td",null,"\u5bbd\u9ad8\u6bd4"),l.createElement("td",null,"number"),l.createElement("td",null,"1")),l.createElement("tr",null,l.createElement("td",null,"shadow"),l.createElement("td",null,"\u662f\u5426\u6709\u5916\u9634\u5f71"),l.createElement("td",null,"Boolean"),l.createElement("td",null,"false")))),l.createElement("h2",null,"Card.Figure \u652f\u6301\u5c5e\u6027"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u5c5e\u6027"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"image"),l.createElement("td",null,"\u56fe\u7247\u8bbf\u95ee\u5730\u5740"),l.createElement("td",null,"String"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"title"),l.createElement("td",null,"\u56fe\u7247\u6807\u9898\uff0c\u5373 alt \u5c5e\u6027"),l.createElement("td",null,"String"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"onClick"),l.createElement("td",null,"\u70b9\u51fb\u4e8b\u4ef6"),l.createElement("td",null,"Function"),l.createElement("td",null,"-"))))),l.createElement(k.a,{link:this.state.previewUrl}))}}]),a}(l.PureComponent)}}]);
//# sourceMappingURL=6.026a443f.chunk.js.map