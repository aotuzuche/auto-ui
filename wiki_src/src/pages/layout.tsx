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
<h2>基本使用</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout') })} onClick={this.onCodeClick.bind(null, '/layout')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">header</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Header</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">body 1234</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
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
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_header_homepage') })} onClick={this.onCodeClick.bind(null, '/layout_header_homepage')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
</span>`}} /></pre></div></div><h2>高级导航</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_header') })} onClick={this.onCodeClick.bind(null, '/layout_header')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
</span>`}} /></pre></div></div><h2>透明头</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_ghost') })} onClick={this.onCodeClick.bind(null, '/layout_ghost')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
</span>`}} /></pre></div></div><h2>headline 模式</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_headline') })} onClick={this.onCodeClick.bind(null, '/layout_headline')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
</span>`}} /></pre></div></div><h2>tabs</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_tabs') })} onClick={this.onCodeClick.bind(null, '/layout_tabs')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
</span>`}} /></pre></div></div><h2>Loading</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_loading') })} onClick={this.onCodeClick.bind(null, '/layout_loading')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
</span>`}} /></pre></div></div><h2>Header 的 border 类型</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_border_type') })} onClick={this.onCodeClick.bind(null, '/layout_border_type')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
`}} /></pre></div></div><h2>错误信息展示</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_error_info') })} onClick={this.onCodeClick.bind(null, '/layout_error_info')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
</span>`}} /></pre></div></div><h2>自定义错误 Icon</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_error_icon') })} onClick={this.onCodeClick.bind(null, '/layout_error_icon')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>错误页面<span class="token punctuation">"</span></span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span>
        <span class="token attr-name">errorInfo</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>系统错误<span class="token punctuation">"</span></span>
        <span class="token attr-name">errorIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
            <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>64 64 896 896<span class="token punctuation">"</span></span>
            <span class="token attr-name">focusable</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
            <span class="token attr-name">data-icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>github<span class="token punctuation">"</span></span>
            <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1em<span class="token punctuation">"</span></span>
            <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1em<span class="token punctuation">"</span></span>
            <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span>
            <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        body
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>到达底部</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/layout_reach_bottom') })} onClick={this.onCodeClick.bind(null, '/layout_reach_bottom')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
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
`}} /></pre></div></div><h2>Layout 支持属性</h2><table>
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
<td>topSafeAreaColor</td>
<td>上安全区域的颜色</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>bottomSafeAreaColor</td>
<td>下安全区域的颜色</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>useBottomSafeArea</td>
<td>是否使用底部安全区域，默认使用</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>grayBackground</td>
<td>使用灰色背景</td>
<td>Boolean</td>
<td>false</td>
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
<td>hideInMini</td>
<td>在 小程序 中隐藏自身</td>
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
<td>errorIcon</td>
<td>出错 icon，配合 errorInfo 显示，也可以单独显示</td>
<td>ReactNode</td>
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
  