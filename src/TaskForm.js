import React, { Component } from 'react'
import {render} from 'react-dom'
import { Field, reduxForm } from 'redux-form';
import {TextField, Checkbox, DatePicker} from 'redux-form-material-ui'
import {FlatButton} from 'material-ui'

class TaskForm extends Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={TextField} hintText="Name"/>
        <Field name="createdDate" component={DatePicker} hintText="Created Date" format={null}/>
        <Field name="effort" component={TextField} hintText="Effort"/>
        <Field name="status" component={Checkbox} label="Completed"/>
        <FlatButton label="Save" type="submit" primary={true}/>
      </form>
		);
  }
}

export default TaskForm = reduxForm({
  form: 'task'
})(TaskForm);
