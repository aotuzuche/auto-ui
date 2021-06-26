(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{318:function(n,a,s){"use strict";var t=s(0);s(319);a.a=function(n){return t.createElement("div",{className:"mobile-preview",key:n.link},t.createElement("header",null,n.link),t.createElement("main",null,t.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},319:function(n,a,s){},326:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return r});var t=s(313),p=s(314),e=s(316),l=s(315),o=s(317),c=s(0),u=s(64),k=s.n(u),i=s(318),r=function(n){function a(){var n,s;Object(t.a)(this,a);for(var p=arguments.length,o=new Array(p),c=0;c<p;c++)o[c]=arguments[c];return(s=Object(e.a)(this,(n=Object(l.a)(a)).call.apply(n,[this].concat(o)))).state={previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#/cell"},s.onCodeClick=function(n){s.setState({previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#"+n})},s}return Object(o.a)(a,n),Object(p.a)(a,[{key:"render",value:function(){return c.createElement("div",null,c.createElement("div",{className:"markdown-content"},c.createElement("h1",null,"Cell \u5355\u5143\u683c"),c.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),c.createElement("p",null,"\u5355\u5143\u683c\u5305\u542b 2 \u4e2a\u90e8\u5206\uff0c",c.createElement("code",null,"Cell"),"\u548c",c.createElement("code",null,"Cell.Row"),"\uff0c",c.createElement("code",null,"Cell"),"\u4e3a\u5bb9\u5668\uff0c\u5185\u90e8\u5305\u542b",c.createElement("code",null,"Cell.Row"),"\uff0c",c.createElement("code",null,"Cell.Row"),"\u4e3a\u6bcf\u9879\u7684\u5185\u5bb9"),c.createElement("div",{className:k()("code-box",{active:this.state.previewUrl.endsWith("/cell")}),onClick:this.onCodeClick.bind(null,"/cell")},c.createElement("div",{className:"bd"},c.createElement("pre",{className:"language-tsx"},c.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'darkMode\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5355\u5143\u683c<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">cell 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">cell 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">cell 3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">cell 4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">cell 5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),c.createElement("h2",null,"\u7edf\u4e00\u70b9\u51fb\u4e8b\u4ef6"),c.createElement("p",null,"\u5c06\u4e8b\u4ef6\u5199\u5728",c.createElement("code",null,"Cell"),"\u4e0a\uff0c\u5e76\u4e14",c.createElement("code",null,"Cell.Row"),"\u90fd\u5e26\u6709",c.createElement("code",null,"value"),"\u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u5728\u6bcf\u884c\u7684\u70b9\u51fb\u65f6\u6355\u83b7\u4ed6\u4eec\uff0c\u4e8b\u4ef6\u4e2d\u5c06\u4f1a\u628a",c.createElement("code",null,"value"),"\u4f5c\u4e3a\u53c2\u6570\u5e26\u56de\u3002"),c.createElement("div",{className:k()("code-box",{active:this.state.previewUrl.endsWith("/cell_click")}),onClick:this.onCodeClick.bind(null,"/cell_click")},c.createElement("div",{className:"bd"},c.createElement("pre",{className:"language-tsx"},c.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">\'\u70b9\u51fb\u4e86\uff1a\'</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">grayBackground</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'darkMode\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7edf\u4e00\u70b9\u51fb\u4e8b\u4ef6<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">wrapperBorder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">cell 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">cell 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">cell 3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">cell 4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),c.createElement("h2",null,"\u5206\u9694\u7ebf\u7f29\u8fdb"),c.createElement("p",null,"\u5206\u9694\u7ebf\u8fdb\u884c\u7f29\u8fdb\uff0c\u5f88\u591a\u5217\u8868\u83dc\u5355\u4f7f\u7528\u8fd9\u79cd\u6837\u5f0f"),c.createElement("div",{className:k()("code-box",{active:this.state.previewUrl.endsWith("/cell_divider_indent")}),onClick:this.onCodeClick.bind(null,"/cell_divider_indent")},c.createElement("div",{className:"bd"},c.createElement("pre",{className:"language-tsx"},c.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">\'\u70b9\u51fb\u4e86\uff1a\'</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'darkMode\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5206\u9694\u7ebf\u7f29\u8fdb: \u5de6\u4fa7\u7f29\u8fdb<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">dividerIndent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">cell 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">addonAfter</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>123<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            cell 2\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5206\u9694\u7ebf\u7f29\u8fdb: \u4e24\u5934\u7f29\u8fdb<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">dividerIndent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>both<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">cell 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">cell 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),c.createElement("h2",null,"\u5e26\u7bad\u5934"),c.createElement("p",null,"\u4f7f\u53f3\u4fa7\u5e26\u7bad\u5934\u7b26\u53f7\uff0c\u53ef\u4ee5\u5728",c.createElement("code",null,"Cell"),"\u4e0a\u7edf\u4e00\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5728",c.createElement("code",null,"Cell.Row"),"\u4e2d\u5355\u72ec\u8bbe\u7f6e"),c.createElement("div",{className:k()("code-box",{active:this.state.previewUrl.endsWith("/cell_arrow")}),onClick:this.onCodeClick.bind(null,"/cell_arrow")},c.createElement("div",{className:"bd"},c.createElement("pre",{className:"language-tsx"},c.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'darkMode\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u6709\u7bad\u5934</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\u6ca1\u6709\u7bad\u5934</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u6709\u7bad\u5934</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\u6ca1\u6709\u7bad\u5934</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),c.createElement("h2",null,"\u652f\u6301\u5c5e\u6027"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"\u5c5e\u6027"),c.createElement("th",null,"\u8bf4\u660e"),c.createElement("th",null,"\u7c7b\u578b"),c.createElement("th",null,"\u9ed8\u8ba4\u503c"))),c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",null,"onClick"),c.createElement("td",null,"\u4f1a\u8986\u76d6\u6389 Cell.Row \u7684 onClick"),c.createElement("td",null,"Function"),c.createElement("td",null,"-")),c.createElement("tr",null,c.createElement("td",null,"dividerIndent"),c.createElement("td",null,"\u5185\u90e8\u6240\u6709 Cell.Row \u7684\u5206\u9694\u7ebf\u7f29\u8fdb\u6837\u5f0f\uff0c\u53ef\u9009\u6837\u5f0f\u6709\u5de6\u4fa7\u7f29\u8fdb\u6216\u4e24\u5934\u7f29\u8fdb"),c.createElement("td",null,"left/both"),c.createElement("td",null,"false")),c.createElement("tr",null,c.createElement("td",null,"arrow"),c.createElement("td",null,"\u4f7f\u6bcf\u884c\u7684\u53f3\u4fa7\u5e26\u7bad\u5934\u7b26\u53f7"),c.createElement("td",null,"Boolean"),c.createElement("td",null,"false")),c.createElement("tr",null,c.createElement("td",null,"wrapperBorder"),c.createElement("td",null,"\u662f\u5426\u8981\u5916\u90e8\u7684\u63cf\u8fb9"),c.createElement("td",null,"Boolean"),c.createElement("td",null,"true")))),c.createElement("h2",null,"Cell.Row \u652f\u6301\u5c5e\u6027"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"\u5c5e\u6027"),c.createElement("th",null,"\u8bf4\u660e"),c.createElement("th",null,"\u7c7b\u578b"),c.createElement("th",null,"\u9ed8\u8ba4\u503c"))),c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",null,"onClick"),c.createElement("td",null,"\u70b9\u51fb\u4e8b\u4ef6(\u7c7b\u578b\u4e3a button)"),c.createElement("td",null,"Function"),c.createElement("td",null,"-")),c.createElement("tr",null,c.createElement("td",null,"to"),c.createElement("td",null,"\u8df3\u8f6c\u8def\u7531(\u7c7b\u578b\u4e3a Link)"),c.createElement("td",null,"String"),c.createElement("td",null,"-")),c.createElement("tr",null,c.createElement("td",null,"href"),c.createElement("td",null,"\u8df3\u8f6c url(\u7c7b\u578b\u4e3a a \u6807\u7b7e)"),c.createElement("td",null,"String"),c.createElement("td",null,"-")),c.createElement("tr",null,c.createElement("td",null,"arrow"),c.createElement("td",null,"\u4f7f\u53f3\u4fa7\u5e26\u7bad\u5934\u7b26\u53f7"),c.createElement("td",null,"Boolean"),c.createElement("td",null,"-")),c.createElement("tr",null,c.createElement("td",null,"value"),c.createElement("td",null,"Row \u60f3\u8981\u4f20\u9012\u7ed9 onClick \u7684\u503c"),c.createElement("td",null,"Boolean"),c.createElement("td",null,"false")),c.createElement("tr",null,c.createElement("td",null,"addonAfter"),c.createElement("td",null,"\u53f3\u4fa7\u7684\u6302\u8f7d\u5185\u5bb9"),c.createElement("td",null,"Component"),c.createElement("td",null,"-"))))),c.createElement(i.a,{link:this.state.previewUrl}))}}]),a}(c.PureComponent)}}]);
//# sourceMappingURL=11.8d6e2c50.chunk.js.map