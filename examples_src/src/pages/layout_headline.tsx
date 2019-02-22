import * as React from 'react';
import { Layout } from '../auto-ui';

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Header
        title="标题与标题"
        onCloseClick={() => {}}
        borderType="shadow"
        headline={true}
        addonAfter={<p>更多</p>}
        addonBottom={<p>下方挂载</p>}
      />
      <Layout.Body>body</Layout.Body>
    </Layout>
  );
};

export default Demo;
