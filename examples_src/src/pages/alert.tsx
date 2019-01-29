import * as React from 'react';
import { Alert, Button, Layout } from '../aotuui';

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Alert('我是一个提示框');
  };

  return (
    <Layout>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
