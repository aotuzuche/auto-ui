import cn from 'classnames'
import * as React from 'react'
import v from '../version.json'
import './aside.scss'

const Aside: React.FC<any> = props => {
  const componentList = [
    'Layout,布局',
    'Button,按钮',
    'Input,文本输入',
    'Card,卡片',
    'Cell,单元格',
    'Alert,提示框',
    'Message,消息框',
    'Dialog,对话框',
    'Popup,弹出层',
    'Radio,勾选框',
    'Switch,开关',
    'Toast,轻提示',
    'Loading,全局加载',
    'Spin,加载',
    'ActionSheet,动作框',
    'Tabs,标签页',
    'Space,空格占位',
    'AspectRatio,宽高比',
    'TimePicker,时间选择',
  ];

  const atComponentList = [
    'AtCalendar,日期选择',
    'AtNav,底部菜单',
    'AtCitySelector,城市选择器',
  ];

  const renderComponentMenu = () => {
    const current = props.location.pathname;
    return componentList.map(component => {
      const data = component.split(',');
      const link = `/${data[0].toLowerCase()}`;
      const onClick = () => {
        if (current !== link) {
          props.history.push(link);
        }
      };
      const css = cn('group-item', {
        active: current === link,
      });
      const item = (
        <li className={css}>
          <a href="javascript:;" onClick={onClick}>
            {data[0]}
            <span>{data[1]}</span>
          </a>
        </li>
      );
      return <React.Fragment key={component}>{item}</React.Fragment>;
    });
  };

  const renderAtComponentMenu = () => {
    const current = props.location.pathname;
    return atComponentList.map(component => {
      const data = component.split(',');
      const link = `/${data[0].toLowerCase()}`;
      const onClick = () => {
        if (current !== link) {
          props.history.push(link);
        }
      };
      const css = cn('group-item', {
        active: current === link,
      });
      const item = (
        <li className={css}>
          <a href="javascript:;" onClick={onClick}>
            {data[0]}
            <span>{data[1]}</span>
          </a>
        </li>
      );
      return <React.Fragment key={component}>{item}</React.Fragment>;
    });
  };

  return (
    <div className="web-aside">
      <h1>
        Auto UI<sup>V {v.version}</sup>
      </h1>
      <ul>
        <li>UI组件</li>
        {renderComponentMenu()}
      </ul>
      <ul>
        <li>业务组件</li>
        {renderAtComponentMenu()}
      </ul>
    </div>
  );
};

export default Aside;
