---
---

# Cell 单元格

## 使用示例

```jsx
import { Cell } from 'auto-ui'
```

单元格包含 2 个部分，Cell 和 Cell.Row，Cell 为容器，内部包含 Cell.Row，Cell.Row 为每项的内容

## 基本使用

```jsx
<Cell>
  <Cell.Row>基本使用</Cell.Row>
</Cell>
```

## 统一点击事件

将事件写在 Cell 上，并且 Cell.Row 都带有 value 属性，就可以在每行的点击时捕获他们，事件中将会把 value 作为参数带回。

```jsx
<Cell
  onClick={val => {
    Toast.show(val)
  }}
>
  <Cell.Row value="第一项">第一项</Cell.Row>
  <Cell.Row value="第二项">第二项</Cell.Row>
  <Cell.Row value="第三项">第三项</Cell.Row>
  <Cell.Row value="第四项">第四项</Cell.Row>
</Cell>
```

**分隔线缩进**

使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式

```jsx
<Cell indentLine>
  <Cell.Row>A</Cell.Row>
</Cell>
```

**带箭头**

使每行的右侧带箭头符号

```jsx
<Cell arrow>
  <Cell.Row>A</Cell.Row>
</Cell>
```

| 属性       | 说明                                                       | 类型     | 默认值 |
| ---------- | ---------------------------------------------------------- | -------- | ------ |
| onClick    | 点击事件，代理内部每个 Row 组件的 onClick 事件，权重比它高 | Function | -      |
| indentLine | 使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式       | Boolean  | false  |
| arrow      | 使每行的右侧带箭头符号                                     | Boolean  | false  |

### Cell.Row

**带 label**

位置在 children 前

```jsx
<Cell.Row label="A" />
```

**onClick 事件**

效果同 Cell 的 onClick 事件，当 Cell 同样有 onClick 事件时，该事件无效

```jsx
<Cell.Row value={1} onClick={ ... } />
```

**带箭头**

右侧带箭头符号

```jsx
<Cell.Row arrow>A</Cell.Row>
```

| 属性    | 说明                                                       | 类型     | 默认值 |
| ------- | ---------------------------------------------------------- | -------- | ------ |
| label   | label 标签，位置在 children 前                             | Boolean  | false  |
| onClick | 点击事件，代理内部每个 Row 组件的 onClick 事件，权重比它高 | Function | -      |
| value   | onClick 事件所携带的参数                                   | Any      | -      |
| arrow   | 右侧带箭头符号                                             | Boolean  | false  |
