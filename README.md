# AUTO-UI
凹凸 React 公用组件, 旨在快速开发，节省业务开发时间

## 安装

```bash
$ yarn add auto-ui
```

或者

```bash
$ npm i auto-ui -S
```

## 快速开始

### 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```bash
$ yarn add babel-plugin-import
```

babel 配置:

```
{
  "plugins": [
    ["import", {
      "libraryName": "auto-ui",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

组件中使用

```js
import { Button } from 'auto-ui'
```
