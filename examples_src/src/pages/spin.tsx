import * as React from 'react'
import { Layout, Spin } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
      </Layout.Body>
    </Layout>
  )
}

export default Demo
