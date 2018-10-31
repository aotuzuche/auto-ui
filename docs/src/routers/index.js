import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import md from '../md'
import mobile from '../mobile'
import test from './test.js'

// 配置路由
const Routes = e => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/docs" component={md} />
        <Route path="/mobile" component={mobile} />
        <Route path="/test" component={test} />
        <Redirect to="/docs/introduce" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
