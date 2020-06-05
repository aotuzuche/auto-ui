const marked = require('marked');
const fs = require('fs');
const Prism = require('prismjs');
const componentList = require('./componentList');
const fo = require('./file');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
const package = require('../package.json');

// 拼装模板内容
const getPageContent = content => {
  const reg = /onCodeClick\.bind\(null,.*'(.+?)'.*\)/;
  const href = content.match(reg) ? content.match(reg)[1] : '';
  // const previewPrefix = 'http://localhost:3333/#';
  const previewPrefix = 'https://aotuzuche.github.io/auto-ui/examples/#';
  return `import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: '${previewPrefix}${href}',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
${content}
        </div>
        <MobilePreview link={this.state.previewUrl} />
      </div>
    );
  }

  private onCodeClick = (url: string) => {
    this.setState({
      previewUrl: '${previewPrefix}' + url,
    })
  }
}
  `;
};

// 配置markdown生成器
const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
  const reg = /(^.+)\((.+)\)$/;
  if (level === 6 && reg.test(text)) {
    const match = text.match(reg);
    const css = `C('code-box', { active: this.state.previewUrl.endsWith('${match[2]}') })`;
    return `<div className={${css}} onClick={this.onCodeClick.bind(null, '${match[2]}')}>`;
  }
  return `<h${level}>${text}</h${level}>`;
};
renderer.code = text => {
  const value = Prism.highlight(text, Prism.languages.tsx, 'tsx');
  const code =
    '<pre className="language-tsx"><code className="language-tsx" dangerouslySetInnerHTML={{__html: `' +
    value +
    '`}} /></pre>';
  return '<div className="bd">' + code + '</div></div>';
};
const markdown = marked.setOptions({
  headerIds: false,
  renderer: renderer,
});

// 循环生成组件页面
componentList.forEach(component => {
  const name = fo.toLowerLine(component);
  const file = fs.readFileSync(`examples_src/src/auto-ui/components/${name}/index.zh-CN.md`, 'utf-8');
  let fileStr = file.toString();
  // 把例子中的代码贴到md中
  const reg = /code=\[(.+)\]\((.+)\)/g;
  const match = fileStr.match(reg);
  if (match) {
    fileStr = fileStr.replace(reg, function(code) {
      const m = code.match(/.*\[(.+)\]\((.*)\)/);
      const path = `examples_src/src/pages/${m[2]}.tsx`;
      if (fs.existsSync(path)) {
        let file = fs.readFileSync(path);
        file = file.toString().replace('../auto-ui', 'auto-ui');
        return '###### ' + m[1] + '(/' + m[2] + ')' + '\n\n```tsx\n' + file + '\n```';
      }
      return '';
    });
  }
  const md = markdown(fileStr);
  fs.writeFileSync(`wiki_src/src/pages/${name}.tsx`, getPageContent(md));
});

// 插入版本信息到wiki的version.json供wiki页面读取
fs.writeFileSync('wiki_src/src/version.json', `{ "version": "${package['version']}" }`);
