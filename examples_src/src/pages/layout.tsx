import * as React from 'react'
import { Layout, Provider as LayoutProvider, SafeArea } from '../auto-ui'
const Demo: React.FC<any> = () => {
  return (
    <LayoutProvider.Provider value={{ userAgent: navigator.userAgent }}>
      <SafeArea inset="bottom" />
      <Layout>
        <Layout.Header borderType="shadow">header</Layout.Header>
        <Layout.Body>body 1234</Layout.Body>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    </LayoutProvider.Provider>
  )
}

export default Demo
