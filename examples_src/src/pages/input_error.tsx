import * as React from 'react'
import { Input, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { value: '' }

  render() {
    return (
      <Layout>
        <Layout.Body>
          <Input
            value={this.state.value}
            error={this.state.value.length < 10}
            placeholder="输入内容的length少于10就会显示错误状态"
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
}

export default Demo
