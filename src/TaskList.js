import React, { Component } from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton'

import {deleteTask} from './TaskActions'

class TaskList extends Component {
  constructor(props){
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }
  
  handleDeleteTask(taskID){
    const actionObj = deleteTask(taskID);
    this.props.dispatch(actionObj);
  }

  render() {
    const taskList = this.props.taskList;
    const taskListRender = taskList.map(function(task) { 
        if (task.status == true) {
          return <li key={task.taskID}><Link to={`/taskdetail/${task.taskID}`}>{task.name}</Link></li>;
        }
        else {
          return (
            <li key={task.taskID}>
                <Link to={`/taskdetail/${task.taskID}`}>{task.name}</Link>
                <IconButton onClick={() => this.handleDeleteTask(task.taskID)}><span className="material-icons">delete</span></IconButton>
            </li>
          );
        }
    }, this);
    return (
      <div>
        <ul>
          {taskListRender}
        </ul>
        <div>
          <h2>Total effort: {this.props.totalEffort}</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskReducers.listOfTasks,
    totalEffort: state.taskReducers.totalEffort
  }
}

const TaskListContainer = connect(mapStateToProps)(TaskList);


export default TaskListContainer;
