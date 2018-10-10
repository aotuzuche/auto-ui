import React from 'react'
import { Cell, ActionSheet, Toast } from 'auto-ui'

class DemoActionSheet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: false,
      hasCancel: false,
      customName: false
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
            默认
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                hasCancel: true
              })
            }}
          >
            带取消按钮
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                customName: true
              })
            }}
          >
            自定义显示文字
          </Cell.Row>
        </Cell>
        <ActionSheet
          visible={this.state.default}
          title="默认"
          onClose={() => {
            this.setState({
              default: false
            })
          }}
          onClick={item => {
            Toast.show(item.name)
          }}
          items={[
            {
              name: 'Action A',
              value: 1
            },
            {
              name: 'Action B',
              value: 2
            },
            {
              name: 'Action C',
              value: 3
            }
          ]}
        />
        <ActionSheet
          visible={this.state.hasCancel}
          title="带取消按钮"
          closeText="取消"
          onClose={() => {
            this.setState({
              hasCancel: false
            })
          }}
          onClick={item => {
            Toast.show(item.name)
          }}
          items={[
            {
              name: 'Action A',
              value: 1
            },
            {
              name: 'Action B',
              value: 2
            },
            {
              name: 'Action C',
              value: 3
            }
          ]}
        />
        <ActionSheet
          visible={this.state.customName}
          title="自定义显示文字"
          onClose={() => {
            this.setState({
              customName: false
            })
          }}
          onClick={item => {
            Toast.show(item.name)
          }}
          items={[
            {
              name: 'Action A',
              value: 1
            },
            {
              name: 'Action B',
              value: 2
            },
            {
              name: <img src="//carphoto.aotuzuche.com/web/auto/assets/imgs/logo.png" height="30" width="30"></img>,
              value: 3
            }
          ]}
        />
      </React.Fragment>
    )
  }
}

export default DemoActionSheet
