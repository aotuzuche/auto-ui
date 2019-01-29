import * as React from 'react';
import { Cell, Layout, Spin } from '../aotuui';

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Body>
        <Cell>
          <Cell.Row>row 1</Cell.Row>
          <Cell.Row>row 2</Cell.Row>
          <Cell.Row>row 3</Cell.Row>
          <Cell.Row>row 4</Cell.Row>
          <Cell.Row>row ...</Cell.Row>
        </Cell>
        <br />
        <Spin text="加载中..." />
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
