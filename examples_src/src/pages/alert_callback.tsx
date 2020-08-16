import * as React from 'react'
import { Alert, Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Alert('我是一个点击有回调的提示框', () => {
      Toast('关闭')
    })
  }

  return (
    <Layout supportDarkMode={true}>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
