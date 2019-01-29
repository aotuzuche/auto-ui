import * as React from 'react';
import { Button, Layout, Popup } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { visible: false };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Popup</Button>
          <Popup visible={this.state.visible} onMaskClick={this.onBtnClick}>
            <p>点击外部的半透明层可以关闭</p>
          </Popup>
        </Layout.Body>
      </Layout>
    );
  }

  private onBtnClick = () => {
    this.setState({ visible: !this.state.visible });
  }
}

export default Demo;
