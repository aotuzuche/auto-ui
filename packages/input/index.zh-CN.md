---
---

# Input 文本输入

## 使用示例

### 基本使用

```jsx
<Input placeholder="基本使用" />
```

### 禁用

```jsx
<Input placeholder="禁用" disabled />
```

### 错误

```jsx
<Input placeholder="错误" error />
```

### 左侧挂载

```jsx
<Input placeholder="左侧挂载" addonBefore={<a>Before</a>} />
```

### 右侧挂载

```jsx
<Input placeholder="右侧挂载" addonAfter={<a>After</a>} />
```

### 多行文本

```jsx
<Input placeholder="多行文本" multi />
```

| 属性        | 说明                                       | 类型      | 默认值 |
| ----------- | ------------------------------------------ | --------- | ------ |
| disabled    | 是否禁用                                   | Boolean   | false  |
| error       | 是否显示错误样式（红色边框）               | Boolean   | false  |
| addonBefore | 左侧挂载，比如一些 icon 或标题             | Component | -      |
| addonAfter  | 右侧挂载，比如发送验证码按钮               | Component | -      |
| multi       | 多行文本，addonBefore && addonAfter 不可用 | Boolean   | false  |
