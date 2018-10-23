# 快速开始

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

```js
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

### 导入所有组件

```jsx
import auto-ui from 'auto-ui'
```

### 手动按需导入

```jsx
import Button from 'auto-ui/lib/button''
```
