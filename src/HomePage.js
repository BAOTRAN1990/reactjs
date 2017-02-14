import React, { Component } from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'

import TASKLIST from './TaskList'

class HomePage extends Component {
  render() {
    var rows = [];
    TASKLIST.forEach(task => {
      rows.push(<li key={task.taskID}><Link to={`/taskdetail/${task.taskID}`}>{task.name}</Link></li>);
    });
    return (
      <div>
        <ul>{rows}</ul>
      </div>
    )
  }
}

export default HomePage;
