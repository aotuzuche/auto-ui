import * as React from 'react'
import { Layout, Tabs } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { active: 3 }

  oo: any

  constructor(props: any) {
    super(props)

    this.oo = React.createRef()
  }

  componentDidMount() {}

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Tabs active={this.state.active} onClick={this.onClick} ref={this.oo} shrink={false}>
          <Tabs.Item value={1}>标签一</Tabs.Item>
          <Tabs.Item value={2}>标签二</Tabs.Item>
          <Tabs.Item value={3}>标签三</Tabs.Item>
          <Tabs.Item value={4}>标签三</Tabs.Item>
          <Tabs.Item value={5}>标签三</Tabs.Item>
          <Tabs.Item value={6}>标签三</Tabs.Item>
          <Tabs.Item value={7}>标签三</Tabs.Item>
        </Tabs>
        <Layout.Body>
          {this.state.active === 1 && <p>content of Tab 1</p>}
          {this.state.active === 2 && <p>content of Tab 2</p>}
          {this.state.active === 3 && <p>content of Tab 3</p>}
        </Layout.Body>
      </Layout>
    )
  }

  private onClick = (value: any) => {
    this.setState({
      active: value,
    })
  }
}

export default Demo
