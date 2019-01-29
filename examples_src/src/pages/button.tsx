import * as React from 'react';
import { Button, Layout, Toast } from '../aotuui';

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('点击了按钮');
  };

  return (
    <Layout>
      <Layout.Body style={{ backgroundColor: '#fff' }}>
        <Button onClick={onClick}>按钮</Button>
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
