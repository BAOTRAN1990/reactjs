import { combineReducers } from 'redux'

import CREATE_NEW_TASK from './CreateAction';

var taskID = 0;

function taskListReducer(state = TASKLIST, action) {
  switch (action.type) {
    case CREATE_NEW_TASK:
      // New ID
      taskID += 1;
      // New Task
      const newTask = {taskID: taskID, 
    		  			name: action.payload.taskObj.name, 
    		  			createdDate: action.payload.taskObj.createdDate, 
    		  			effort: action.payload.taskObj.effort, 
    		  			status: action.payload.taskObj.status};
      return {
        ...state,
        newTask
      }
    default:
      return state
  }
}

export default createStore(combineReducers({
  taskListReducer
});
