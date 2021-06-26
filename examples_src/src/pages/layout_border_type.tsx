import * as React from 'react'
import { Button, Layout } from '../auto-ui'

interface IState {
  borderType?: 'none' | 'shadow' | 'border'
}

class Demo extends React.PureComponent<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = { borderType: 'none' }
  }

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Header title="Border" borderType={this.state.borderType} />

        <Layout.Body>
          <Button onClick={this.onClick.bind(this, 'none')}>none</Button>
          <br />
          <Button onClick={this.onClick.bind(this, 'border')}>border</Button>
          <br />
          <Button onClick={this.onClick.bind(this, 'shadow')}>shadow</Button>
        </Layout.Body>

        <Layout.Footer borderType={this.state.borderType}>Footer</Layout.Footer>
      </Layout>
    )
  }

  private onClick = (type: any) => {
    this.setState({
      borderType: type,
    })
  }
}

export default Demo
