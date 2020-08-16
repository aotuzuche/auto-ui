import * as React from 'react'
import { Layout, Loading } from '../auto-ui'

const Demo: React.FC<any> = () => {
  Loading()
  return <Layout supportDarkMode={true} />
}

export default Demo
