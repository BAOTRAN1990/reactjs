import React, { Component } from 'react'
import {render} from 'react-dom'
import { Field, reduxForm } from 'redux-form';
import {TextField, Checkbox, DatePicker} from 'redux-form-material-ui'

class TaskForm extends Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={TextField} hintText="Name"/>
        <Field name="createdDate" component={DatePicker} hintText="Created Date"/>
        <Field name="effort" component={TextField} hintText="Effort"/>
        <Field name="status" component={Checkbox} label="Completed"/>
        <button type="submit">Submit</button>
      </form>
		);
  }
}

export default TaskForm = reduxForm({
  form: 'task'
})(TaskForm);
