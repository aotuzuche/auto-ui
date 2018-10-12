import AsyncComponent from '../hoc/asyncComponent'
const mobileConfig = [
  {
    name: 'A 统计埋点',
    path: '/mobile/a',
    component: AsyncComponent(e => import('./a'))
  },
  {
    name: 'ActionSheet 动作面板',
    path: '/mobile/actionsheet',
    component: AsyncComponent(e => import('./actionsheet'))
  },
  {
    name: 'Alert 弹出框',
    path: '/mobile/alert',
    component: AsyncComponent(e => import('./alert'))
  },
  {
    name: 'Button 按钮',
    path: '/mobile/button',
    component: AsyncComponent(e => import('./button'))
  },
  {
    name: 'Cell 组件',
    path: '/mobile/cell',
    component: AsyncComponent(e => import('./cell'))
  },
  {
    name: 'Dialog 组件',
    path: '/mobile/dialog',
    component: AsyncComponent(e => import('./dialog'))
  },
  {
    name: 'Input 组件',
    path: '/mobile/input',
    component: AsyncComponent(e => import('./input'))
  },
  {
    name: 'Layout 组件',
    path: '/mobile/layout',
    component: AsyncComponent(e => import('./layout'))
  },
  {
    name: 'Loading 组件',
    path: '/mobile/loading',
    component: AsyncComponent(e => import('./loading'))
  },
  {
    name: 'Modal 组件',
    path: '/mobile/modal',
    component: AsyncComponent(e => import('./modal'))
  },
  {
    name: 'NavBar 组件',
    path: '/mobile/navbar',
    component: AsyncComponent(e => import('./navbar'))
  },
  {
    name: 'Popup 组件',
    path: '/mobile/popup',
    component: AsyncComponent(e => import('./popup'))
  },
  {
    name: 'Radio 组件',
    path: '/mobile/radio',
    component: AsyncComponent(e => import('./radio'))
  },
  {
    name: 'Spin 组件',
    path: '/mobile/spin',
    component: AsyncComponent(e => import('./spin'))
  },
  {
    name: 'Switch 组件',
    path: '/mobile/switch',
    component: AsyncComponent(e => import('./switch'))
  },
  {
    name: 'Tabs 组件',
    path: '/mobile/tabs',
    component: AsyncComponent(e => import('./tabs'))
  },
  {
    name: 'TimePicker 组件',
    path: '/mobile/timepicker',
    component: AsyncComponent(e => import('./timepicker'))
  },
  {
    name: 'Toast 组件',
    path: '/mobile/toast',
    component: AsyncComponent(e => import('./toast'))
  }
]

export default mobileConfig
