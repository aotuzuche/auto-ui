import * as React from 'react'
import { Input, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { value: '', value1: '' }

  render() {
    return (
      <Layout>
        <Layout.Body>
          <Input
            value={this.state.value}
            placeholder="请输入..."
            allowClear
            onChange={this.onChange}
          />

          <Input
            value={this.state.value1}
            placeholder="请输入..."
            allowClear
            multi
            onChange={this.onChange1}
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

  private onChange1 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value1: evt.target.value,
    })
  }
}

export default Demo
