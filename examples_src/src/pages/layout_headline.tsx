import * as React from 'react'
import { Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Header title="标题与标题" headline={true} addonAfter={<p>更多</p>} />
      <Layout.Body>body</Layout.Body>
    </Layout>
  )
}

export default Demo
