import * as React from 'react';
import { ActionSheet, Button, Layout, Toast } from '../auto-ui';

class Demo extends React.PureComponent {
  public state = { visible: false };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onClick}>显示ActionSheet</Button>
          <ActionSheet
            title="请选择一项"
            onClick={this.onItemClick}
            visible={this.state.visible}
            items={[{ name: 'item 1', value: '1' }, { name: 'item 2', value: '2' }, { name: 'item 3', value: '3' }]}
          />
        </Layout.Body>
      </Layout>
    );
  }

  private onClick = () => {
    this.setState({ visible: !this.state.visible });
  }

  private onItemClick = (value: any) => {
    Toast(value);
    this.setState({ visible: false });
  }
}

export default Demo;
