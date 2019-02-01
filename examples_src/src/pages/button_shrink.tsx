import * as React from 'react';
import { Button, Cell, Layout, Switch } from '../auto-ui';

class Demo extends React.PureComponent {
  public state = { shrink: false };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Cell>
            <Cell.Row title="设置shrink">
              <Switch active={this.state.shrink} onChange={this.onClick} style={{ marginLeft: 'auto' }} />
            </Cell.Row>
          </Cell>
          <br />
          <br />
          <Button shrink={this.state.shrink} onClick={this.onClick}>
            按钮
          </Button>
          <Button shrink={this.state.shrink} type="danger" onClick={this.onClick}>
            按钮
          </Button>
          <Button shrink={this.state.shrink} hollow={true} onClick={this.onClick}>
            按钮
          </Button>
          <br />
          <br />
          <Cell>
            <Cell.Row>
              <Button shrink={this.state.shrink} mini={true} onClick={this.onClick}>
                按钮
              </Button>
              <Button type="default" shrink={this.state.shrink} mini={true} onClick={this.onClick}>
                按钮
              </Button>
            </Cell.Row>
          </Cell>
        </Layout.Body>
      </Layout>
    );
  }

  private onClick = () => {
    this.setState({ shrink: !this.state.shrink });
  }
}

export default Demo;
