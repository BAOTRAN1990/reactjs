import React, { Component } from 'react'
import {render} from 'react-dom'

import TASKLIST from './TaskList'

class TaskDetail extends Component {
  render() {
    const {taskID} = this.props.routeParams;
    const selectedTask = TASKLIST.find(t => t.taskID == taskID);

    return (
      <div>
        <h3>Here is task detail page: </h3>
        <h2>Task ID: {selectedTask.taskID}</h2>
        <h2>Task name: {selectedTask.name}</h2>
        <h2>Created date: {selectedTask.createdDate}</h2>
        <h2>Effort: {selectedTask.effort}</h2>
        <h2>Status: {selectedTask.status}</h2>
      </div>
    )
  }
}

export default TaskDetail;
