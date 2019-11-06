import * as React from 'react'
import { Layout, Radio } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { checked: true }

  render() {
    return (
      <Layout>
        <Layout.Body style={{ background: '#fff' }}>
          <Radio hollow={true} checked={this.state.checked} onChange={this.onChange} />
          <Radio hollow={true} checked={!this.state.checked} onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    )
  }

  private onChange = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }
}

export default Demo
