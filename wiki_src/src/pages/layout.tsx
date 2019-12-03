import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/layout',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>Layout 布局</h1><p>包括 3 个部分，<code>Header</code>、<code>Body</code>和<code>Footer</code>，用于页面结构最外层</p>
<h2>基本使用</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout') })} onClick={this.onCodeClick.bind(null, '/layout')}><header>基本使用</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">header</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Header</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">body</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Footer</span><span class="token punctuation">></span></span><span class="token plain-text">footer</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Footer</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>回首页按钮</h2><p>homepage 有几种类型的值可选</p>
<ul>
<li>true: 显示该按钮且点击到达/m/index 页面</li>
<li>string 类型: 将值当作 url 进行跳转</li>
<li>function 类型: 调用该方法</li>
</ul>
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_header_homepage') })} onClick={this.onCodeClick.bind(null, '/layout_header_homepage')}><header>homepage</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onHomepageButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">'回首页'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span> <span class="token attr-name">homepage</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onHomepageButtonClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">请点击右上角的图标</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>高级导航</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_header') })} onClick={this.onCodeClick.bind(null, '/layout_header')}><header>header</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span>
        <span class="token attr-name">addonBefore</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">左侧挂载</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">onBackClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onCloseClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span>
        <span class="token attr-name">addonAfter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">shrink</span> <span class="token attr-name">mini</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            右侧挂载
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">homepageButton</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">addonBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">下方挂载</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">body</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>透明头</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_ghost') })} onClick={this.onCodeClick.bind(null, '/layout_ghost')}><header>ghost header</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">ghost</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">onBackClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">addonAfter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">链接</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token string">'-1rem'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            backgroundColor<span class="token punctuation">:</span> <span class="token string">'#222'</span><span class="token punctuation">,</span>
            height<span class="token punctuation">:</span> <span class="token string">'300px'</span><span class="token punctuation">,</span>
            margin<span class="token punctuation">:</span> <span class="token string">'-0.4rem -0.4rem 0.4rem -0.4rem'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">C</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">D</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>headline 模式</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_headline') })} onClick={this.onCodeClick.bind(null, '/layout_headline')}><header>headline header</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>标题与标题<span class="token punctuation">"</span></span> <span class="token attr-name">headline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">addonAfter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">更多</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">body</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>tabs</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_tabs') })} onClick={this.onCodeClick.bind(null, '/layout_tabs')}><header>header tabs</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Tabs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>
<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>val<span class="token punctuation">,</span> setVal<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
        <span class="token attr-name">tabs</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>val<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setVal</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">active</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>val<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs.Item</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">全部订单</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs.Item</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs.Item</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">进行中的</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs.Item</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs.Item</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">已完成的</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs.Item</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">body</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>Loading</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_loading') })} onClick={this.onCodeClick.bind(null, '/layout_loading')}><header>loading</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中...<span class="token punctuation">"</span></span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">body</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>Header 的 border 类型</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_border_type') })} onClick={this.onCodeClick.bind(null, '/layout_border_type')}><header>header border</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">interface</span> <span class="token class-name">IState</span> <span class="token punctuation">{</span>
  borderType<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token string">'none'</span> <span class="token operator">|</span> <span class="token string">'shadow'</span> <span class="token operator">|</span> <span class="token string">'border'</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span><span class="token operator">&lt;</span>any<span class="token punctuation">,</span> IState<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> borderType<span class="token punctuation">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Border<span class="token punctuation">"</span></span> <span class="token attr-name">borderType</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>borderType<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">'none'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">none</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">'border'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">border</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">'shadow'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">shadow</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      borderType<span class="token punctuation">:</span> type<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
`}} /></pre></div></div><h2>错误信息展示</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_error_info') })} onClick={this.onCodeClick.bind(null, '/layout_error_info')}><header>errorInfo</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>错误页面<span class="token punctuation">"</span></span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span> <span class="token attr-name">errorInfo</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>系统错误<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">body</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>到达底部</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_reach_bottom') })} onClick={this.onCodeClick.bind(null, '/layout_reach_bottom')}><header>onReachBottom</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> disabled<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> reachObj <span class="token operator">=</span> <span class="token punctuation">{</span>
      disabled<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'点击加载更多'</span><span class="token punctuation">,</span>
      handler<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onLoadMore<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>很长的列表<span class="token punctuation">"</span></span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span> <span class="token attr-name">onReachBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reachObj<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Row</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell.Row</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cell</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function-variable function">onLoadMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newList<span class="token punctuation">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          newList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newList<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> newList <span class="token punctuation">}</span><span class="token punctuation">,</span> resolve<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
`}} /></pre></div></div><h2>骨架屏</h2><p>骨架屏：<a href="https://github.com/danilowoz/react-content-loader">https://github.com/danilowoz/react-content-loader</a></p>
<p>编辑地址：<a href="http://danilowoz.com/create-content-loader/">http://danilowoz.com/create-content-loader/</a></p>
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_skeleton') })} onClick={this.onCodeClick.bind(null, '/layout_skeleton')}><header>skeleton</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>
<span class="token keyword">import</span> ContentLoader <span class="token keyword">from</span> <span class="token string">'react-content-loader'</span>

