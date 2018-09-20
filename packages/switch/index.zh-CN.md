---
---

## Switch 开关

**基本使用**
```jsx
<Radio
    active={this.state.active}
    onChange={ ... }
/>
```

**带文字**

注意：只有i和o同时有的情况下才会显示带文字
```jsx
<Radio
    i="关"
    o="开"
    active={this.state.active}
    onChange={ ... }
/>
```

**带勾/叉图标**
```jsx
<Radio
    icon
    active={this.state.active}
    onChange={ ... }
/>
```

**不可用**
```jsx
<Radio disabled />
```
