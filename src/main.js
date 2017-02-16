import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, IndexLink } from 'react-router'
import { Provider } from 'react-redux'

import TaskDetail from './TaskDetail'
import TaskList from './TaskList'
import TaskPage from './TaskPage'
import store from './TaskStore'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={TaskList}/>
            <Route path='/taskdetail/:taskID' component={TaskDetail}/>
            <Route path='/create' component={TaskPage}/>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
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
