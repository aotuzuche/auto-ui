import { http } from 'auto-libs'
import * as React from 'react'
import { Card, Cell, Layout, Toast, Upload } from '../auto-ui'
class Demo extends React.PureComponent {
  state = {
    active: true,
    data: {},
    fileList: [],
    fileList1: [],
    fileList2: [],
    fileList3: [],
    fileInitialList: [],
  }

  async componentDidMount() {
    const ax = await http.request({
      url: '/apigateway/carDealer/scooter/image/authYongda',
      method: 'GET',
    }) // 获取 oss ticket

    this.setState({
      data: ax,
    })

    setTimeout(() => {
      this.setState({
        fileInitialList: [
          {
            done: true,
            progress: 100,
            uid: 'WechatIMG103-1724148387642-13',
            url:
              '//at-cpic-test.oss-cn-hangzhou.aliyuncs.com/image-yongda/20240820/WechatIMG103-1724148387642-13.jpeg',
          },
        ],
      })
    }, 2000)
  }

  render() {
    const { data, fileList, fileList1, fileList2, fileList3 } = this.state
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Cell.Title text="正常情况" />
          <Card>
            <Upload
              data={data}
              id="test"
              onError={e => Toast(e.message)}
              onSuccess={(fl, e) => {
                console.log({ e })
                this.setState({
                  fileList: [...fl],
                })
              }}
              fileList={fileList}
              initialFileList={this.state.fileInitialList}
            />
          </Card>

          <Cell.Title text="多张 5张" />
          <Card>
            <Upload
              data={data}
              id="test1"
              maxCount={5}
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList1: [...fl],
                })
              }}
              fileList={fileList1}
            />
          </Card>

          <Cell.Title text="多选 多张 5张" />
          <Card>
            <Upload
              data={data}
              id="test2"
              maxCount={5}
              multiple
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList2: [...fl],
                })
              }}
              fileList={fileList2}
            />
          </Card>

          <Cell.Title text="自定义fileName" />
          <Card>
            <Upload
              data={data}
              id="test3"
              maxCount={5}
              multiple
              filename="tttteeeesssstttt"
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList3: [...fl],
                })
              }}
              fileList={fileList3}
            />
          </Card>

          <Cell.Title text="disabled" />
          <Card>
            <Upload
              data={data}
              id="test4"
              maxCount={5}
              multiple
              disabled
              filename="tttteeeesssstttt"
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList3: [...fl],
                })
              }}
              fileList={fileList3}
            />
          </Card>
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
