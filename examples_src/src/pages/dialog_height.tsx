import * as React from 'react';
import { Button, Dialog, Layout } from '../auto-ui';

class Demo extends React.PureComponent {
  public state = { visible: false, height: 40 };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Dialog</Button>
          <Dialog visible={this.state.visible} height={this.state.height}>
            <p>
              当前高度为：
              {this.state.height}
            </p>
            <br />
            <Button onClick={this.onBtnClick}>关闭</Button>
          </Dialog>
        </Layout.Body>
      </Layout>
    );
  }

  private onBtnClick = () => {
    this.setState({
      visible: !this.state.visible,
      height: this.state.visible ? this.state.height : this.getNextHeight(),
    });
  }

  private getNextHeight = () => {
    return this.state.height < 90 ? this.state.height + 10 : 30;
  }
}

export default Demo;
