import React, { Component } from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TaskForm from './TaskForm'
import createNewTask from './CreateAction'

class TaskPage extends React.Component {

  handleSubmit(values) {
    console.log(this.props);
    // Get values from Input Form
	  let newTaskObj = {};
	  newTaskObj.name = values.name;
	  newTaskObj.createdDate = values.createdDate;
	  newTaskObj.effort = values.effort;
    newTaskObj.status = values.status;
    const actionObj = createNewTask(newTaskObj);
    this.props.dispatch(actionObj);
    // navigate to home page after creating
    this.props.router.push('/');
  }

  render() {
    return (
      <TaskForm onSubmit={this.handleSubmit.bind(this)}/>
    );
  }
}

const TaskPageContainer = withRouter(connect()(TaskPage));

export default TaskPageContainer;
