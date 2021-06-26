import * as React from 'react'
import { Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Header borderType="shadow">header</Layout.Header>
      <Layout.Body>body 1234</Layout.Body>
      <Layout.Footer borderType="shadow">footer</Layout.Footer>
    </Layout>
  )
}

export default Demo
