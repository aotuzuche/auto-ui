import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://aotuzuche.github.io/auto-ui/examples/#/lazy_img',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>LazyImg 图片懒加载</h1><h2>基本使用</h2><p>用法同原生<code>img</code>标签</p>
<p>实现原理：</p>
<ol>
<li>在<code>img</code>标签支持<code>loading=lazy</code>属性时，优先使用</li>
<li>支持<code>IntersectionObserver</code>时，其次使用</li>
<li>均不支持的情况下，不做懒加载处理</li>
</ol>
<div className={C('code-box', { active: this.state.previewUrl.endsWith('/lazy_img') })} onClick={this.onCodeClick.bind(null, '/lazy_img')}><div className="bd"><pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> LazyImg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'auto-ui'</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Header</span> <span class="token attr-name">borderType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Lazy Img<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyImg</span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">'block'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://carphoto.aotuzuche.com/2car/18/06/1001126/1530319772361_1.jpg?x-oss-process=image/resize,w_500<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyImg</span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">'block'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://carphoto.aotuzuche.com/2car/20/04/698352428/1588050928902_1.jpg?x-oss-process=image/resize,w_500<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyImg</span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">'block'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://carphoto.aotuzuche.com/2car/19/01/582653105/1548063173572_1.jpg?x-oss-process=image/resize,w_500<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyImg</span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">'block'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://carphoto.aotuzuche.com/2car/19/09/478828701/1591001769684_1.jpg?x-oss-process=image/resize,w_500<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

export default Demo
</span>`}} /></pre></div></div>
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
  