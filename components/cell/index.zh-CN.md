# Cell 单元格

## 基本使用

单元格包含 2 个部分，`Cell`和`Cell.Row`，`Cell`为容器，内部包含`Cell.Row`，`Cell.Row`为每项的内容

code=[基本使用](cell)

## 统一点击事件

将事件写在`Cell`上，并且`Cell.Row`都带有`value`属性，就可以在每行的点击时捕获他们，事件中将会把`value`作为参数带回。

code=[cell 的 onClick](cell_click)

## 分隔线缩进

分隔线进行缩进，很多列表菜单使用这种样式

code=[cell 的 dividerIndent](cell_divider_indent)

## 带箭头

使右侧带箭头符号，可以在`Cell`上统一设置，也可以在`Cell.Row`中单独设置

code=[arrow](cell_arrow)

## 支持属性

| 属性          | 说明                                                             | 类型      | 默认值 |
| ------------- | ---------------------------------------------------------------- | --------- | ------ |
| onClick       | 会覆盖掉 Cell.Row 的 onClick                                     | Function  | -      |
| dividerIndent | 内部所有 Cell.Row 的分隔线缩进样式，可选样式有左侧缩进或两头缩进 | left/both | false  |
| arrow         | 使每行的右侧带箭头符号                                           | Boolean   | false  |
| wrapperBorder | 是否要外部的描边                                                 | Boolean   | true   |

## Cell.Row 支持属性

| 属性       | 说明                        | 类型      | 默认值 |
| ---------- | --------------------------- | --------- | ------ |
| onClick    | 点击事件(类型为 button)     | Function  | -      |
| to         | 跳转路由(类型为 Link)       | String    | -      |
| href       | 跳转 url(类型为 a 标签)     | String    | -      |
| arrow      | 使右侧带箭头符号            | Boolean   | -      |
| value      | Row 想要传递给 onClick 的值 | Boolean   | false  |
| addonAfter | 右侧的挂载内容              | Component | -      |
