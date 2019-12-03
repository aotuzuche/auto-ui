import * as React from 'react'
import { Layout, Toast } from '../auto-ui'
import ContentLoader from 'react-content-loader'

const SkeletonOrderItem = () => (
  <ContentLoader height={90} width={375} speed={1} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
    <rect x="0" y="0" rx="4" ry="4" width="200" height="6" />
    <rect x="0" y="25" rx="4" ry="4" width="240" height="6" />
    <rect x="0" y="60" rx="3" ry="3" width="180" height="6" />
    <rect x="280" y="0" rx="4" ry="4" width="95" height="70" />
  </ContentLoader>
)

const Demo: React.FC<any> = () => {
  const [skeleton, setSkeleton] = React.useState(true)

  setTimeout(() => {
    setSkeleton(false)
  }, 2000)

  return (
    <Layout>
      <Layout.Header title="加载中..." borderType="shadow" />
      <Layout.Body
        loading={skeleton}
        onSkeletonFinish={() => Toast('骨架屏消失')}
        skeleton={<SkeletonOrderItem />}
        skeletonRepeat={20}
      >
        body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>
        body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>body
        <div style={{ background: '#f00', width: '200px', height: '200px' }}></div>
      </Layout.Body>
    </Layout>
    // <div
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     overflow: 'auto',
    //     WebkitOverflowScrolling: 'touch',
    //   }}
    //   onScroll={() => {}}
    //   onTouchStart={() => {}}
    // >
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    //   测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多测试环境奥术大师多
    // </div>
  )
}

export default Demo
