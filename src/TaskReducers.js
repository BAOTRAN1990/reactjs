import { CREATE_NEW_TASK } from './CreateAction';

var taskList = {
  totalEffort: 0,
  listOfTasks: [
    {
      taskID: 1,
      name: 'Default task',
      createdDate: '16/02/2017',
      effort: 0,
      status: false
    }
  ]
};

var taskID = 1;

export default function taskReducers(state = taskList, action) {
  switch (action.type) {
    case CREATE_NEW_TASK:
      // New ID
      taskID += 1;
      // New Task
      const newTask = {...action.taskObj, taskID: taskID};
      newTask.status = newTask.status === undefined ? false : true;
      return {
        totalEffort: state.totalEffort + parseInt(newTask.effort),
        listOfTasks: [...state.listOfTasks, newTask]
      };
    default:
      return state;
  }
}
