---
---

# Alert 弹出框

## 使用示例

```js
import { Alert } from 'auto-ui'
```

### 基本使用

```js
Alert('基本使用')
```

### 主动关闭（2s）

`Alert` 会返回一个 `close` 方法

```js
const { close } = Alert('主动关闭(2s)')
setTimeout(() => {
  close()
}, 2000)
```

### 标题+内容

```js
Alert.show({
  title: 'Hello',
  desc: 'World'
})
```

### confirm 模式

```js
Alert({
  title: 'Hello',
  desc: '我是一个描述',
  btns: [
    {
      name: 'monkey',
      onClick: () => {
        Toast.show('monkey')
      }
    },
    {
      name: 'kitty',
      onClick: () => {
        Toast.show('kitty')
      }
    },
    {
      name: 'world',
      className: 'alert-world',
      onClick: () => {
        Toast.show('world')
      }
    }
  ]
})
```

## 支持属性

| 属性      | 说明     | 类型   | 默认值   |
| --------- | -------- | ------ | -------- |
| title     | 标题     | String | -        |
| desc      | 内容正文 | String | empty    |
| className | 样式名   | String | -        |
| btns      | 按钮集合 | Array  | 确定按钮 |

## 调用返回

| 属性  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| close | 关闭方法 | Function | -      |

## btns 支持属性

| 属性    | 说明         | 类型               | 默认值 |
| ------- | ------------ | ------------------ | ------ |
| name    | 按钮文字     | String/HTMLElement | -      |
| onClick | 按钮点击回调 | Function           | -      |
