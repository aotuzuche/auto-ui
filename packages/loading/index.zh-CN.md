---
---

# Loading 全局加载

## 使用示例

```jsx
import { Loadind } from 'auto-ui'
```

### 基本使用

```jsx
Loading()
```

### 提示

```jsx
Loading('加载中...')
```

### 手动关闭

```jsx
const { close } = Loading('手动关闭')
setTimeout(() => {
  close()
}, 2000)
```
