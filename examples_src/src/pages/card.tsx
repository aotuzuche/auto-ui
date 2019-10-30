import * as React from 'react'
import { Card, Layout, Toast } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { disabled: false }

  onClick = () => {
    Toast('on click')
  }

  render() {
    const sty = {
      height: '50%',
    }

    return (
      <Layout>
        <Layout.Body>
          <Card shadow aspectRatio={12 / 9} style={{ width: '50%' }}>
            <Card.Figure
              style={sty}
              onClick={this.onClick}
              image="https://carphoto.aotuzuche.com/car/19/07/687221426/1562663319417_1.jpg"
            >
              <p style={{ color: 'white', padding: '10px' }}>text</p>
            </Card.Figure>
            <p style={{ padding: '10px' }}>hahahaha</p>
          </Card>
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
