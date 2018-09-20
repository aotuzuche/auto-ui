---
---

## Cell 列

包括2个部分，Cell和Cell.Row，Cell为列的外容易，内部包含Cell.Row，Cell.Row为每项的内容


**示例代码**
```jsx
<Cell>
    <Cell.Row>
        1. balabala
    </Cell.Row>
    
    <Cell.Row>
        2. balabala
    </Cell.Row>

    <Cell.Row>
        3. balabala
    </Cell.Row>
</Cell>
```

**统一点击事件**

将事件写在 Cell 上，并且 Cell.Row 都带有 value 属性，就可以在每行的点击时捕获他们，事件中将会把 value 作为参数带回。

```jsx
<Cell
  onClick={val => {
    console.log(val)
  }}
>
  <Cell.Row value={1}>A</Cell.Row>
  <Cell.Row value={2}>A</Cell.Row>
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
