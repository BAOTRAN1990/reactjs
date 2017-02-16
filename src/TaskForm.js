import React, { Component } from 'react'
import {render} from 'react-dom'
import { Field, reduxForm } from 'redux-form';

class TaskForm extends Component {

  render () {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="createdDate">Created Date</label>
          <Field name="createdDate" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="effort">Effort</label>
          <Field name="effort" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <Field name="status" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
		);
  }
}

export default TaskForm = reduxForm({
  form: 'task'
})(TaskForm);
