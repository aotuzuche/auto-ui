import * as React from 'react'
import { Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout supportDarkMode={true}>
      <Layout.Header title="加载中..." borderType="shadow" />
      <Layout.Body loading={true}>body</Layout.Body>
    </Layout>
  )
}

export default Demo
