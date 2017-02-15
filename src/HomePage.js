import React, { Component } from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'

import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    const taskList = this.props.taskList;
    return (
      <div>
        <ul>
          taskList.map(task => <li key={task.taskID}><Link to={`/taskdetail/${task.taskID}`}>{task.name}</Link></li>)
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskListReducer
  }
}

const HomeContainer = connect()(HomePage);


export default HomeContainer;
