---
---

## A 标签

```js
import { A } from 'auto-ui'

const onClick = async e => {
  if (props.defer) {
    if (props.onClick) {
      await props.onClick(e)
    }
    if (props.report) {
      report(props.report)
    }
  } else {
    if (props.report) {
      report(props.report)
    }
    if (props.onClick) {
      props.onClick(e)
    }
  }
}
```

大写的 A 组件，其实他就是 html 的 a 标签，包装了发送数据统计相关的代码

当他有 report 时，会自动发送统计数据，如果没有则跟 a 标签没有区别，另外发送数据的地址在`auto/__libs/report.js`中配置

```jsx
<A report={{ foo: 'bar' }}>click me!</A>
```

另外目前组件中直接支持埋点数据统计的有

- Button
- Cell.Row
- Radio
- Switch
- Tabs.Item
- ActionSheet.Item

他们均继承自 A 组件，他除了 a 标签本身的 props 之外，还可以接受两个与埋点相关的 props

| 属性   | 说明                          | 类型    | 默认值 |
| ------ | ----------------------------- | ------- | ------ |
| report | 数据统计所需要发送的数据      | Object  | -      |
| defer  | 是否在 onClick 事件完成后发送 | Boolean | false  |
