---
---

## Input 输入框

**基本使用**
```jsx
<Input type="text" placeholder="Placeholder" />
```

**不可用**
```jsx
<Input type="text" placeholder="Placeholder" disabled />
```

**错误**
```jsx
<Input type="text" placeholder="Placeholder" error />
```

**左侧挂载**
```jsx
<Input type="text" placeholder="Placeholder" addonBefore={<a href="#">Before</a>} />
```

**右侧挂载**
```jsx
<Input type="text" placeholder="Placeholder" addonAfter={<a href="#">After</a>} />
```

**多行**
```jsx
<Input type="text" placeholder="Placeholder" multi />
```

|属性|说明|类型|默认值|
|-|-|-|-|
|disabled|是否为不可用|Boolean|false|
|error|是否为错误样式（红色边框）|Boolean|false|
|addonBefore|左侧挂载，比如一些icon或标题|Component|-|
|addonAfter|右侧挂载，比如发送验证码按钮|Component|-|
|multi|多行显示，默认3行，注意：使用多行时，挂载将失效|Boolean|false|
