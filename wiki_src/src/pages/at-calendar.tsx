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
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>onClose</td>
<td>左上角的 X 的关闭事件</td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td>monthRange</td>
<td>月份范围，一般这样写：[new Date(2019, 3), new Date(2019, 6)]，注意只要到月份就行</td>
<td>[Date, Date]</td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>数据</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>disabledBefore</td>
<td>该天之前都不可选，比如：new Date(2019, 3, 5)</td>
<td>Date</td>
<td>-</td>
</tr>
<tr>
<td>chooseRange</td>
<td>当前选择的范围，比如 [new Date(2019, 3, 7, 15), new Date(2019, 3, 9, 15)]</td>
<td>[Date, Date]</td>
<td>-</td>
</tr>
<tr>
<td>onSubmit</td>
<td>提交事件</td>
<td>Function(Date, Date)</td>
<td>-</td>
</tr>
</tbody></table>
<h2>data 数组数据</h2>
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
  