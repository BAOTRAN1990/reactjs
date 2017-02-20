import React, { Component } from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import {changeTaskStatus} from './TaskActions'

class TaskDetail extends Component {
  constructor(props){
    super(props);
    this.handleUpdateTaskStatus = this.handleUpdateTaskStatus.bind(this);
  }

  handleUpdateTaskStatus(){
    let taskObj = {};
    taskObj.taskID = this.props.routeParams.taskID;
    const actionObj = changeTaskStatus(taskObj);
    this.props.dispatch(actionObj);
    // navigate to home page after creating
    this.props.router.push('/');
  }

  render() {
    const {taskID} = this.props.routeParams;
    let selectedTask = {...(this.props.taskList.find(t => t.taskID == taskID))};
    // render update button
    let updateButton;
    if(selectedTask.status === false) {
      updateButton = <button onClick={this.handleUpdateTaskStatus}>Complete this task</button>;
    }
    selectedTask.status = selectedTask.status === false ? 'Incomplete' : 'Completed';
    return (
      <div>
        <h3>Here is task detail page: </h3>
        <h2>Task ID: {selectedTask.taskID}</h2>
        <h2>Task name: {selectedTask.name}</h2>
        <h2>Created date: {selectedTask.createdDate}</h2>
        <h2>Effort: {selectedTask.effort}</h2>
        <h2>Status: {selectedTask.status}</h2>
        {updateButton}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		taskList : state.taskReducers.listOfTasks
	}
}

const HomeContainer = withRouter(connect(mapStateToProps)(TaskDetail));

export default HomeContainer;
