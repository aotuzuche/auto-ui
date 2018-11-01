import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import md from '../md'
import mobile from '../mobile'

// 配置路由
const Routes = e => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/docs" component={md} />
        <Route path="/mobile" component={mobile} />
        <Redirect to="/docs/introduce" />
      </Switch>
    </HashRouter>
  )
}

export default Routes
