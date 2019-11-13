# Cell 单元格

## 基本使用

单元格包含 2 个部分，`Cell`和`Cell.Row`，`Cell`为容器，内部包含`Cell.Row`，`Cell.Row`为每项的内容

code=[基本使用](cell)

## 统一点击事件

将事件写在`Cell`上，并且`Cell.Row`都带有`value`属性，就可以在每行的点击时捕获他们，事件中将会把`value`作为参数带回。

code=[cell 的 onClick](cell_click)

## 分隔线缩进

使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式

code=[indentLine 和 endIndentLine](cell_indent_line)

## 带箭头

使右侧带箭头符号，可以在`Cell`上统一设置，也可以在`Cell.Row`中单独设置

code=[arrow](cell_arrow)

## 支持属性

| 属性          | 说明                                                 | 类型     | 默认值 |
| ------------- | ---------------------------------------------------- | -------- | ------ |
| onClick       | 会覆盖掉 Cell.Row 的 onClick                         | Function | -      |
| indentLine    | 使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式 | Boolean  | false  |
| endIndentLine | 使每行的分隔线右侧不顶到头                           | Boolean  | false  |
| arrow         | 使每行的右侧带箭头符号                               | Boolean  | false  |

## Cell.Row 支持属性

| 属性    | 说明                        | 类型     | 默认值 |
| ------- | --------------------------- | -------- | ------ |
| onClick | Cell 会覆盖掉               | Function | -      |
| arrow   | 使右侧带箭头符号            | Boolean  | -      |
| value   | Row 想要传递给 onClick 的值 | Boolean  | false  |
