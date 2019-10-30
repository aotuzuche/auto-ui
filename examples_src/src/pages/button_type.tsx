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
        <Button onClick={onClick}>主按钮</Button>
        <br />
        <Button type="danger" onClick={onClick}>
          警告按钮
        </Button>
        <br />
        <Button type="default" onClick={onClick}>
          默认按钮
        </Button>
        <br />
        <p>空心按钮</p>
        <br />
        <Button hollow={true} onClick={onClick}>
          主按钮
        </Button>
        <br />
        <Button hollow={true} type="danger" onClick={onClick}>
          警告按钮
        </Button>
        <br />
        <Button hollow={true} type="default" onClick={onClick}>
          默认按钮
        </Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
