import * as React from 'react'
import { Cell, Icon, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Layout.Body>
          <Cell>
            <Cell.Row>
              <Icon.Arrow />
            </Cell.Row>
            <Cell.Row>
              <Icon.Check />
            </Cell.Row>
            <Cell.Row>
              <Icon.Back />
            </Cell.Row>
            <Cell.Row>
              <Icon.Close />
            </Cell.Row>
            <Cell.Row>
              <Icon.Tips />
            </Cell.Row>
          </Cell>
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
