---
---
[苏东坡红皮书东](ss)
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
  }
  else {
    if (props.report) {
      report(props.report)
    }
    if (props.onClick) {
      props.onClick(e)
    }
  }
}
```

大写的A组件，其实他就是html的a标签，包装了发送数据统计相关的代码

当他有report时，会自动发送统计数据，如果没有则跟a标签没有区别，另外发送数据的地址在`auto/__libs/report.js`中配置

```jsx
<A report={{ foo: 'bar' }}>click me!</A>
```
1. Button
2. Button
3. Button
4. Button

另外目前组件中直接支持埋点数据统计的有

- Button
- Cell.Row
- Radio
- Switch
- Tabs.Item
- ActionSheet.Item

他们均继承自A组件，他除了a标签本身的props之外，还可以接受两个与埋点相关的props

|属性|说明|类型|默认值|
|-|-|-|-|
|report|数据统计所需要发送的数据|Object|-|
|defer|是否在onClick事件完成后发送|Boolean|false|
