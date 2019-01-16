---
---

# Button 按钮

## 使用示例

```js
import { Button } from 'auto-ui'
```

### 默认使用

```jsx
<Button>默认使用</Button>
```

### 使用 type

按钮分为 primary、danger 与 default3 种（注意：默认为 primary）

```jsx
<Button type="primary">Primary Button</Button>

<Button type="danger" >Danger Button</Button>

<Button type="default">Default Button</Button>
```

### 小按钮

```jsx
<Button mini type="primary">小按钮</Button>

<Button mini type="danger">小按钮</Button>

<Button mini type="default">小按钮</Button>
```

### 加载中

```jsx
<Button loading>加载中</Button>
```

### 禁用

```jsx
<Button disabled>禁用</Button>
```

## 支持属性

| 属性     | 说明             | 类型                       | 默认值  |
| -------- | ---------------- | -------------------------- | ------- |
| type     | 类型             | primary / danger / default | primary |
| onClick  | 点击事件         | Function                   | -       |
| mini     | 是否使用小按钮   | Boolean                    | false   |
| loading  | 是否为加载中状态 | Boolean                    | false   |
| disabled | 是否不可用       | Boolean                    | false   |
