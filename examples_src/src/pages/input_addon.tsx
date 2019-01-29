import * as React from 'react';
import { Input, Layout } from '../aotuui';

const Demo: React.FC<any> = () => {
  const onChange = () => {};

  return (
    <Layout>
      <Layout.Body>
        <Input value="" onChange={onChange} addonBefore={<p>姓名</p>} />
        <br />
        <Input value="" onChange={onChange} addonBefore={<p>手机号</p>} />
        <br />
        <Input value="" onChange={onChange} addonAfter={<a>获取验证码</a>} />
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
