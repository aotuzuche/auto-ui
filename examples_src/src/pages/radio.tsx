import * as React from 'react'
import { Layout, Radio } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { checked: true }

  render() {
    return (
<<<<<<< HEAD
      <Layout whiteBackground={true} supportDarkMode={true}>
=======
      <Layout whiteBackground={true}>
>>>>>>> coding...
        <Layout.Body>
          <Radio checked={this.state.checked} onChange={this.onChange} />
          <Radio checked={!this.state.checked} onChange={this.onChange} />
          <Radio checked={this.state.checked} onChange={this.onChange} />
          <Radio checked={!this.state.checked} onChange={this.onChange} />
          <Radio checked={this.state.checked} onChange={this.onChange} />
          <Radio checked={!this.state.checked} onChange={this.onChange} />
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
