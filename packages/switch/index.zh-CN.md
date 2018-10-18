---
---

# Switch 开关

## 使用示例

```jsx
import { Switch } from 'auto-ui'
```

### 基本使用

```jsx
<Switch
  active={this.state.active}
  onChange={() => {
    this.setState({
      active: !this.state.active
    })
  }}
/>
```

### 带文字

注意：只有 i 和 o 同时有的情况下才会显示带文字

```jsx
<Switch
  i="关"
  o="开"
  active={this.state.text}
  onChange={() => {
    this.setState({
      text: !this.state.text
    })
  }}
/>
```

### 带图标

```jsx
<Switch
  icon
  active={this.state.icon}
  onChange={() => {
    this.setState({
      icon: !this.state.icon
    })
  }}
/>
```

### 禁用

```jsx
<Switch disabled />
```

## 支持属性

| 属性     | 说明                                                       | 类型     | 默认值 |
| -------- | ---------------------------------------------------------- | -------- | ------ |
| active   | 是否激活状态                                               | Boolean  | false  |
| onChange | 点击事件                                                   | Function | -      |
| i        | 非激活时的文字（建议不超过 4 字节），i 与 o 同时使用才有效 | String - |
| o        | 激活时的文字（建议不超过 4 字节），i 与 o 同时使用才有效   | String - |
| icon     | 带 icon，会在圆的滑块上显示勾/叉图标                       | Boolean  | false  |
| disabled | 是否为不可用                                               | Boolean  | false  |
