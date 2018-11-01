import './style'
import React from 'react'

import { Layout, Popup, Cell } from 'auto-ui'

class DemoLayout extends React.Component {
  constructor(props) {
    super(props)

    this.content =
      '我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容'
    this.state = {
      default: false,
      highest: false,
      Loading: false,
      errorInfo: false,
      hideFooter: false,
      reachBottom: false,
      content: [
        '我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容,我是内容'
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <Cell>
          <Cell.Row
            onClick={() => {
              this.setState({
                default: true
              })
            }}
          >
            基本使用
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                highest: true
              })
            }}
          >
            高级导航
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                Loading: true
              })
            }}
          >
            Loading
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                errorInfo: true
              })
            }}
          >
            错误处理
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                hideFooter: true
              })
            }}
          >
            不显示底部
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                reachBottom: true
              })
            }}
          >
            上拉刷新
          </Cell.Row>
        </Cell>
        <Popup
          onBgClick={() => {
            this.setState({
              default: false
            })
          }}
          visible={this.state.default}
        >
          <Layout>
            <Layout.Header>header</Layout.Header>

            <Layout.Body>body</Layout.Body>

            <Layout.Footer>footer</Layout.Footer>
          </Layout>
        </Popup>

        <Popup
          onBgClick={() => {
            this.setState({
              highest: false
            })
          }}
          visible={this.state.highest}
        >
          <Layout>
            <Layout.Header
              addonBefore={<a href="#">左侧挂载</a>}
              title="标题"
              onBackClick={() => {}}
              onCloseClick={() => {}}
              addonAfter={<a href="#">右侧挂载</a>}
              addonBottom={<p>下方挂载</p>}
            />

            <Layout.Body>body</Layout.Body>

            <Layout.Footer>footer</Layout.Footer>
          </Layout>
        </Popup>

        <Popup
          onBgClick={() => {
            this.setState({
              Loading: false
            })
          }}
          visible={this.state.Loading}
        >
          <Layout>
            <Layout.Header>header</Layout.Header>

            <Layout.Body loading>body</Layout.Body>

            <Layout.Footer>footer</Layout.Footer>
          </Layout>
        </Popup>

        <Popup
          onBgClick={() => {
            this.setState({
              errorInfo: false
            })
          }}
          visible={this.state.errorInfo}
        >
          <Layout>
            <Layout.Header>header</Layout.Header>

            <Layout.Body errorInfo="我是错误消息">body</Layout.Body>

            <Layout.Footer>footer</Layout.Footer>
          </Layout>
        </Popup>

        <Popup
          onBgClick={() => {
            this.setState({
              hideFooter: false
            })
          }}
          visible={this.state.hideFooter}
        >
          <Layout>
            <Layout.Header>header</Layout.Header>

            <Layout.Body>body</Layout.Body>

            <Layout.Footer visible={false}>footer</Layout.Footer>
          </Layout>
        </Popup>
        <Popup visible={this.state.reachBottom}>
          <Layout>
            <Layout.Header>header</Layout.Header>

            <Layout.Body
              onReachBottom={{
                handler: () => {
                  return new Promise(resolve => {
                    setTimeout(() => {
                      this.setState({
                        content: this.state.content.concat(this.content)
                      })
                      resolve()
                    }, 2000)
                  })
                }
              }}
              onScroll={() => {
                console.log(1)
              }}
            >
              {this.state.content}
            </Layout.Body>

            <Layout.Footer>footer</Layout.Footer>
          </Layout>
        </Popup>
      </React.Fragment>
    )
  }
}

export default DemoLayout
