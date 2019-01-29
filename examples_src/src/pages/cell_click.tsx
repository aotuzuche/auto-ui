import * as React from 'react';
import { Cell, Layout, Toast } from '../aotuui';

const Demo: React.FC<any> = () => {
  const onClick = (value: string) => {
    Toast('点击了：' + value);
  };

  return (
    <Layout>
      <Layout.Body>
        <Cell.Title text="统一点击事件" />
        <Cell onClick={onClick} arrow={true}>
          <Cell.Row value="1">cell 1</Cell.Row>
          <Cell.Row value="2">cell 2</Cell.Row>
          <Cell.Row value="3">cell 3</Cell.Row>
          <Cell.Row value="4">cell 4</Cell.Row>
        </Cell>
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
