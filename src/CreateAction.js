import store from './TaskList'

export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';


export createNewTask(taskName, taskDescription) {
  return {
    type: CREATE_NEW_TASK,
    payload: {
      taskName: taskName,
      taskDesc: taskDescription
    }
  }
}
