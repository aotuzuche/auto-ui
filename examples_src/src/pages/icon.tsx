import * as React from 'react'
import { Icon, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Layout.Body>
          <Icon.Arrow />
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
