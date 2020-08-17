import * as React from 'react'
import { Button, Layout, Space } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Body>
        <Button onClick={() => {}} mini={true}>
          x
        </Button>
        <Space size={1} />
        <Button onClick={() => {}} mini={true}>
          x
        </Button>
        <Space size={2} />
        <Button onClick={() => {}} mini={true}>
          x
        </Button>
        <Space size={3} />
        <Button onClick={() => {}} mini={true}>
          x
        </Button>
        <Space size={4} />
        <Button onClick={() => {}} mini={true}>
          x
        </Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
