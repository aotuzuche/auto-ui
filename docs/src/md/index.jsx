import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './style'
import Config from '../config'
import AsyncComponent from '../hoc/asyncComponent'

// import Routers from './routers'

class MDIndex extends React.Component {
  render() {
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
        <main>
          <div className="box">
            <div className="sidebar">
              <ul>
                {Config.map((v, i) => {
                  return (
                    <li key={i}>
                      <Link to={v.path}>{v.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <Switch>
              {Config.map((v, i) => {
                console.log(v)
                return (
                  <Route
                    key={i}
                    path={v.path}
                    component={AsyncComponent(e => import('src/md/quick-start.md'))}
                  />
                )
              })}
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}

export default MDIndex
