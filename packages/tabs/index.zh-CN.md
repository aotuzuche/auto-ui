---
---

## Tabs 标签页

本组件仅提空tabs本身，即没有标签内容部分，这部分请自行根据tabs的active属性判断显示


**示例代码**

Tabs的active值与Tabs.Item的value值相等时，该tab即为当前

```jsx
<Tabs active={this.state.active} onClick={this.evt.tabClick}>
    <Tabs.Item value={1}>Tab a</Tabs.Item>
    <Tabs.Item value={2}>Tab b</Tabs.Item>
    <Tabs.Item value={3}>Tab c</Tabs.Item>
</Tabs>
```
### Tabs

|属性|说明|类型|默认值|
|-|-|-|-|
|active|当前的活动tab编号|String/Int|-|
|onClick|代理Tabs.Item的点击事件，并将Tabs.Item的value属性作为参数返回|Function|-|

### Tabs.Item

|属性|说明|类型|默认值|
|-|-|-|-|
|value|该Item对应的值|String/Int|-|
