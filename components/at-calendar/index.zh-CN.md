## 支持属性

| 属性           | 说明                                                                             | 类型                 | 默认值 |
| -------------- | -------------------------------------------------------------------------------- | -------------------- | ------ |
| title          | 标题                                                                             | String               | -      |
| onClose        | 左上角的 X 的关闭事件                                                            | Function             | -      |
| monthRange     | 月份范围，一般这样写：[new Date(2019, 3), new Date(2019, 6)]，注意只要到月份就行 | [Date, Date]         | -      |
| data           | 数据                                                                             | Array                | -      |
| disabledBefore | 该天之前都不可选，比如：new Date(2019, 3, 5)                                     | Date                 | -      |
| chooseRange    | 当前选择的范围，比如 [new Date(2019, 3, 7, 15), new Date(2019, 3, 9, 15)]        | [Date, Date]         | -      |
| onSubmit       | 提交事件                                                                         | Function(Date, Date) | -      |

## data 数组数据
