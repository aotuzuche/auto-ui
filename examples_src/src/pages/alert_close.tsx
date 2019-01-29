import * as React from 'react';
import { Alert, Button, Layout } from '../aotuui';

const Demo: React.FC<any> = () => {
  const onClick = () => {
    const [close] = Alert('我会在2秒后关闭');
    setTimeout(close, 2000);
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
