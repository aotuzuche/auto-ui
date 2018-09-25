import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './style'
import Config from '../config'
import MobileConfig from '../mobile/config'
import cn from 'classnames'

const baseUrl = process.env.PACKAGE === 'production' ? '/auto-ui' : ''

class MDIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeUrl: '/mobile'
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const locationArray = nextProps.location.pathname.split('/')

    const page = locationArray[locationArray.length - 1]

    const pageConfig = MobileConfig.filter((v, i) => {
      if (v.path === '/mobile/' + page) {
        return true
      }
      return false
    })
    if (pageConfig.length && pageConfig[0].path !== prevState.iframeUrl) {
      return {
        iframeUrl: pageConfig[0].path
      }
    }

    if (!pageConfig.length && prevState.iframeUrl !== '/mobile') {
      return {
        iframeUrl: '/mobile'
      }
    }
    return null
  }

  render() {
    const pathname = this.props.location.pathname

    return (
      <div className="MDIndex">
        <div className="nav-box">
          <nav className="nav box">
            <h1 className="nav-logo">AUTO-UI</h1>
            <ul className="nav-link">
              <li>GITHUB</li>
            </ul>
          </nav>
        </div>
        <main className="main">
          <div className="box">
            <div className="sidebar">
              <ul>
                {Config.map((v, i) => {
                  if (v.isTitle) {
                    return (
                      <li key={i} className="link title">
                        <a>{v.name}</a>
                      </li>
                    )
                  }
                  const linkClass = cn('link', {
                    active: pathname === v.path
                  })
                  return (
                    <li key={i} className={linkClass}>
                      <Link to={v.path}>{v.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="content">
              <Switch>
                {Config.map((v, i) => {
                  if (v.isTitle) {
                    return false
                  }
                  return <Route key={i} path={v.path} component={v.component} />
                })}
              </Switch>
              <div className="simulator">
                <div className="simulator-header" />
                <iframe src={baseUrl + '/#' + this.state.iframeUrl} />
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default MDIndex
