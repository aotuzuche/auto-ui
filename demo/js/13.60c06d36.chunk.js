(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{218:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},219:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function p(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return p})},220:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},221:function(n,a,s){"use strict";var t=s(1);s(222);a.a=function(n){return t.createElement("div",{className:"mobile-preview",key:n.link},t.createElement("header",null,n.link),t.createElement("main",null,t.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},222:function(n,a,s){},224:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function e(n,a){return!a||"object"!==p(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return e})},225:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function p(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return p})},228:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return r});var t=s(218),p=s(219),e=s(224),o=s(220),c=s(225),l=s(1),u=s(71),i=s.n(u),k=s(221),r=function(n){function a(){var n,s;Object(t.a)(this,a);for(var p=arguments.length,c=new Array(p),l=0;l<p;l++)c[l]=arguments[l];return(s=Object(e.a)(this,(n=Object(o.a)(a)).call.apply(n,[this].concat(c)))).state={previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#/message"},s.onCodeClick=function(n){s.setState({previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#"+n})},s}return Object(c.a)(a,n),Object(p.a)(a,[{key:"render",value:function(){return l.createElement("div",null,l.createElement("div",{className:"markdown-content"},l.createElement("h1",null,"Message \u63d0\u793a\u6d88\u606f"),l.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/message")}),onClick:this.onCodeClick.bind(null,"/message")},l.createElement("header",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token string">\'\u6211\u662f\u4e00\u4e2a\u6d88\u606f\u6846\'</span><span class="token punctuation">,</span> <span class="token number">200000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u6253\u5f00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Footer</span> <span class="token attr-name">border</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),l.createElement("h2",null,"\u591a\u4e2a\u53c2\u6570"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/message_params")}),onClick:this.onCodeClick.bind(null,"/message_params")},l.createElement("header",null,"\u591a\u4e2a\u53c2\u6570"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Message<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'\u6536\u85cf\u6210\u529f\'</span><span class="token punctuation">,</span>\n      desc<span class="token punctuation">:</span> <span class="token string">\'\u60a8\u53ef\u4ee5\u5728\u6211\u7684\u6536\u85cf\u4e2d\u67e5\u770b\'</span><span class="token punctuation">,</span>\n      feedback<span class="token punctuation">:</span> <span class="token string">\'\u597d\u7684\u6ca1\u95ee\u9898\'</span><span class="token punctuation">,</span>\n      onFeedbackClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">\'onFeedbackClick\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u6253\u5f00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),l.createElement("h2",null,"\u5b9a\u65f6\u81ea\u52a8\u5173\u95ed"),l.createElement("p",null,"\u4e0d\u8bbe\u7f6e\u7684\u8bdd\u9ed8\u8ba4 2 \u79d2\u5173\u95ed"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/message_timeout")}),onClick:this.onCodeClick.bind(null,"/message_timeout")},l.createElement("header",null,"\u5b9a\u65f6\u81ea\u52a8\u5173\u95ed"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token string">\'\u63d0\u793a\u6d88\u606f\'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u6253\u5f00\u5e76\u57282\u79d2\u540e\u81ea\u52a8\u5173\u95ed</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),l.createElement("h2",null,"\u624b\u52a8\u5173\u95ed"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/message_close")}),onClick:this.onCodeClick.bind(null,"/message_close")},l.createElement("header",null,"\u624b\u52a8\u5173\u95ed"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token string">\'\u63d0\u793a\u6d88\u606f\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Message<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u6253\u5f00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClose<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u5173\u95ed</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}}))))),l.createElement(k.a,{link:this.state.previewUrl}))}}]),a}(l.PureComponent)}}]);
//# sourceMappingURL=13.60c06d36.chunk.js.map