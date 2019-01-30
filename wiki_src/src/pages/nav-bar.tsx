import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'http://localhost:3333/#',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>NavBar 导航栏</h1><h3>使用示例</h3><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token punctuation">{</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span><span class="token punctuation">;</span>`}} /></pre></div></div><h3>基本使用</h3><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>基本使用<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>`}} /></pre></div></div><h3>左侧按钮</h3><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>左侧按钮<span class="token punctuation">"</span></span> <span class="token attr-name">leftBtn</span> <span class="token punctuation">/></span></span>`}} /></pre></div></div><h3>右侧按钮</h3><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>右侧按钮<span class="token punctuation">"</span></span>
  <span class="token attr-name">rightBtn</span>
  <span class="token attr-name">rightClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">'点击了右侧按钮'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">/></span></span>`}} /></pre></div></div><h3>自定义按钮</h3><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>自定义按钮<span class="token punctuation">"</span></span> <span class="token attr-name">leftBtn</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>返回上一页<span class="token punctuation">"</span></span> <span class="token attr-name">rightBtn</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>自定义右侧<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>`}} /></pre></div></div><h3>深色模式</h3><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>深色模式<span class="token punctuation">"</span></span>
  <span class="token attr-name">dark</span>
  <span class="token attr-name">leftBtn</span>
  <span class="token attr-name">rightBtn</span>
  <span class="token attr-name">rightClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">'点击了右侧按钮'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">/></span></span>`}} /></pre></div></div><h3>支持属性</h3><table>
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
</tbody></table>

        </div>
        <MobilePreview link={this.state.previewUrl} />
      </div>
    );
  }

  private onCodeClick = (url: string) => {
    this.setState({
      previewUrl: 'http://localhost:3333/#' + url,
    })
  }
}
  