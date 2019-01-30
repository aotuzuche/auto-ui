(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{219:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},220:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return e})},221:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},222:function(n,a,s){"use strict";var t=s(1);s(223);a.a=function(n){return t.createElement("div",{className:"mobile-preview",key:n.link},t.createElement("header",null,n.link),t.createElement("main",null,t.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},223:function(n,a,s){},225:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n){return(e="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function p(n,a){return!a||"object"!==e(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return p})},226:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function e(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return e})},240:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return k});var t=s(219),e=s(220),p=s(225),o=s(221),c=s(226),l=s(1),u=s(71),r=s.n(u),i=s(222),k=function(n){function a(){var n,s;Object(t.a)(this,a);for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];return(s=Object(p.a)(this,(n=Object(o.a)(a)).call.apply(n,[this].concat(c)))).state={previewUrl:"http://localhost:3333/#/tabs"},s.onCodeClick=function(n){s.setState({previewUrl:"http://localhost:3333/#"+n})},s}return Object(c.a)(a,n),Object(e.a)(a,[{key:"render",value:function(){return l.createElement("div",null,l.createElement("div",{className:"markdown-content"},l.createElement("h1",null,"Tabs \u6807\u7b7e\u9875"),l.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("p",null,"\u672c\u7ec4\u4ef6\u4ec5\u63d0\u7a7a",l.createElement("code",null,"Tabs"),"\u672c\u8eab\uff0c\u5373\u6ca1\u6709\u6807\u7b7e\u5185\u5bb9\u90e8\u5206\uff0c\u8fd9\u90e8\u5206\u8bf7\u81ea\u884c\u6839\u636e",l.createElement("code",null,"Tabs"),"\u7684",l.createElement("code",null,"active"),"\u5c5e\u6027\u5224\u65ad\u663e\u793a\uff0c",l.createElement("code",null,"Tabs"),"\u7684",l.createElement("code",null,"active"),"\u503c\u4e0e",l.createElement("code",null,"Tabs.Item"),"\u7684",l.createElement("code",null,"value"),"\u503c\u76f8\u7b49\u65f6\uff0c\u8be5",l.createElement("code",null,"tab"),"\u5373\u4e3a\u5f53\u524d"),l.createElement("div",{className:r()("code-box",{active:this.state.previewUrl.endsWith("/tabs")}),onClick:this.onCodeClick.bind(null,"/tabs")},l.createElement("header",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Tabs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">public</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs.Item</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u6807\u7b7e\u4e00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs.Item</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs.Item</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u6807\u7b7e\u4e8c</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs.Item</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs.Item</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u6807\u7b7e\u4e09</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs.Item</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">content of Tab 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">content of Tab 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">content of Tab 3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">private</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      active<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Demo<span class="token punctuation">;</span>\n'}})))),l.createElement("h2",null,"\u652f\u6301\u5c5e\u6027"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u5c5e\u6027"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"active"),l.createElement("td",null,"\u5f53\u524d\u7684\u6d3b\u52a8 tab \u7f16\u53f7"),l.createElement("td",null,"String/Int"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"onClick"),l.createElement("td",null,"\u4ee3\u7406 Tabs.Item \u7684\u70b9\u51fb\u4e8b\u4ef6\uff0c\u5e76\u5c06 Tabs.Item \u7684 value \u5c5e\u6027\u4f5c\u4e3a\u53c2\u6570\u8fd4\u56de"),l.createElement("td",null,"Function"),l.createElement("td",null,"-")))),l.createElement("h2",null,"Tabs.Item \u652f\u6301\u5c5e\u6027"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u5c5e\u6027"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"value"),l.createElement("td",null,"\u8be5 Item \u5bf9\u5e94\u7684\u503c"),l.createElement("td",null,"String/Int"),l.createElement("td",null,"-"))))),l.createElement(i.a,{link:this.state.previewUrl}))}}]),a}(l.PureComponent)}}]);
//# sourceMappingURL=17.87c5e6f2.chunk.js.map