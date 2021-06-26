import * as React from 'react'
import { Layout, Loading } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const LoadingIcon = <span>加载中...</span>
  Loading(LoadingIcon)
  setTimeout(Loading.hide, 2000)
  return <Layout supportDarkMode={!!localStorage.getItem('darkMode')} />
}

export default Demo
