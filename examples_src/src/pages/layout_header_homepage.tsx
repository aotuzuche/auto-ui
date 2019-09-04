import * as React from 'react';
import { Layout, Toast } from '../auto-ui';

const Demo: React.FC<any> = () => {
  const onHomepageButtonClick = () => {
    Toast('回首页');
  };

  return (
    <Layout>
      <Layout.Header
        title="标题"
        borderType="shadow"
        homepageButton={true}
        onHomepageButtonClick={onHomepageButtonClick}
      />
      <Layout.Body>请点击右上角的图标<br />若没有自定义onHomepageButtonClick，则跳转到当前域名的/m/index页面</Layout.Body>
    </Layout>
  );
};

export default Demo;
