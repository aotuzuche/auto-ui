---
---

# Cell 单元格

## 使用示例

```jsx
import { Cell } from 'auto-ui'
```

单元格包含 2 个部分，Cell 和 Cell.Row，Cell 为容器，内部包含 Cell.Row，Cell.Row 为每项的内容

### 基本使用

```jsx
<Cell>
  <Cell.Row>基本使用</Cell.Row>
</Cell>
```

### 统一点击事件

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

### 分隔线缩进

使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式

```jsx
<Cell indentLine>
  <Cell.Row>朋友圈</Cell.Row>
  <Cell.Row>附近的人</Cell.Row>
  <Cell.Row>游戏</Cell.Row>
  <Cell.Row arrow>小程序</Cell.Row>
</Cell>
```

### 带箭头

使每行的右侧带箭头符号

```jsx
<Cell arrow>
  <Cell.Row>个人信息</Cell.Row>
  <Cell.Row>简介</Cell.Row>
  <Cell.Row>昵称</Cell.Row>
</Cell>
```

## 支持属性

| 属性       | 说明                                                 | 类型     | 默认值 |
| ---------- | ---------------------------------------------------- | -------- | ------ |
| onClick    | 会覆盖掉 Cell.Row 的 onClick                         | Function | -      |
| indentLine | 使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式 | Boolean  | false  |
| arrow      | 使每行的右侧带箭头符号                               | Boolean  | false  |

## Cell.Row 支持属性

| 属性    | 说明                        | 类型     | 默认值 |
| ------- | --------------------------- | -------- | ------ |
| onClick | Cell 会覆盖掉               | Function | -      |
| arrow   | 使右侧带箭头符号            | Boolean  | false  |
| value   | Row 想要传递给 onClick 的值 | Boolean  | false  |
