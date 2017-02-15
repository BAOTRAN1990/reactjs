import React, { Component } from 'react'
import {render} from 'react-dom'

import { connect } from 'react-redux';

import { createNewTask } from './TaskList'

import createNewTaskAction from './CreateAction'

class Create extends Component{
  constructor() {
    super();

    // this.state = {
    //   name: '',
    //   createdDate: '',
    //   effort: '',
    //   status: ''
    // };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCreatedDate = this.handleChangeCreatedDate.bind(this);
    this.handleChangeEffort = this.handleChangeEffort.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handlSaveTask = this.handlSaveTask.bind(this);
  }

  handlSaveTask() {
    // Get values from Input Form
    const actionObj = createNewTaskAction('Task name 01', 'Task Description 01');
    this.props.dispatch(actionObj);
    alert('Save completed!!!');
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeCreatedDate(event) {
    this.setState({createdDate: event.target.value});
  }

  handleChangeEffort(event) {
    this.setState({effort: event.target.value});
  }

  handleChangeStatus(event) {
    this.setState({status: event.target.value});
  }

  render () {
    return (
      <div>
        <h1>Create new task page:</h1>
        <span>Task Name: </span>
        <br />
        <input value={this.state.name} onChange={this.handleChangeName} />
        <br />
        <br />
        <span>Created date: </span>
        <br />
        <input value={this.state.createdDate} onChange={this.handleChangeCreatedDate} />
        <br />
        <br />
        <span>Effort: </span>
        <br />
        <input value={this.state.effort} onChange={this.handleChangeEffort} />
        <br />
        <br />
        <span>Status: </span>
        <br />
        <input value={this.state.status} onChange={this.handleChangeStatus} />
        <br />
        <br />
        <button onClick={this.handlSaveTask} name='Save'> Save </button>
      </div>
		);
  }
}

const CreateContainer = connect()(Create);

export default CreateContainer;
