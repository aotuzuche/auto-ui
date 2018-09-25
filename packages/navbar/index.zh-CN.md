---
---

## NavBar 导航栏

### 使用

```js
import { NavBar } from 'auto-ui'

<NavBar title="导航栏" />
```

### 更多用法

```js
<NavBar title="导航栏" leftBtn />
```

```js
<NavBar
  title="导航栏"
  rightBtn
  rightClick={() => {
    alert('点击呢右侧按钮')
  }}
/>
```

### API

| 属性       | 说明             | 类型    | 默认值     |
| ---------- | ---------------- | ------- | ---------- |
| title      | 标题             | string  | ''         |
| leftBtn    | 是否显示左侧按钮 | Boolean | false      |
| rightBtn   | 是否显示右侧按钮 | Boolean | false      |
| leftClick  | 点击左侧按钮触发 | Boolean | 返回上一页 |
| rightClick | 点击右侧按钮触发 | Boolean | Toast 提示 |
