---
---

# Toast 轻提示

## 使用示例

```jsx
import { Toast } from 'auto-ui'
```

### 基本使用

```jsx
Toast('基本使用')
```

### 自定义显示时长，默认 2 秒

```jsx
Toast('5 秒提示', 5000)
```

### 手动关闭

```js
const { close } = Toast('手动关闭')

setTimeout(() => {
  close()
}, 1000)
```
