import { combineReducers } from 'redux'

import CREATE_NEW_TASK from './CreateAction';

var TASKLIST = [
  {taskID: 1, name: 'Task 1', createdDate: '14/02/2017', effort: 10, status: 'Completed'},
  {taskID: 2, name: 'Task 2', createdDate: '14/02/2017', effort: 10, status: 'In Progress'}
];
var taskID = 2;

function taskListReducer(state = TASKLIST, action) {
  switch (action.type) {
    case CREATE_NEW_TASK:
      // New ID
      taskID += 1;
      // New Task
      const newTask = {taskID: taskID, name: action.payload.taskName, createdDate: '14/02/2017', effort: 10, status: 'In Progress'};
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

// export function createNewTask(task) {
// 	taskID += 1;
// 	TASKLIST.push({
// 		taskID: taskID,
// 		name: task.name,
//     createdDate: task.createdDate,
//     effort: task.effort,
//     status: task.status
// 	});
// }

//export default TASKLIST;
