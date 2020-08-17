import * as React from 'react'
import { Button, Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Header
        addonBefore={<button>左侧挂载</button>}
        title="标题"
        onBackClick={() => {}}
        onCloseClick={() => {}}
        borderType="shadow"
        addonAfter={
          <Button shrink mini onClick={() => {}}>
            右侧挂载
          </Button>
        }
        homepageButton={true}
        addonBottom={<p>下方挂载</p>}
      />
      <Layout.Body>body</Layout.Body>
    </Layout>
  )
}

export default Demo
