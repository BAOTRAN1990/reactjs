import { CREATE_NEW_TASK } from './CreateAction';

var taskList = [
  {
    taskID: 1,
    name: 'Default task',
    createdDate: '16/02/2017',
    effort: 0,
    status: 'Not start'
  }
];

var taskID = 1;

export default function taskReducers(state = taskList, action) {
  switch (action.type) {
    case CREATE_NEW_TASK:
      // New ID
      taskID += 1;
      // New Task
      const newTask = {taskID: taskID, name: action.taskObj.name, createdDate: action.taskObj.createdDate, effort: action.taskObj.effort, status: action.taskObj.status};
      return [...state, newTask];
    default:
      return state;
  }
}
