import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/select',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>Spin 加载</h1><p>一般放在下拉加载更多这种形式的列表底部</p>
<h2>基本使用</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/select') })} onClick={this.onCodeClick.bind(null, '/select')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> selectRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> selectRef1 <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectVo<span class="token punctuation">,</span> setSelectVo<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectVo1<span class="token punctuation">,</span> setSelectVo1<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>btnRef<span class="token punctuation">,</span> setBtnRef<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span>useState<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>btnRef1<span class="token punctuation">,</span> setBtnRef1<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span>useState<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selectRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">(</span>selectRef<span class="token punctuation">.</span>current <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'selectRef'</span><span class="token punctuation">)</span>
    <span class="token function">setBtnRef</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

    <span class="token keyword">const</span> c1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'selectRef1'</span><span class="token punctuation">)</span>
    <span class="token function">setBtnRef1</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    <span class="token function">setSelectVo</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    <span class="token function">setSelectVo1</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'darkMode'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">这是测试select</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">根据点击位置，自动算出select位置</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">'20px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>selectRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>selectVo<span class="token punctuation">.</span>label <span class="token operator">||</span> <span class="token string">'点我'</span><span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
            <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectRef<span class="token punctuation">}</span></span>
            <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)测试1234对对对顶顶顶顶订单'</span><span class="token punctuation">,</span>
                value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'18130202504299 (沪A23456，2024.5.21-2024.5.22)'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">11</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectVo<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>
            <span class="token attr-name">referenceRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>btnRef<span class="token punctuation">}</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">

        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">'30px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>selectRef1<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">;</span><span class="token punctuation">(</span>selectRef1<span class="token punctuation">.</span>current <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>selectRef1<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>selectVo1<span class="token punctuation">.</span>label <span class="token operator">||</span> <span class="token string">'测试'</span><span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
            <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectRef1<span class="token punctuation">}</span></span>
            <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'奔驰'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                label<span class="token punctuation">:</span> <span class="token string">'宝马'</span><span class="token punctuation">,</span>
                value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'大众'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'小鹏'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'法拉利'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'宾利'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectVo1<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>
            <span class="token attr-name">referenceRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>btnRef1<span class="token punctuation">}</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange1<span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
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
<td>className</td>
<td></td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>下拉框的高度</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>left</td>
<td>下拉框距离左侧的距离</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>right</td>
<td>下拉框距离右侧的距离</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>referenceRef</td>
<td>触发下拉框显示的元素</td>
<td>HTMLElement</td>
<td>-</td>
</tr>
<tr>
<td>data</td>
<td>下拉框数据</td>
<td>label: string, value: string or number</td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>与 data 中 value 一致</td>
<td>String or number</td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td>返回某一项的 data</td>
<td>(data: data) =&gt; void</td>
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
  