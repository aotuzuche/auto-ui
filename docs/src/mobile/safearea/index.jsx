import React from 'react'

import { SafeArea } from 'auto-ui'

export default class SafeAreaIndex extends React.Component {
  render() {
    return (
      <div>
        安全区域顶部
        <SafeArea />
        安全区域底部
        <SafeArea />
      </div>
    )
  }
}
