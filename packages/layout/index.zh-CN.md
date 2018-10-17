---
---

# Layout 布局

包括 3 个部分，Header、Body 和 Footer，用于页面结构最外层

## 使用示例

```jsx
import { Layout } from 'auto-ui'
```

### 基本使用

```jsx
<Layout>
  <Layout.Header>header</Layout.Header>

  <Layout.Body>body</Layout.Body>

  <Layout.Footer>footer</Layout.Footer>
</Layout>
```

### 高级导航

```jsx
<Layout>
  <Layout.Header
    addonBefore={<a href="#">左侧挂载</a>}
    title="标题"
    onBackClick={() => {}}
    onCloseClick={() => {}}
    addonAfter={<a href="#">右侧挂载</a>}
    addonBottom={<p>下方挂载</p>}
  />

  <Layout.Body>body</Layout.Body>

  <Layout.Footer>footer</Layout.Footer>
</Layout>
```

### Loading

```jsx
<Layout>
  <Layout.Header>header</Layout.Header>

  <Layout.Body loading>body</Layout.Body>

  <Layout.Footer>footer</Layout.Footer>
</Layout>
```

### 错误处理

```jsx
<Layout>
  <Layout.Header>header</Layout.Header>

  <Layout.Body errorInfo="我是错误消息">body</Layout.Body>

  <Layout.Footer>footer</Layout.Footer>
</Layout>
```

### 不显示底部

```jsx
<Layout>
  <Layout.Header>header</Layout.Header>

  <Layout.Body>body</Layout.Body>

  <Layout.Footer visible={false}>footer</Layout.Footer>
</Layout>
```

也可以不写

```jsx
<Layout>
  <Layout.Header>header</Layout.Header>

  <Layout.Body>body</Layout.Body>
</Layout>
```

## Layout.Header 支持属性

| 属性         | 说明                                 | 类型      | 默认值 |
| ------------ | ------------------------------------ | --------- | ------ |
| title        | 标题                                 | String    | -      |
| ghost        | 透明模式，一般用在个人主页之类的顶部 | Boolean   | false  |
| addonBefore  | 左侧挂载                             | Component | -      |
| onBackClick  | 返回事件，基于左侧挂载的封装         | Function  | -      |
| onCloseClick | 关闭事件，基于左侧挂载的封装         | Function  | -      |
| addonAfter   | 右侧挂载                             | Component | -      |
| addonBottom  | 下方挂载                             | Component | -      |

## Layout.Body 支持属性

| 属性      | 说明                                                          | 类型    | 默认值 |
| --------- | ------------------------------------------------------------- | ------- | ------ |
| loading   | 是否正在加载中，若为 true 显示 loading 效果并隐藏内容         | Boolean | false  |
| errorInfo | 出错时的文案，不为空时显示文案并隐藏内容，权重不及 loading 高 | String  | -      |

## Layout.Footer 支持属性

| 属性    | 说明     | 类型    | 默认值 |
| ------- | -------- | ------- | ------ |
| visible | 是否显示 | Boolean | true   |
