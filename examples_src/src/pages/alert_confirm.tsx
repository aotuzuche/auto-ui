import * as React from 'react';
import { Alert, Button, Layout, Toast } from '../aotuui';

const Demo: React.FC<any> = () => {
  const onClickA = () => {
    Alert({
      title: '我是一个提示框',
      desc: '描述文字描述文字描述文字',
      btns: [
        {
          name: '取消',
          type: 'primary',
          hollow: true,
          onClick: () => {
            Toast('点击了');
          },
        },
      ],
    });
  };

  const onClickB = () => {
    Alert({
      title: '我是一个提示框',
      desc: '描述文字描述文字描述文字',
      btns: [{ name: '取消', type: 'default' }, { name: '删除', type: 'danger' }],
    });
  };

  const onClickC = () => {
    Alert({
      title: '我是一个提示框',
      desc: '描述文字描述文字描述文字',
      btns: [{ name: '取消', type: 'default', mini: true }, { name: '完成', type: 'primary', mini: true }],
    });
  };

  return (
    <Layout>
      <Layout.Body>
        <Button onClick={onClickA}>单个按钮</Button>
        <br />
        <Button onClick={onClickB}>多个按钮</Button>
        <br />
        <Button onClick={onClickC}>小按钮</Button>
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
