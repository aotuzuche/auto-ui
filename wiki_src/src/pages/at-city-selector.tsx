import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/at_city_selector',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/at_city_selector') })} onClick={this.onCodeClick.bind(null, '/at_city_selector')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AtCitySelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCitySelector</span>

      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
`}} /></pre></div></div><h2>支持属性</h2><table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody><tr>
<td>active</td>
<td>当前所在的菜单位置</td>
<td>index/collection/order/user</td>
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
  