import * as React from 'react'
import { Cell, Layout, Radio } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { checked: true, disabled: false }

  render() {
    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Cell>
            <Cell.Row title="通过我设置disabled">
              <Radio
                checked={this.state.disabled}
                onChange={this.onDisabledChange}
                style={{ marginLeft: 'auto' }}
              />
            </Cell.Row>
          </Cell>
          <br />
          <Radio
            disabled={this.state.disabled}
            checked={this.state.checked}
            onChange={this.onChange}
            text={'disabled = ' + (this.state.disabled ? 'true' : 'false')}
          />
        </Layout.Body>
      </Layout>
    )
  }

  private onDisabledChange = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  private onChange = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }
}

export default Demo
