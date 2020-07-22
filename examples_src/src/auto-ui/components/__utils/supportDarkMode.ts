// 如果找到的第一个<Layout />标签有说明支持暗黑模式，则说明支持暗黑模式
const supportDarkMode = () => {
  const layout = document.querySelector('.x-app')
  if (layout && layout.classList.contains('x-app--support-dark-mode')) {
    return true
  }
  return false
}

export default supportDarkMode
