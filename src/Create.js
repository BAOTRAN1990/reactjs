import React, { Component } from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux';

import createNewTask from './CreateAction'

class Create extends Component{
  constructor() {
    super();
    this.handlSaveTask = this.handlSaveTask.bind(this);
  }

  handlSaveTask() {
    // Get values from Input Form
	  let newTaskObj = {};
	  newTaskObj.name = this.refs.name.value;
	  newTaskObj.createdDate = this.refs.createdDate.value;
	  newTaskObj.effort = this.refs.effort.value;
    newTaskObj.status = this.refs.status.value;
    const actionObj = createNewTask(newTaskObj);
    this.props.dispatch(actionObj);
    alert('Save completed!!! Go back to homepage to see new task.');
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
