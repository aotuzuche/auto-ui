import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>NavBar 导航栏</h1><h2>基本使用</h2><p><strong>由于其所有功能都能在Layout.Header中实现，所以之后将不维护该组件，请及时替换</strong></p>
<h2>支持属性</h2><table>
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
<td>dark</td>
<td>黑色主题</td>
<td>boolean</td>
<td>false</td>
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
  