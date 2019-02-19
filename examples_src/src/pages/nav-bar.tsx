import * as React from 'react';
import { NavBar } from '../auto-ui';

const Demo: React.FC<any> = () => {
  return <NavBar title="基本使用" dark leftBtn={true} rightBtn='查看规则' />;
};

export default Demo;
