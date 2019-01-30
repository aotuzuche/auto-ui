import * as React from 'react';
import Aside from '../containers/aside';
import Loadable from 'react-loadable';
import Main from '../containers/main';
import { Redirect, Route, Router, Switch } from 'dva/router';

const Load = (loader: any) => {
  return Loadable({
    loader: () => loader,
    loading: () => <div />,
  });
};

const PageLayout = Load(import('../pages/layout'));
const PageButton = Load(import('../pages/button'));
const PageInput = Load(import('../pages/input'));
const PageCell = Load(import('../pages/cell'));
const PageAlert = Load(import('../pages/alert'));
const PageDialog = Load(import('../pages/dialog'));
const PagePopup = Load(import('../pages/popup'));
const PageRadio = Load(import('../pages/radio'));
const PageSwitch = Load(import('../pages/switch'));
const PageToast = Load(import('../pages/toast'));
const PageLoading = Load(import('../pages/loading'));
const PageSpin = Load(import('../pages/spin'));
const PageActionSheet = Load(import('../pages/actionsheet'));
const PageTabs = Load(import('../pages/tabs'));
const PageSpace = Load(import('../pages/space'));
const PageNavBar = Load(import('../pages/nav-bar'));

export default (history: any) => {
  return (
    <Router history={history}>
      <div>
        <Route component={Aside} />
        <Main>
          <Switch>
            <Route exact={true} path="/layout" component={PageLayout} />
            <Route exact={true} path="/button" component={PageButton} />
            <Route exact={true} path="/input" component={PageInput} />
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
            <Redirect from="*" to="/layout" />
            <Redirect from="*" to="/button" />
          </Switch>
        </Main>
      </div>
    </Router>
  );
};
