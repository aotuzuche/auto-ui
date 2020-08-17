import * as React from 'react'
import { AtNav, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Layout.Header title="我的" borderType="border" />
        <Layout.Body>body</Layout.Body>
        <Layout.Footer>
          <AtNav active="index" />
        </Layout.Footer>
      </Layout>
    )
  }
}

export default Demo