<span class="token keyword">const</span> <span class="token function-variable function">SkeletonOrderItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentLoader</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">90</span><span class="token punctuation">}</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">375</span><span class="token punctuation">}</span></span> <span class="token attr-name">speed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">primaryColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#f3f3f3<span class="token punctuation">"</span></span> <span class="token attr-name">secondaryColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#ecebeb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>280<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>95<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>70<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentLoader</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>skeleton<span class="token punctuation">,</span> setSkeleton<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSkeleton</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中...<span class="token punctuation">"</span></span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>skeleton<span class="token punctuation">}</span></span> <span class="token attr-name">skeleton</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SkeletonOrderItem</span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token attr-name">skeletonRepeat</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">body
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">'200px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
    <span class="token comment">// &lt;div</span>
    <span class="token comment">//   style={{</span>
    <span class="token comment">//     width: '100%',</span>
    <span class="token comment">//     height: '100%',</span>
    <span class="token comment">//     position: 'absolute',</span>
    <span class="token comment">//     top: 0,</span>
    <span class="token comment">//     left: 0,</span>
    <span class="token comment">//     overflow: 'auto',</span>
    <span class="token comment">//     WebkitOverflowScrolling: 'touch',</span>
    <span class="token comment">//   }}</span>
    <span class="token comment">//   onScroll={() => {}}</span>
    <span class="token comment">//   onTouchStart={() => {}}</span>
    <span class="token comment">// ></span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">//   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多</span>
    <span class="token comment">// &lt;/div></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>Layout 支持属性</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>topSafeAreaColor</td>
<td>头部安全区域的颜色</td>
<td>String</td>
<td>white</td>
</tr>
<tr>
<td>bottomSafeAreaColor</td>
<td>底部安全区域的颜色</td>
<td>String</td>
<td>white</td>
</tr>
<tr>
<td>useTopSafeArea</td>
<td>是否使用顶部安全区域，默认使用</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>useBottomSafeArea</td>
<td>是否使用底部安全区域，默认使用</td>
<td>Boolean</td>
<td>true</td>
</tr>
</tbody></table>
<h2>Layout.Header 支持属性</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>title</td>
<td>标题</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>ghost</td>
<td>透明模式，一般用在个人主页之类的顶部</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>leading</td>
<td>大字标题模式，即标题非常大的那种</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>addonBefore</td>
<td>左侧挂载</td>
<td>Component</td>
<td>-</td>
</tr>
<tr>
<td>onBackClick</td>
<td>返回事件，基于左侧挂载的封装，若值为 true，则调用 window.history.back()</td>
<td>Function/Boolean</td>
<td>-</td>
</tr>
<tr>
<td>onCloseClick</td>
<td>关闭事件，基于左侧挂载的封装，若值为 true，则调用 window.history.back()</td>
<td>Function/Boolean</td>
<td>-</td>
</tr>
<tr>
<td>addonAfter</td>
<td>右侧挂载</td>
<td>Component</td>
<td>-</td>
</tr>
<tr>
<td>addonBottom</td>
<td>下方挂载</td>
<td>Component</td>
<td>-</td>
</tr>
<tr>
<td>homepage</td>
<td>首页按钮，若值为 true，点击到达/m/index 页面，若为 string 类型，则认为该 string 是个 url 进行跳转，若为 function 类型，则调用该方法</td>
<td>Function/String/Boolean</td>
<td>-</td>
</tr>
<tr>
<td>tabs</td>
<td>Tabs 组件，位于 header 下方</td>
<td>Component</td>
<td>-</td>
</tr>
<tr>
<td>hideInApp</td>
<td>在 app 中隐藏自身</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>hideInAlipay</td>
<td>在 支付宝(网页和小程序) 中隐藏自身</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>hideInAlipayMP</td>
<td>在 支付宝小程序 中隐藏自身</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>borderType</td>
<td>头部下方是使用阴影、线或是没有</td>
<td>border、shadow、none</td>
<td>none</td>
</tr>
<tr>
<td>useSafeArea</td>
<td>是否使用安全区域，默认是在 Layout 中使用，可以在 Layout 中关闭，在 Header 中使用，特殊情况下可以这么做，比如有吸顶 banner 图的时候</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody></table>
<h2>Layout.Body 支持属性</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>loading</td>
<td>若为 true 显示 loading 效果并隐藏内容</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>errorInfo</td>
<td>出错文案，不为空时显示文案并隐藏内容，权重不及 loading 高</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>onReachBottom</td>
<td>到达底部时的钩子</td>
<td>Object</td>
<td>-</td>
</tr>
<tr>
<td>onReachButton.disabled</td>
<td>是否禁用该功能，没有 onReachBottom 对象时也表示禁用</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>onReachButton.content</td>
<td>提示内容</td>
<td>String</td>
<td>加载更多</td>
</tr>
<tr>
<td>onReachButton.handle</td>
<td>点击提示文字或页面到达底部触发的方法</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>onScroll</td>
<td>滚动回调函数</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>skeleton</td>
<td>骨架屏占位</td>
<td>ReactChild</td>
<td>-</td>
</tr>
<tr>
<td>skeletonRepeat</td>
<td>骨架屏显示次数</td>
<td>number</td>
<td>1</td>
</tr>
</tbody></table>
<h2>Layout.Footer 支持属性</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>visible</td>
<td>是否显示</td>
<td>Boolean</td>
<td>true</td>
</tr>
</tbody></table>

        </div>
        <MobilePreview link={this.state.previewUrl} />
      </div>
    );
  }

  private onCodeClick = (url: string) => {
    this.setState({
      previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#' + url,
    })
  }
}
  