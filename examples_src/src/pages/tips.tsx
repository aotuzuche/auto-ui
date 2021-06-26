import * as React from 'react'
import { Layout, Tips, Toast } from '../auto-ui'

class Demo extends React.PureComponent {
  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <span>这是一段文字，后面有个提示</span>
            <Tips onClick={this.onClick} />
          </p>
        </Layout.Body>
      </Layout>
    )
  }

  private onClick = () => {
    Toast('提示')
  }
}

export default Demo
