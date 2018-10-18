---
---

# Radio 单选框

## 使用示例

```jsx
import { Radio } from 'auto-ui'
```

### 基本使用

```jsx
<Radio
    checked={this.state.checked}
    value={1}
    text="Radio A"
    onChange={ ... }
/>
```

### 禁用

```jsx
<Radio disabled />
```

### 支持属性

| 属性     | 说明                                   | 类型       | 默认值 |
| -------- | -------------------------------------- | ---------- | ------ |
| checked  | 选中状态                               | Boolean    | false  |
| value    | 值，在 onChange 事件中将会作为参数携带 | String/Int | -      |
| text     | 提示文字，跟在该 icon 后面             | String     | -      |
| onChange | 点击事件                               | Function   | -      |
| disabled | 是否禁用                               | Boolean    | false  |
