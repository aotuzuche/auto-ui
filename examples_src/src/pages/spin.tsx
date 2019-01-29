import * as React from 'react';
import { Layout, Spin } from '../aotuui';

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Body>
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
        <br />
        <Spin />
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
