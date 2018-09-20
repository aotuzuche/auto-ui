---
---

## Radio 选择


**基本使用**
```jsx
<Radio
    checked={this.state.checked}
    value={1}
    text="Radio A"
    onChange={ ... }
/>
```

**不可用**
```jsx
<Radio disabled />
```

|属性|说明|类型|默认值|
|-|-|-|-|
|checked|是否选中状态|Boolean|false|
|value|值，在onChange事件中将会作为参数携带|String/Int|-|
|text|提示文字，跟在该icon后面|String|-|
|onChange|点击事件|Function|-|
|disabled|是否为不可用|Boolean|false|
