import * as React from 'react'
import { Button, Cell, Layout, Space, Toast } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { loading: false }

  render() {
    return (
      <Layout>
        <Layout.Body>
          <Button loading={this.state.loading} onClick={this.onClick}>
            {this.state.loading ? null : '点击加载'}
          </Button>
          <br />
          <Button type="danger" loading={this.state.loading} onClick={this.onClick}>
            {this.state.loading ? null : '点击加载'}
          </Button>
          <br />
          <Button hollow={true} loading={this.state.loading} onClick={this.onClick}>
            {this.state.loading ? null : '点击加载'}
          </Button>
          <br />
          <Button type="danger" hollow={true} loading={this.state.loading} onClick={this.onClick}>
            {this.state.loading ? null : '点击加载'}
          </Button>
          <br />
          <Button type="default" hollow={true} loading={this.state.loading} onClick={this.onClick}>
            {this.state.loading ? null : '点击加载'}
          </Button>
          <br />
          <Cell>
            <Cell.Row>
              <Button mini={true} loading={this.state.loading} onClick={this.onClick}>
                {this.state.loading ? null : '点击加载'}
              </Button>
              <Space size={2} />
              <Button
                type="default"
                mini={true}
                loading={this.state.loading}
                onClick={this.onClick}
              >
                {this.state.loading ? null : '点击加载'}
              </Button>
            </Cell.Row>
          </Cell>
        </Layout.Body>
      </Layout>
    )
  }

  private onClick = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
      Toast('加载完成')
    }, 2000)
  }
}

export default Demo
