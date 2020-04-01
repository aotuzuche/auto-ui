import * as React from 'react'
import { Layout, Provider as LayoutProvider } from '../auto-ui'
const Demo: React.FC<any> = () => {
  return (
    <LayoutProvider.Provider value={{ userAgent: navigator.userAgent }}>
      <Layout>
        <Layout.Header borderType="shadow">header</Layout.Header>
        <Layout.Body>body</Layout.Body>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
      {/* <A /> */}
    </LayoutProvider.Provider>
  )
}

const A = () => {
  return (
    <div>
      dsadasdas
      <B />
    </div>
  )
}

class B extends React.PureComponent {
  static contextType = LayoutProvider
  render() {
    console.log(this.context)
    return <div>123445</div>
  }
}

export default Demo
