import { Route, Switch } from 'react-router-dom'
import React from 'react'

import QuickStart from './quick-start'
import ChangeLog from '../../../CHANGELOG'

const Routes = e => {
  return (
    <Switch>
      <Route path="/docs/quickstart" component={QuickStart} />
      <Route path="/docs/changelog" component={ChangeLog} />
    </Switch>
  )
}

export default Routes
