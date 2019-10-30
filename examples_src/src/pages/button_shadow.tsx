import * as React from 'react'
import { Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('点击了按钮')
  }

  return (
    <Layout>
      <Layout.Body style={{ backgroundColor: '#fff' }}>
        <br />
        <Button shadow={true} onClick={onClick}>
          主按钮
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
