import * as React from 'react'
import { Layout, Space, Switch } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { active: true }

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Switch type="primary" active={this.state.active} onChange={this.onChange} />
          <Space size={2} />
          <Switch type="secondary" active={this.state.active} onChange={this.onChange} />
          <Space size={2} />
          <Switch type="danger" active={this.state.active} onChange={this.onChange} />
          <br />
          <Switch type="primary" icon={true} active={this.state.active} onChange={this.onChange} />
          <Space size={2} />
          <Switch
            type="secondary"
            icon={true}
            active={this.state.active}
            onChange={this.onChange}
          />
          <Space size={2} />
          <Switch type="danger" icon={true} active={this.state.active} onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    )
  }

  private onChange = () => {
    this.setState({ active: !this.state.active })
  }
}

export default Demo
