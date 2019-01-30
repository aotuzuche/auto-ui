import * as React from 'react';
import { Button, Layout, Toast } from '../auto-ui';

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('我是一个轻提示');
  };

  const onClick2 = () => {
    Toast(
      '我是一个轻提示，而且文字内容有点多。我是一个轻提示，而且文字内容有点多。我是一个轻提示，而且文字内容有点多。',
    );
  };

  return (
    <Layout>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
        <br />
        <Button onClick={onClick2}>文字有点长时</Button>
      </Layout.Body>
    </Layout>
  );
};

export default Demo;
