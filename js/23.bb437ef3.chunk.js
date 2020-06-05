(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{218:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},219:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function p(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return p})},220:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},221:function(n,a,s){"use strict";var t=s(0);s(222);a.a=function(n){return t.createElement("div",{className:"mobile-preview",key:n.link},t.createElement("header",null,n.link),t.createElement("main",null,t.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},222:function(n,a,s){},224:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function e(n,a){return!a||"object"!==p(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return e})},225:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function p(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return p})},237:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return r});var t=s(218),p=s(219),e=s(224),o=s(220),c=s(225),l=s(0),u=s(48),i=s.n(u),k=s(221),r=function(n){function a(){var n,s;Object(t.a)(this,a);for(var p=arguments.length,c=new Array(p),l=0;l<p;l++)c[l]=arguments[l];return(s=Object(e.a)(this,(n=Object(o.a)(a)).call.apply(n,[this].concat(c)))).state={previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#/switch"},s.onCodeClick=function(n){s.setState({previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#"+n})},s}return Object(c.a)(a,n),Object(p.a)(a,[{key:"render",value:function(){return l.createElement("div",null,l.createElement("div",{className:"markdown-content"},l.createElement("h1",null,"Switch \u5f00\u5173"),l.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/switch")}),onClick:this.onCodeClick.bind(null,"/switch")},l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">private</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Demo\n'}})))),l.createElement("h2",null,"\u5e26\u6587\u5b57"),l.createElement("p",null,"\u6ce8\u610f\uff1a\u53ea\u6709",l.createElement("code",null,"i"),"\u548c",l.createElement("code",null,"o"),"\u540c\u65f6\u6709\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u663e\u793a\u5e26\u6587\u5b57"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/switch_io")}),onClick:this.onCodeClick.bind(null,"/switch_io")},l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">o</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5f00<span class="token punctuation">"</span></span> <span class="token attr-name">i</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5173<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">o</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>O<span class="token punctuation">"</span></span> <span class="token attr-name">i</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>I<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">private</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Demo\n'}})))),l.createElement("h2",null,"\u5e26\u56fe\u6807"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/switch_icon")}),onClick:this.onCodeClick.bind(null,"/switch_icon")},l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">o</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5f00<span class="token punctuation">"</span></span> <span class="token attr-name">i</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5173<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">private</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>active<span class="token punctuation">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> active <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Demo\n'}})))),l.createElement("h2",null,"\u7981\u7528"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/switch_disabled")}),onClick:this.onCodeClick.bind(null,"/switch_disabled")},l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> disabled<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u901a\u8fc7\u6211\u8bbe\u7f6edisabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n                <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">}</span></span>\n                <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDisabledChange<span class="token punctuation">}</span></span>\n                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token string">\'auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">disabled = </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled <span class="token operator">?</span> <span class="token string">\'true\'</span> <span class="token punctuation">:</span> <span class="token string">\'false\'</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n            <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">}</span></span>\n            <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">private</span> <span class="token function-variable function">onDisabledChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      disabled<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">private</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> active<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Demo\n'}})))),l.createElement("h2",null,"\u652f\u6301\u5c5e\u6027"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u5c5e\u6027"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"active"),l.createElement("td",null,"\u662f\u5426\u6fc0\u6d3b\u72b6\u6001"),l.createElement("td",null,"Boolean"),l.createElement("td",null,"false")),l.createElement("tr",null,l.createElement("td",null,"onChange"),l.createElement("td",null,"\u70b9\u51fb\u4e8b\u4ef6"),l.createElement("td",null,"Function"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"i"),l.createElement("td",null,"\u975e\u6fc0\u6d3b\u65f6\u7684\u6587\u5b57\uff08\u5efa\u8bae\u4e0d\u8d85\u8fc7 4 \u5b57\u8282\uff09\uff0ci \u4e0e o \u540c\u65f6\u4f7f\u7528\u624d\u6709\u6548"),l.createElement("td",null,"String -"),l.createElement("td",null)),l.createElement("tr",null,l.createElement("td",null,"o"),l.createElement("td",null,"\u6fc0\u6d3b\u65f6\u7684\u6587\u5b57\uff08\u5efa\u8bae\u4e0d\u8d85\u8fc7 4 \u5b57\u8282\uff09\uff0ci \u4e0e o \u540c\u65f6\u4f7f\u7528\u624d\u6709\u6548"),l.createElement("td",null,"String -"),l.createElement("td",null)),l.createElement("tr",null,l.createElement("td",null,"icon"),l.createElement("td",null,"\u5e26 icon\uff0c\u4f1a\u5728\u5706\u7684\u6ed1\u5757\u4e0a\u663e\u793a\u52fe/\u53c9\u56fe\u6807"),l.createElement("td",null,"Boolean"),l.createElement("td",null,"false")),l.createElement("tr",null,l.createElement("td",null,"disabled"),l.createElement("td",null,"\u662f\u5426\u4e3a\u4e0d\u53ef\u7528"),l.createElement("td",null,"Boolean"),l.createElement("td",null,"false"))))),l.createElement(k.a,{link:this.state.previewUrl}))}}]),a}(l.PureComponent)}}]);
//# sourceMappingURL=23.bb437ef3.chunk.js.map