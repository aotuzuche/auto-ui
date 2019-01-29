import * as React from 'react';
import { Button, Dialog, Layout } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { visible: false };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Dialog</Button>
          <Dialog visible={this.state.visible}>
            <h1>标题</h1>
            <p>内容</p>
            <p>注意：dialog内的标签样式需要自己定义</p>
            <br />
            <Button onClick={this.onBtnClick}>关闭</Button>
          </Dialog>
        </Layout.Body>
      </Layout>
    );
  }

  private onBtnClick = () => {
    this.setState({ visible: !this.state.visible });
  }
}

export default Demo;
