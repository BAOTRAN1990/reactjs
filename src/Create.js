import React, { Component } from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux';

import createNewTaskAction from './CreateAction'

class Create extends Component{
  constructor() {
    super();
  }

  handlSaveTask() {
    // Get values from Input Form
	let newTaskObj = {};
	newTaskObj.name = this.refs.name.value;
	newTaskObj.createdDate = this.refs.name.createdDate;
	newTaskObj.effort = this.refs.name.effort;
	newTaskObj.status = this.refs.name.status;
    const actionObj = createNewTaskAction(newTaskObj);
    this.props.dispatch(actionObj);
    alert('Save completed!!!');
  }

  render () {
    return (
      <div>
        <h1>Create new task page:</h1>
        <span>Task Name: </span>
        <br />
        <input ref='name'/>
        <br />
        <br />
        <span>Created date: </span>
        <br />
        <input ref='createdDate'/>
        <br />
        <br />
        <span>Effort: </span>
        <br />
        <input ref='effort'/>
        <br />
        <br />
        <span>Status: </span>
        <br />
        <input ref='status'/>
        <br />
        <br />
        <button onClick={this.handlSaveTask} name='Save'> Save </button>
      </div>
		);
  }
}

const CreateContainer = connect()(Create);

export default CreateContainer;
