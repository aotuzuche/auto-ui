import * as React from 'react'
import { Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('点击了按钮')
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <br />
        <Button type="primary" shadow={true} onClick={onClick}>
          主按钮
        </Button>
        <br />
        <Button type="secondary" shadow={true} onClick={onClick}>
          次要按钮
        </Button>
        <br />
        <Button type="danger" shadow={true} onClick={onClick}>
          警告按钮
        </Button>
        <br />
      </Layout.Body>
    </Layout>
  )
}

export default Demo
