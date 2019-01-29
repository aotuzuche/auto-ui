import * as React from 'react';
import { Layout } from '../aotuui';

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Header>header</Layout.Header>
      <Layout.Body>body</Layout.Body>
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  );
};

export default Demo;
