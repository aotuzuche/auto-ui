import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/alert',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>Alert 提示框</h1><h2>基本使用</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/alert') })} onClick={this.onCodeClick.bind(null, '/alert')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Alert</span><span class="token punctuation">(</span><span class="token string">'我是一个提示框'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击打开</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>主动关闭</h2><p><code>Alert</code> 会返回一个 <code>close</code> 方法</p>
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/alert_close') })} onClick={this.onCodeClick.bind(null, '/alert_close')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>close<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">Alert</span><span class="token punctuation">(</span><span class="token string">'我会在2秒后关闭'</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>close<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击打开</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>关闭通知</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/alert_callback') })} onClick={this.onCodeClick.bind(null, '/alert_callback')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Alert</span><span class="token punctuation">(</span><span class="token string">'我是一个点击有回调的提示框'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">'关闭'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击打开</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>标题+内容</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/alert_title_desc') })} onClick={this.onCodeClick.bind(null, '/alert_title_desc')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'我是一个提示框'</span><span class="token punctuation">,</span>
      desc<span class="token punctuation">:</span> <span class="token string">'描述文字描述文字描述文字'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击打开</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>confirm 模式</h2><p><code>btns</code>内的按钮<strong>JSON 形式</strong>的为<code>Button</code>组件，所以支持<code>Button</code>组件的所有<code>props</code>。不过需要注意的是：按钮的点击事件可以使用<code>Button</code>的<code>onClick</code>事件，也可以使用<code>Alert</code>的第二个参数，若同时有，都会回调。</p>
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/alert_confirm') })} onClick={this.onCodeClick.bind(null, '/alert_confirm')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onClickA</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'您确定要删除此项吗？'</span><span class="token punctuation">,</span>
      desc<span class="token punctuation">:</span> <span class="token string">'您确定要删除此项吗？您确定要删除此项吗？您确定要删除此项吗？'</span><span class="token punctuation">,</span>
      btns<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'取消'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">'primary'</span><span class="token punctuation">,</span> hollow<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'删除'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">'primary'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onClickB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'您确定要删除此项吗？'</span><span class="token punctuation">,</span>
      desc<span class="token punctuation">:</span> <span class="token string">'您确定要删除此项吗？您确定要删除此项吗？您确定要删除此项吗？'</span><span class="token punctuation">,</span>
      btnDirection<span class="token punctuation">:</span> <span class="token string">'column'</span><span class="token punctuation">,</span>
      btns<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'取消'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">'primary'</span><span class="token punctuation">,</span> hollow<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'删除'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">'primary'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClickA<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">横向按钮</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClickB<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">纵向按钮</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>async 模式</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/alert_async') })} onClick={this.onCodeClick.bind(null, '/alert_async')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> onClick <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">await</span> Alert<span class="token punctuation">.</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'我是一个提示框'</span><span class="token punctuation">,</span>
      btns<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'取消'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'cancel'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">'确定'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'ok'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击打开</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div><h2>支持属性</h2><table>
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
<td>String/ReactElement</td>
<td>-</td>
</tr>
<tr>
<td>desc</td>
<td>内容正文</td>
<td>String/ReactElement</td>
<td>empty</td>
</tr>
<tr>
<td>className</td>
<td>样式名</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>btns</td>
<td>按钮集合</td>
<td>Array&lt;Button 组件&gt;</td>
<td>确定按钮</td>
</tr>
<tr>
<td>btnDirection</td>
<td>按钮的排列方向, row: 横向排列 column: 纵向排列</td>
<td>row / column</td>
<td>row</td>
</tr>
<tr>
<td>callback</td>
<td>按钮点击的回调用，该方法返回 btns 的 value 属性</td>
<td>Function</td>
<td>-</td>
</tr>
</tbody></table>
<h2>方法</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>async</td>
<td>使用 async func 的方式</td>
<td>Promise Function</td>
<td>-</td>
</tr>
</tbody></table>
<h2>调用返回</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>close</td>
<td>关闭方法</td>
<td>Function</td>
<td>-</td>
</tr>
</tbody></table>
<h2>btns 支持属性</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>name</td>
<td>按钮文字</td>
<td>String/HTMLElement</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>按钮的值(在 async 或 callback 时返回)</td>
<td>String、Number、Boolean</td>
<td>-</td>
</tr>
<tr>
<td>onClick</td>
<td>按钮点击回调</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>...</td>
<td>其他 Button 组件的 props</td>
<td>...</td>
<td>-</td>
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
  