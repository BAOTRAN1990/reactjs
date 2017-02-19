import React, { Component } from 'react'
import {render} from 'react-dom'

import { connect } from 'react-redux';

class TaskDetail extends Component {
  render() {
    const {taskID} = this.props.routeParams;
    let selectedTask = {...(this.props.taskList.find(t => t.taskID == taskID))};
    selectedTask.status = selectedTask.status === false ? 'Incomplete' : 'Completed';

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

const mapStateToProps = (state) => {
	return {
		taskList : state.taskReducers.listOfTasks
	}
}

const HomeContainer = connect(mapStateToProps)(TaskDetail);

export default HomeContainer;
