import * as React from 'react';
import { Button, Cell, Layout, Space, Toast } from '../auto-ui';

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('点击了按钮');
  };

  return (
    <Layout>
      <Layout.Body>
        <Cell>
          <Cell.Row>
            <Button mini={true} onClick={onClick}>
              按钮
            </Button>
            <Space size={2} />
            <Button type="danger" mini={true} onClick={onClick}>
              按钮
            </Button>
            <Space size={2} />
            <Button type="default" mini={true} onClick={onClick}>
              按钮
            </Button>
          </Cell.Row>
          <Cell.Row>
            <Button hollow={true} mini={true} onClick={onClick}>
              按钮
            </Button>
            <Space size={2} />
            <Button hollow={true} type="danger" mini={true} onClick={onClick}>
              按钮
            </Button>
            <Space size={2} />
            <Button hollow={true} type="default" mini={true} onClick={onClick}>
              按钮
            </Button>
          </Cell.Row>
        </Cell>
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
