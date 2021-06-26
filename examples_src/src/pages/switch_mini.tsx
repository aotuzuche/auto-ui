import * as React from 'react'
import { Layout, Space, Switch } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { active: true }

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Switch active={this.state.active} mini={true} onChange={this.onChange} />
          <Space size={2} />
          <Switch active={!this.state.active} mini={true} onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    )
  }

  private onChange = () => {
    this.setState({ active: !this.state.active })
  }
}

export default Demo
