---
---

# NavBar 导航栏

## 使用示例

```jsx
import { NavBar } from 'auto-ui'
```

### 基本使用

```jsx
<NavBar title="基本使用" />
```

### 左侧按钮

```jsx
<NavBar title="左侧按钮" leftBtn />
```

### 右侧按钮

```js
<NavBar
  title="右侧按钮"
  rightBtn
  rightClick={() => {
    Toast('点击了右侧按钮')
  }}
/>
```

### 自定义按钮

```js
<NavBar title="自定义按钮" leftBtn="返回上一页" rightBtn="自定义右侧" />
```

### 深色模式

```js
<NavBar
  title="深色模式"
  dark
  leftBtn
  rightBtn
  rightClick={() => {
    Toast('点击了右侧按钮')
  }}
/>
```

## 支持属性

| 属性       | 说明             | 类型    | 默认值     |
| ---------- | ---------------- | ------- | ---------- |
| title      | 标题             | string  | ''         |
| leftBtn    | 是否显示左侧按钮 | Boolean | false      |
| rightBtn   | 是否显示右侧按钮 | Boolean | false      |
| leftClick  | 点击左侧按钮触发 | Boolean | 返回上一页 |
| rightClick | 点击右侧按钮触发 | Boolean | Toast 提示 |
