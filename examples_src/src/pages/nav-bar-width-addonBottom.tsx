import * as React from 'react';
import {NavBar} from '../auto-ui';

const Demo: React.FC<any> = () => {
  return (
    <NavBar
      leftBtn
      rightBtn="规则说明"
      mode="large"
      title='费用明细'
      addonBottom={
        <p>实际支付 <span style={{color: '#f00'}}>34元</span></p>
      }
    />
  );
};

export default Demo;

