import * as React from 'react'
import { Input, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { value: '', value1: '' }

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Input
            value={this.state.value}
            placeholder="请输入..."
            allowClear
            inputProps={{ id: 'value' }}
            onChange={this.onChange}
          />

          <Input
            value={this.state.value1}
            placeholder="请输入..."
            allowClear
            multi
            textareaProps={{ id: 'value1' }}
            onChange={this.onChange}
          />
        </Layout.Body>
      </Layout>
    )
  }

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target
    console.log(evt.target)
    this.setState({
      [id]: value,
    })
  }
}

export default Demo
