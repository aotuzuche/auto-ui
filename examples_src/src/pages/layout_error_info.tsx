import * as React from 'react'
import { Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout supportDarkMode={true}>
      <Layout.Header title="错误页面" borderType="shadow" />
      <Layout.Body errorInfo="系统错误">body</Layout.Body>
    </Layout>
  )
}

export default Demo
