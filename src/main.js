import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, IndexLink } from 'react-router'

import TaskDetail from './TaskDetail'
import HomePage from './HomePage'
import Create from './Create'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={HomePage}/>
          <Route path='/taskdetail/:taskID' component={TaskDetail}/>
          <Route path='/create' component={Create}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home page</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/create'>Create new task</IndexLink>
  </div>
)

const Container = (props) => (
  <div>
    <Nav/>
    {props.children}
  </div>
)

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
