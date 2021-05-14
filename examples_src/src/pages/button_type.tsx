import * as React from 'react'
import { Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('点击了按钮')
  }

  return (
    <Layout>
      <Layout.Body>
        <br />
        <Button type="primary" onClick={onClick}>
          主按钮
        </Button>
        <br />
        <Button type="secondary" onClick={onClick}>
          次要按钮
        </Button>
        <br />
        <Button type="danger" onClick={onClick}>
          警告按钮
        </Button>
        <br />
        <Button type="default" onClick={onClick}>
          默认按钮
        </Button>
        <br />
        <p>轻按钮</p>
        <br />
        <Button type="primary" lighter={true} onClick={onClick}>
          主按钮
        </Button>
        <br />
        <Button type="secondary" lighter={true} onClick={onClick}>
          次要按钮
        </Button>
        <br />
        <Button type="danger" lighter={true} onClick={onClick}>
          警告按钮
        </Button>
        <br />
        <p>空心按钮</p>
        <br />
        <Button hollow={true} type="primary" onClick={onClick}>
          主按钮
        </Button>
        <br />
        <Button hollow={true} type="secondary" onClick={onClick}>
          次要按钮
        </Button>
        <br />
        <Button hollow={true} type="danger" onClick={onClick}>
          警告按钮
        </Button>
        <br />
        <Button hollow={true} type="default" onClick={onClick}>
          默认按钮
        </Button>
        <br />
        <p>空心按钮 + 轻按钮</p>
        <br />
        <Button hollow={true} lighter={true} type="primary" onClick={onClick}>
          主按钮
        </Button>
        <br />
        <Button hollow={true} lighter={true} type="secondary" onClick={onClick}>
          次要按钮
        </Button>
        <br />
        <Button hollow={true} lighter={true} type="danger" onClick={onClick}>
          警告按钮
        </Button>
        <br />
        <Button hollow={true} lighter={true} type="default" onClick={onClick}>
          默认按钮
        </Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
