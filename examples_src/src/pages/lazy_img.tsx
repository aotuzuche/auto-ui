import * as React from 'react'
import { Layout, LazyImg } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Header borderType="shadow" title="Lazy Img" />
      <Layout.Body>
        <LazyImg
          style={{ marginBottom: '500px', display: 'block', width: '100%', }}
          src="https://carphoto.aotuzuche.com/2car/18/06/1001126/1530319772361_1.jpg?x-oss-process=image/resize,w_500"
        />
        <LazyImg
          style={{ marginBottom: '500px', display: 'block', width: '100%', }}
          src="https://carphoto.aotuzuche.com/2car/20/04/698352428/1588050928902_1.jpg?x-oss-process=image/resize,w_500"
        />
        <LazyImg
          style={{ marginBottom: '500px', display: 'block', width: '100%', }}
          src="https://carphoto.aotuzuche.com/2car/19/01/582653105/1548063173572_1.jpg?x-oss-process=image/resize,w_500"
        />
        <LazyImg
          style={{ marginBottom: '500px', display: 'block', width: '100%', }}
          src="https://carphoto.aotuzuche.com/2car/19/09/478828701/1591001769684_1.jpg?x-oss-process=image/resize,w_500"
        />
      </Layout.Body>
    </Layout>
  )
}

export default Demo
