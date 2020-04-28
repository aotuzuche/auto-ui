## 支持属性

| 属性              | 说明                                                                         | 类型                 | 默认值 |
| ----------------- | ---------------------------------------------------------------------------- | -------------------- | ------ |
| title | 标题 | String | - |
| onClose | 左上角的 X 的关闭事件 | Function | - |
| monthRange | 月份范围，一般这样写：[new Date(2019, 3), new Date(2019, 6)]，只要到月份就行 | [Date, Date] | - |
| defaultRentTime | 默认取车时间，格式为"08:00" | String | - |
| defaultRevertTime | 默认还车时间，格式为"08:00" | String | - |
| data | 数据对象，key 为到日(时分秒为 0)的时间戳，value 如下 | Array | - |
| data.rent | 租车时间范围 | Array | - |
| data.revert | 还车时间范围 | Array | - |
| data.badge | 日期右上角的标记，限一个字 | String | - |
| data.isHoliday | 是否为假期，如果为 true，价格会以红色表示 | Boolean | - |
| data.price | 价格 | Number | - |
| data.disabled | ALL: 全天不可租 斜删除线表示 PART: 部分不可租, DISABLED: 全天不可租 置灰表示 | String | - |
| disabledBefore | 该天之前都不可选，比如：new Date(2019, 3, 5) | Date | - |
| chooseRange | 当前选择的范围，比如 [new Date(2019, 3, 7, 15), new Date(2019, 3, 9, 15)] | [Date, Date] | - |
| minHours|最短租期| Number | - |
| maxHours|最长租期| Number | - |
| footerTips|自定义页脚的提示|(Date, Date) => String|自带|
| lockRentTime|锁定取车时间，这种情况下需要默认有选择租期|Boolean|False|
| checkTimeRange|验证租期范围，为true时，使用系统自带验证；为false时，不验证；自定义方法时，根据返回值确定是否要显示提示框，返回React.ReactDom时，提示返回内容，返回null时，不提示|Boolean/(Date, Date) => React.ReactDom|True|
| onSubmit | 提交事件| Function(Date, Date) | - |

- 租车时间范围/还车时间范围： ['0000', '1200']表示 0 点到 12 点，[['0000', '1200'], ['1500', '2215']] 表示 0 点到 12 点和 15 点到 22 点 15 分

## data 数组数据
