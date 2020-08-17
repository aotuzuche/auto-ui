import * as React from 'react'
import { Alert, Button, Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Alert({
      title: '我是一个提示框',
      desc: '描述文字描述文字描述文字',
    })
  }

  return (
    <Layout>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
