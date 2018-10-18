---
---

# TimePicker 时间选择

时间选择器，一般在实际应用场景里会结合 Popup 组件，组合成弹框式的时间选择

## 使用示例

```jsx
import { TimePicker } from 'auto-ui'
```

### 基本用法

```jsx
const data = [{
    day: new Date(2018, 4, 1),
    times: ['0000', '1015']
}, {
    day: new Date(2018, 4, 2),
    times: ['0500', '1100']
}, {
    day: new Date(2018, 4, 3),
    times: [['0000', '0015'], ['0145', '1200']]
}]

<TimePicker
    data={data}
    format={['MM月dd日 周wk', 'h点', 'm分']}
    interval={1}
    defaultDay={new Date(2018, 4, 3, 2, 0)}
    ref={e => {
      this.tp = e
    }}
    onChange={this.evt.showTime}
/>
```

| 属性       | 说明                                                                                                                    | 类型          | 默认值                                |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------- |
| data       | 时间数据                                                                                                                | [Object]Array | -                                     |
| data.day   | 天，注意这里的 Date 类型必须要给该天 00:00:00 的数据，即时分秒都为 0                                                    | Date          | -                                     |
| data.times | 时间可选的范围，1. 如果没有该值，范围为全天 24 小时可选；2. 一维数组数据，单个范围可选；3. 二维数组数据，多个范围可选； | Array         | 天全 24 小时                          |
| format     | 数据展示形式，长度为 3 的数组，分别对应天，小时，分钟                                                                   | Array         | ['MM 月 dd 日 周 wk', 'h 点', 'm 分'] |
| interval   | 可选分钟的时间间隔，必须能被 60 整除                                                                                    | Int           | 15                                    |
| defaultDay | 默认时间，注意分钟的数据要和 interval 对应，也就是说如果 interval 设置为 15，那分钟的数据必须是 0、15、30、45           | Date          | -                                     |
| onChange   | 滑动时间器的回调方法，会带上当前的时间（Date 类型）作为参数                                                             | Function      | -                                     |
