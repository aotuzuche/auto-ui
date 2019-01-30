import * as React from 'react';
import { Cell, Layout } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], disabled: false };

  public render() {
    const reachObj = {
      disabled: this.state.disabled,
      content: '点击加载更多',
      handler: this.onLoadMore,
    };
    return (
      <Layout>
        <Layout.Header title="很长的列表" borderType="shadow" />
        <Layout.Body onReachBottom={reachObj}>
          <Cell>
            {this.state.list.map(i => (
              <Cell.Row key={i}>{i}</Cell.Row>
            ))}
          </Cell>
        </Layout.Body>
      </Layout>
    );
  }

  private onLoadMore = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newList: number[] = [...this.state.list];
        for (let i = 0; i < 10; i++) {
          newList.push(newList.length + 1);
        }
        this.setState({ list: newList }, resolve);
      }, 2000);
    });
  }
}

export default Demo;
