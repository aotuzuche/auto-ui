---
---

# A 统计埋点

## 使用示例

```jsx
import { A } from 'auto-ui'

class DemoA extends React.Component {
  render() {
    return <A onClick={this.click}>Click Me!!!</A>
  }
}
```

大写的`A`组件，其实它就是`html`的`a`标签，包装了发送数据统计相关的代码

当他有 `report` 属性时，会自动发送统计数据，如果没有则跟`a`标签没有区别，发送数据使用 [auto-libs](https://github.com/aotuzuche/auto-libs) 中的 `AS`

```jsx
<A report={{ foo: 'bar' }}>发送统计报告</A>
```

另外目前组件中直接支持埋点数据统计的有

- Button
- Cell.Row
- Radio
- Switch
- Tabs.Item
- ActionSheet.Item

## 支持属性

| 属性   | 说明                     | 类型   | 默认值 |
| ------ | ------------------------ | ------ | ------ |
| report | 数据统计所需要发送的数据 | Object | -      |
