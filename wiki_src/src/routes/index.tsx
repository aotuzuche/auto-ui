import { Redirect, Route, Router, Switch } from 'dva/router'
import * as React from 'react'
import Aside from '../containers/aside'
import Main from '../containers/main'

const PageLayout = React.lazy(() => import('../pages/layout'));
const PageButton = React.lazy(() => import('../pages/button'));
const PageInput = React.lazy(() => import('../pages/input'));
const PageCard = React.lazy(() => import('../pages/card'));
const PageCell = React.lazy(() => import('../pages/cell'));
const PageAlert = React.lazy(() => import('../pages/alert'));
const PageDialog = React.lazy(() => import('../pages/dialog'));
const PagePopup = React.lazy(() => import('../pages/popup'));
const PageRadio = React.lazy(() => import('../pages/radio'));
const PageSwitch = React.lazy(() => import('../pages/switch'));
const PageToast = React.lazy(() => import('../pages/toast'));
const PageLoading = React.lazy(() => import('../pages/loading'));
const PageSpin = React.lazy(() => import('../pages/spin'));
const PageActionSheet = React.lazy(() => import('../pages/action-sheet'));
const PageTabs = React.lazy(() => import('../pages/tabs'));
const PageSpace = React.lazy(() => import('../pages/space'));
const PageNavBar = React.lazy(() => import('../pages/nav-bar'));
const PageTimePicker = React.lazy(() => import('../pages/time-picker'));

export default (history: any) => {
  return (
    <Router history={history}>
      <React.Suspense fallback={() => <div />}>
        <Route component={Aside} />
        <Main>
          <Switch>
            <Route exact={true} path="/layout" component={PageLayout} />
            <Route exact={true} path="/button" component={PageButton} />
            <Route exact={true} path="/input" component={PageInput} />
            <Route exact={true} path="/card" component={PageCard} />
            <Route exact={true} path="/cell" component={PageCell} />
            <Route exact={true} path="/alert" component={PageAlert} />
            <Route exact={true} path="/dialog" component={PageDialog} />
            <Route exact={true} path="/popup" component={PagePopup} />
            <Route exact={true} path="/radio" component={PageRadio} />
            <Route exact={true} path="/switch" component={PageSwitch} />
            <Route exact={true} path="/toast" component={PageToast} />
            <Route exact={true} path="/loading" component={PageLoading} />
            <Route exact={true} path="/spin" component={PageSpin} />
            <Route exact={true} path="/actionsheet" component={PageActionSheet} />
            <Route exact={true} path="/tabs" component={PageTabs} />
            <Route exact={true} path="/space" component={PageSpace} />
            <Route exact={true} path="/navbar" component={PageNavBar} />
            <Route exact={true} path="/timepicker" component={PageTimePicker} />
            <Redirect from="*" to="/layout" />
            <Redirect from="*" to="/button" />
          </Switch>
        </Main>
      </React.Suspense>
    </Router>
  );
};
