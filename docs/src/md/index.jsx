import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './style'
import Config from '../config'
import cn from 'classnames'
// import AsyncComponent from '../hoc/asyncComponent'

// import Routers from './routers'

class MDIndex extends React.Component {
  render() {
    const pathname = this.props.location.pathname

    console.log(this)
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
                <div className="simulator-header"></div>
                <iframe src="//m.aotuzuche.com/m/community/index"></iframe>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default MDIndex
