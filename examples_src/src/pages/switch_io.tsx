import * as React from 'react'
import { Layout, Space, Switch } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { active: true }

  render() {
    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Switch o="开" i="关" active={this.state.active} onChange={this.onChange} />
          <Space size={2} />
          <Switch o="O" i="I" active={!this.state.active} onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    )
  }

  private onChange = () => {
    this.setState({ active: !this.state.active })
  }
}

export default Demo
