import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/upload',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>Upload 上传</h1><h2>基本使用</h2><div className={C('code-box', { active: this.state.previewUrl.endsWith('/upload') })} onClick={this.onCodeClick.bind(null, '/upload')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-libs'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Card<span class="token punctuation">,</span> Cell<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast<span class="token punctuation">,</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    active<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    data<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    fileList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    fileList1<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    fileList2<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    fileList3<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    fileInitialList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ax <span class="token operator">=</span> <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      url<span class="token punctuation">:</span> <span class="token string">'/apigateway/carDealer/scooter/image/authYongda'</span><span class="token punctuation">,</span>
      method<span class="token punctuation">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 获取 oss ticket</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      data<span class="token punctuation">:</span> ax<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        fileInitialList<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            done<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            progress<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            uid<span class="token punctuation">:</span> <span class="token string">'WechatIMG103-1724148387642-13'</span><span class="token punctuation">,</span>
            url<span class="token punctuation">:</span>
              <span class="token string">'//at-cpic-test.oss-cn-hangzhou.aliyuncs.com/image-yongda/20240820/WechatIMG103-1724148387642-13.jpeg'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> fileList<span class="token punctuation">,</span> fileList1<span class="token punctuation">,</span> fileList2<span class="token punctuation">,</span> fileList3 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span> <span class="token attr-name">supportDarkMode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'darkMode'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>正常情况<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
              <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span>
              <span class="token attr-name">onError</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token function">Toast</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>fl<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> e <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  fileList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>fl<span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fileList<span class="token punctuation">}</span></span>
              <span class="token attr-name">initialFileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fileInitialList<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">

          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>多张 5张<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
              <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1<span class="token punctuation">"</span></span>
              <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onError</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token function">Toast</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fl <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  fileList1<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>fl<span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fileList1<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">

          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>多选 多张 5张<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
              <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2<span class="token punctuation">"</span></span>
              <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">multiple</span>
              <span class="token attr-name">onError</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token function">Toast</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fl <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  fileList2<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>fl<span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fileList2<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">

          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>自定义fileName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
              <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test3<span class="token punctuation">"</span></span>
              <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">multiple</span>
              <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tttteeeesssstttt<span class="token punctuation">"</span></span>
              <span class="token attr-name">onError</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token function">Toast</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fl <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  fileList3<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>fl<span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fileList3<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">

          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cell.Title</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
              <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test4<span class="token punctuation">"</span></span>
              <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">multiple</span>
              <span class="token attr-name">disabled</span>
              <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tttteeeesssstttt<span class="token punctuation">"</span></span>
              <span class="token attr-name">onError</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token function">Toast</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onSuccess</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fl <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  fileList3<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>fl<span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fileList3<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
`}} /></pre></div></div>
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
  