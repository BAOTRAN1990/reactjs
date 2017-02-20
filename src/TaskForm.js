import React, { Component } from 'react'
import {render} from 'react-dom'
import { Field, reduxForm } from 'redux-form';
import {TextField, Checkbox, DatePicker} from 'redux-form-material-ui'
import {FlatButton} from 'material-ui'

import validate from './TaskFormValidateReducer'

class TaskForm extends Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={TextField} hintText="Name" errorText="This field is required"/>
        <Field name="createdDate" component={DatePicker} hintText="Created Date" format={null} errorText="This field is required"/>
        <Field name="effort" component={TextField} hintText="Effort" errorText="This field is required and must be a number"/>
        <Field name="status" component={Checkbox} label="Completed"/>
        <FlatButton label="Save" type="submit" primary={true}/>
      </form>
		);
  }
}

export default TaskForm = reduxForm({
  form: 'taskFormSyncValidation',
  validate
})(TaskForm);
