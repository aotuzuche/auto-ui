---
---

# Action-Sheet 动作面板

## 使用示例

```js
import { ActionSheet } from 'auto-ui'
```

点击背景蒙层默认关闭整个动作面板，所以默认是没有取消按钮的，需要取消按钮可以通过`closeText`属性设置

### 默认

```jsx
<ActionSheet
  visible={this.state.default}
  title="默认"
  onClose={() => {
    this.setState({
      default: false
    })
  }}
  onClick={item => {
    Toast.show(item.name)
  }}
  items={[
    {
      name: 'Action A',
      value: 1
    },
    {
      name: 'Action B',
      value: 2
    },
    {
      name: 'Action C',
      value: 3
    }
  ]}
/>
```

### 带取消按钮

```jsx
<ActionSheet
  visible={this.state.hasCancel}
  title="带取消按钮"
  closeText="取消"
  onClose={() => {
    this.setState({
      hasCancel: false
    })
  }}
  onClick={item => {
    Toast.show(item.name)
  }}
  items={[
    {
      name: 'Action A',
      value: 1
    },
    {
      name: 'Action B',
      value: 2
    },
    {
      name: 'Action C',
      value: 3
    }
  ]}
/>
```

### 自定义显示文字

```jsx
<ActionSheet
  visible={this.state.customName}
  title="自定义显示文字"
  onClose={() => {
    this.setState({
      customName: false
    })
  }}
  onClick={item => {
    Toast.show(item.name)
  }}
  items={[
    {
      name: 'Action A',
      value: 1
    },
    {
      name: 'Action B',
      value: 2
    },
    {
      name: (
        <img
          src="//carphoto.aotuzuche.com/web/auto/assets/imgs/logo.png"
          height="30"
          width="30"
        />
      ),
      value: 3
    }
  ]}
/>
```

## 支持属性

| 属性      | 说明                                     | 类型     | 默认值 |
| --------- | ---------------------------------------- | -------- | ------ |
| visible   | 是否显示                                 | Boolean  | false  |
| title     | 标题文字                                 | String   | -      |
| items     | 选项,见下                                | Array    | -      |
| closeText | 关闭按钮的文字                           | String   | 关闭   |
| onClose   | 关闭按钮点击事件                         | Function | -      |
| onClick   | 点击选项出发，参数为当前点击的 item 对象 | Function | -      |

## items 支持属性

| 属性      | 说明     | 类型               | 默认值 |
| --------- | -------- | ------------------ | ------ |
| name      | 显示文字 | String/HTMLElement | -      |
| className | 样式     | String             | -      |
