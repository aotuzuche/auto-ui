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
    name: 'Cell 单元格',
    path: '/mobile/cell',
    component: AsyncComponent(e => import('./cell'))
  },
  {
    name: 'Dialog 高级弹出框',
    path: '/mobile/dialog',
    component: AsyncComponent(e => import('./dialog'))
  },
  {
    name: 'Input 文本输入',
    path: '/mobile/input',
    component: AsyncComponent(e => import('./input'))
  },
  {
    name: 'Layout 布局',
    path: '/mobile/layout',
    component: AsyncComponent(e => import('./layout'))
  },
  {
    name: 'Loading 全局加载',
    path: '/mobile/loading',
    component: AsyncComponent(e => import('./loading'))
  },
  {
    name: 'NavBar 导航栏',
    path: '/mobile/navbar',
    component: AsyncComponent(e => import('./navbar'))
  },
  {
    name: 'Popup 弹出层',
    path: '/mobile/popup',
    component: AsyncComponent(e => import('./popup'))
  },
  {
    name: 'Radio 单选框',
    path: '/mobile/radio',
    component: AsyncComponent(e => import('./radio'))
  },
  {
    name: 'SafeArea 安全区域',
    path: '/mobile/safearea',
    component: AsyncComponent(e => import('./safearea'))
  },
  {
    name: 'Spin 加载',
    path: '/mobile/spin',
    component: AsyncComponent(e => import('./spin'))
  },
  {
    name: 'Switch 开关',
    path: '/mobile/switch',
    component: AsyncComponent(e => import('./switch'))
  },
  {
    name: 'Tabs 标签页',
    path: '/mobile/tabs',
    component: AsyncComponent(e => import('./tabs'))
  },
  {
    name: 'TimePicker 时间选择',
    path: '/mobile/timepicker',
    component: AsyncComponent(e => import('./timepicker'))
  },
  {
    name: 'Toast 轻提示',
    path: '/mobile/toast',
    component: AsyncComponent(e => import('./toast'))
  }
]

export default mobileConfig
