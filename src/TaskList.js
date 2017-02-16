import React, { Component } from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'

import { connect } from 'react-redux';

class TaskList extends Component {
  render() {
    const taskList = this.props.taskList;
    const taskListRender = taskList.map(task => <li key={task.taskID}><Link to={`/taskdetail/${task.taskID}`}>{task.name}</Link></li>)
    return (
      <div>
        <ul>
          {taskListRender}
        </ul>
        <div>
          <h2>Total effort: {this.props.totalEffort}</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskReducers.listOfTasks,
    totalEffort: state.taskReducers.totalEffort
  }
}

const TaskListContainer = connect(mapStateToProps)(TaskList);


export default TaskListContainer;
