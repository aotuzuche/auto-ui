# LazyImg 图片懒加载

## 基本使用

用法同原生`img`标签

实现原理：
1. 在`img`标签支持`loading=lazy`属性时，优先使用
2. 支持`IntersectionObserver`时，其次使用
3. 均不支持的情况下，不做懒加载处理



code=[基本使用](lazy_img)
