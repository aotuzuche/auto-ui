import * as React from 'react';
import { NavBar } from '../auto-ui';

const Demo: React.FC<any> = () => {
  return <NavBar title="基本使用" leftBtn={true} rightBtn={true} />;
};

export default Demo;
