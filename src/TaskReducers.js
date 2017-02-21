import { CREATE_NEW_TASK, UPDATE_TASK_STATUS, DELETE_TASK } from './TaskActions';

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
        totalEffort: state.totalEffort + newTask.effort,
        listOfTasks: [...state.listOfTasks, newTask]
      };
    case UPDATE_TASK_STATUS:
      // clone list of listOfTasks
      let listOfTasks = [...state.listOfTasks];
      listOfTasks.map(task => {
        if(task.taskID == action.taskObj.taskID){
          task.status = true;
        }
        return task;
      });
      return {
        totalEffort: state.totalEffort,
        listOfTasks
      }
    case DELETE_TASK:
      let totalEffort = 0;
      let newListOfTasks = state.listOfTasks.filter(task => {
        if(task.taskID !== action.taskID){
          totalEffort = totalEffort + task.effort;
          return true;
        } else {
          return false;
        }
      });
      return {
        totalEffort: totalEffort,
        listOfTasks: newListOfTasks
      }
    default:
      return state;
  }
}
