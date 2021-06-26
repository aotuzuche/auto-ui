import * as React from 'react'
import { Cell, Input, Layout, Switch } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { value: '', disabled: false }

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Cell>
            <Cell.Row title="通过我设置disabled">
              <Switch
                active={!this.state.disabled}
                onChange={this.onSwitchChange}
                style={{ marginLeft: 'auto' }}
              />
            </Cell.Row>
          </Cell>
          <br />
          <p>disabled = {this.state.disabled ? 'true' : 'false'}</p>
          <Input
            value={this.state.value}
            disabled={this.state.disabled}
            placeholder="请输入..."
            onChange={this.onChange}
          />
        </Layout.Body>
      </Layout>
    )
  }

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: evt.target.value,
    })
  }

  private onSwitchChange = (disabled: boolean) => {
    this.setState({ disabled: !disabled })
  }
}

export default Demo
