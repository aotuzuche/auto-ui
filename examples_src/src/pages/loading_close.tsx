import * as React from 'react'
import { Button, Layout, Loading } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Loading()
    setTimeout(Loading.hide, 2000)
  }

  return (
    <Layout supportDarkMode={true}>
      <Layout.Body>
        <Button onClick={onClick}>点击加载</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
