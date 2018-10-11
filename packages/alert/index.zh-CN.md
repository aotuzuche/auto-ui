---
---

# Alert 弹出框

## 使用示例

```js
import { Alert } from 'auto-ui'
```

### 基本使用

```js
Alert.show('基本使用')
```

### 主动关闭（2s）

你也可以使用 Alert.hide()来关闭它，一般不会用到

```js
Alert.show('基本使用')
setTimeout(() => {
  Alert.hide()
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
Alert.show({
  title: 'Hello',
  desc: 'world',
  btnTextN: 'monkey',
  btnTextY: 'kitty',
  callbackY: () => {
    Toast.show('kitty')
  },
  callbackN: () => {
    Toast.show('monkey')
  }
})
```

| 属性      | 说明             | 类型     | 默认值 |
| --------- | ---------------- | -------- | ------ |
| title     | 标题             | String   | -      |
| desc      | 内容正文         | String   | empty  |
| className | 样式名           | String   | -      |
| btnTextN  | 否定按钮文字     | String   | -      |
| btnTextY  | 肯定按钮文字     | String   | 确定   |
| btnText   | btnTextY 的别名  | String   | 确定   |
| callbackN | 否定回调方法     | Function | -      |
| callbackY | 肯定回调方法     | Function | -      |
| callback  | callbackY 的别名 | Function | -      |
