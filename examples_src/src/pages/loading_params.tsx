import * as React from 'react'
import { Layout, Loading } from '../auto-ui'

const Demo: React.FC<any> = () => {
  Loading({ hideMask: true, type: 'secondary' })
  return <Layout supportDarkMode={!!localStorage.getItem('darkMode')} />
}

export default Demo
