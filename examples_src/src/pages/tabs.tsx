import * as React from 'react';
import { Layout, Tabs } from '../auto-ui';

class Demo extends React.PureComponent {
  public state = { active: 1 };

  public render() {
    return (
      <Layout>
        <Tabs active={this.state.active} onClick={this.onClick}>
          <Tabs.Item value={1}>标签一</Tabs.Item>
          <Tabs.Item value={2}>标签二</Tabs.Item>
          <Tabs.Item value={3}>标签三</Tabs.Item>
        </Tabs>
        <Layout.Body>
          {this.state.active === 1 && <p>content of Tab 1</p>}
          {this.state.active === 2 && <p>content of Tab 2</p>}
          {this.state.active === 3 && <p>content of Tab 3</p>}
        </Layout.Body>
      </Layout>
    );
  }

  private onClick = (value: any) => {
    this.setState({
      active: value,
    });
  }
}

export default Demo;
