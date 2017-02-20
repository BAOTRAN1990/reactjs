import React, { Component } from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TaskForm from './TaskForm'
import createNewTask from './TaskActions'

class TaskPage extends React.Component {

  handleSubmit(values) {
    // Get values from Input Form
	  let newTaskObj = {};
	  newTaskObj.name = values.name;
    // handle date format
    let createdDate = new Date(values.createdDate);
	  newTaskObj.createdDate = (createdDate.getDate() + '/' + (createdDate.getMonth() + 1) + '/' + createdDate.getFullYear());
    
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
