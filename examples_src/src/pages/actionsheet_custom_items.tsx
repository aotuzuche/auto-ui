import * as React from 'react'
import { ActionSheet, Button, Input, Layout, Space, Toast } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false, value: '' }

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Button onClick={this.onClick}>显示ActionSheet</Button>
          <ActionSheet
            closeText="关闭"
            onClose={this.onClick}
            onClick={this.onItemClick}
            visible={this.state.visible}
            items={[
              { name: 'item 1', value: '1' },
              { name: 'item 2', value: '2' },
              { name: this.renderCustomerItem(), value: '3' },
            ]}
          />
        </Layout.Body>
      </Layout>
    )
  }

  private renderCustomerItem = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>其他</p>
        <Space size={2} />
        <Input
          mini={true}
          style={{ flex: '1' }}
          value={this.state.value}
          onChange={this.onChange}
        />
        <Space size={2} />
        <Button mini={true} onClick={this.onCustomClick}>
          确定
        </Button>
      </div>
    )
  }

  private onClick = () => {
    this.setState({ visible: !this.state.visible })
  }

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: evt.target.value.trim() })
  }

  private onItemClick = (value: any) => {
    if (value !== '3') {
      Toast(value)
      this.setState({ visible: false })
    }
  }

  private onCustomClick = () => {
    if (this.state.value === '') {
      Toast('不能为空')
      return
    }
    Toast(this.state.value)
    this.setState({ visible: false })
  }
}

export default Demo
