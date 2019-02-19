import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/nav-bar',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>NavBar 导航栏</h1><h2>基本使用</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/nav-bar') })} onClick={this.onCodeClick.bind(null, '/nav-bar')}><header>基本使用</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>基本使用<span class="token punctuation">"</span></span> <span class="token attr-name">leftBtn</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">rightBtn</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token plain-text">;

export default Demo;
</span>`}} /></pre></div></div><div className={C('code-box', { active: this.state.previewUrl.endsWith('/nav-bar-width-addonBottom') })} onClick={this.onCodeClick.bind(null, '/nav-bar-width-addonBottom')}><header>大头</header><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>NavBar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span>
      <span class="token attr-name">leftBtn</span>
      <span class="token attr-name">rightBtn</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>规则说明<span class="token punctuation">"</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>费用明细<span class="token punctuation">'</span></span>
      <span class="token attr-name">addonBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">实际支付 </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">'#f00'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">34元</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token plain-text">;

export default Demo;

</span>`}} /></pre></div></div><h3>支持属性</h3><table>
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
<td><code>ReactNode</code></td>
<td>&#39;&#39;</td>
</tr>
<tr>
<td>leftBtn</td>
<td>是否显示左侧按钮</td>
<td><code>ReactNode</code></td>
<td>false</td>
</tr>
<tr>
<td>rightBtn</td>
<td>是否显示右侧按钮</td>
<td><code>ReactNode</code></td>
<td>false</td>
</tr>
<tr>
<td>leftClick</td>
<td>点击左侧按钮触发</td>
<td><code>MouseEventHandler&lt;HTMLDivElement&gt;</code></td>
<td>返回上一页</td>
</tr>
<tr>
<td>rightClick</td>
<td>点击右侧按钮触发</td>
<td><code>MouseEventHandler&lt;HTMLDivElement&gt;</code></td>
<td>M 站首页</td>
</tr>
<tr>
<td>mode</td>
<td>模式</td>
<td><code>normal/large</code></td>
<td>normal</td>
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
  