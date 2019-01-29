import * as React from 'react';
import { Cell, Layout } from '../aotuui';

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Body>
        <Cell>
          <Cell.Row arrow={true}>有箭头</Cell.Row>
          <Cell.Row>没有箭头</Cell.Row>
          <Cell.Row arrow={true}>有箭头</Cell.Row>
          <Cell.Row>没有箭头</Cell.Row>
        </Cell>
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
