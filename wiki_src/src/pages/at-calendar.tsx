import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/at_calendar',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/at_calendar') })} onClick={this.onCodeClick.bind(null, '/at_calendar')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AtCalendar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    calendar<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> price<span class="token punctuation">:</span> <span class="token number">333</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> price<span class="token punctuation">:</span> <span class="token number">333</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> price<span class="token punctuation">:</span> <span class="token number">333</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> price<span class="token punctuation">:</span> <span class="token number">333</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> isHoliday<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> price<span class="token punctuation">:</span> <span class="token number">888</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> isHoliday<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>AtCalendar
        title<span class="token operator">=</span><span class="token string">"查看可租用时间"</span>
        onClose<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClose<span class="token punctuation">}</span>
        chooseRange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        defaultRentTime<span class="token operator">=</span><span class="token string">"10:30"</span>
        defaultRevertTime<span class="token operator">=</span><span class="token string">"05:15"</span>
        minHours<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span>
        <span class="token comment">// lockRentTime={true}</span>
        chooseTips<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> day<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tips<span class="token punctuation">:</span> <span class="token string">'起止30天起'</span><span class="token punctuation">,</span> hideAt<span class="token punctuation">:</span> <span class="token string">'never'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> day<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tips<span class="token punctuation">:</span> <span class="token string">'起止30天起'</span><span class="token punctuation">,</span> hideAt<span class="token punctuation">:</span> <span class="token string">'never'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> day<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tips<span class="token punctuation">:</span> <span class="token string">'起止30天起'</span><span class="token punctuation">,</span> hideAt<span class="token punctuation">:</span> <span class="token string">'never'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
        headerTips<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>t1 <span class="token operator">||</span> <span class="token operator">!</span>t2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">''</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token string">'?????'</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
        onHeaderTipsClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
        footerTips<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>t1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">'取车'</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>t2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">'还车'</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token string">'选好了'</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
        checkTimeRange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
        data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>calendar <span class="token keyword">as</span> any<span class="token punctuation">}</span>
        onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSubmit<span class="token punctuation">}</span>
        onDayClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDayClick<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">private</span> onDayClick <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>day<span class="token punctuation">:</span> Date<span class="token punctuation">,</span> type<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token string">'201906020115'</span><span class="token punctuation">:</span> <span class="token string">'草'</span><span class="token punctuation">,</span>
          <span class="token string">'201906020130'</span><span class="token punctuation">:</span> <span class="token string">'草草草'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
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
<td>月份范围，一般这样写：[new Date(2019, 3), new Date(2019, 6)]，只要到月份就行</td>
<td>[Date, Date]</td>
<td>-</td>
</tr>
<tr>
<td>defaultRentTime</td>
<td>默认取车时间，格式为&quot;08:00&quot;</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>defaultRevertTime</td>
<td>默认还车时间，格式为&quot;08:00&quot;</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>数据对象，key 为到日(时分秒为 0)的时间戳，value 如下</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>data.rent</td>
<td>租车时间范围</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>data.revert</td>
<td>还车时间范围</td>
<td>Array</td>
<td>-</td>
</tr>
<tr>
<td>data.badge</td>
<td>日期右上角的标记，限一个字</td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>data.isHoliday</td>
<td>是否为假期，如果为 true，价格会以红色表示</td>
<td>Boolean</td>
<td>-</td>
</tr>
<tr>
<td>data.price</td>
<td>价格</td>
<td>Number</td>
<td>-</td>
</tr>
<tr>
<td>data.disabled</td>
<td>ALL: 全天不可租 斜删除线表示 PART: 部分不可租, DISABLED: 全天不可租 置灰表示</td>
<td>String</td>
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
<td>minHours</td>
<td>最短租期</td>
<td>Number</td>
<td>-</td>
</tr>
<tr>
<td>maxHours</td>
<td>最长租期</td>
<td>Number</td>
<td>-</td>
</tr>
<tr>
<td>footerTips</td>
<td>自定义页脚的提示</td>
<td>(Date, Date) =&gt; String</td>
<td>自带</td>
</tr>
<tr>
<td>lockRentTime</td>
<td>锁定取车时间，这种情况下需要默认有选择租期</td>
<td>Boolean</td>
<td>False</td>
</tr>
<tr>
<td>checkTimeRange</td>
<td>验证租期范围，为true时，使用系统自带验证；为false时，不验证；自定义方法时，根据返回值确定是否要显示提示框，返回React.ReactDom时，提示返回内容，返回null时，不提示</td>
<td>Boolean/(Date, Date) =&gt; React.ReactDom</td>
<td>True</td>
</tr>
<tr>
<td>onSubmit</td>
<td>提交事件</td>
<td>Function(Date, Date)</td>
<td>-</td>
</tr>
</tbody></table>
<ul>
<li>租车时间范围/还车时间范围： [&#39;0000&#39;, &#39;1200&#39;]表示 0 点到 12 点，[[&#39;0000&#39;, &#39;1200&#39;], [&#39;1500&#39;, &#39;2215&#39;]] 表示 0 点到 12 点和 15 点到 22 点 15 分</li>
</ul>

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
  