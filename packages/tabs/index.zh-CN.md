---
---

# Tabs 标签页

## 使用示例

```jsx
import { Tabs } from 'auto-ui'
```

本组件仅提空 tabs 本身，即没有标签内容部分，这部分请自行根据 tabs 的 active 属性判断显示

### 基本使用

Tabs 的 active 值与 Tabs.Item 的 value 值相等时，该 tab 即为当前

```jsx
<Tabs
  active={this.state.active}
  onClick={val => {
    this.setState({
      active: val
    })
  }}
>
  <Tabs.Item value={1}>Tab a</Tabs.Item>
  <Tabs.Item value={2}>Tab b</Tabs.Item>
  <Tabs.Item value={3}>Tab c</Tabs.Item>
</Tabs>
{
  this.state.active === 1 && <div className="tab tab-a">Tab a</div>
}
{
  this.state.active === 2 && <div className="tab tab-b">Tab b</div>
}
{
  this.state.active === 3 && <div className="tab tab-c">Tab c</div>
}
```

## 支持属性

| 属性    | 说明                                                                | 类型       | 默认值 |
| ------- | ------------------------------------------------------------------- | ---------- | ------ |
| active  | 当前的活动 tab 编号                                                 | String/Int | -      |
| onClick | 代理 Tabs.Item 的点击事件，并将 Tabs.Item 的 value 属性作为参数返回 | Function   | -      |

## Tabs.Item 支持属性

| 属性  | 说明             | 类型       | 默认值 |
| ----- | ---------------- | ---------- | ------ |
| value | 该 Item 对应的值 | String/Int | -      |
