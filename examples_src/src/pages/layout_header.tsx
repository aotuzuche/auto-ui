import * as React from 'react';
import { Layout } from '../auto-ui';

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Header
        addonBefore={<a href="#">左侧挂载</a>}
        title="标题"
        onBackClick={() => {}}
        onCloseClick={() => {}}
        borderType="shadow"
        addonAfter={<a href="#">右侧挂载</a>}
        homepageButton={true}
        addonBottom={<p>下方挂载</p>}
      />
      <Layout.Body>body</Layout.Body>
    </Layout>
  );
};

export default Demo;
