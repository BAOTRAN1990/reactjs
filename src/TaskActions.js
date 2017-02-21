export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';
export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export default function createNewTask(taskObj) {
  return {
    type : CREATE_NEW_TASK,
    taskObj
  }
}

export function changeTaskStatus(taskObj) {
  return {
    type : UPDATE_TASK_STATUS,
    taskObj
  }
}

export function deleteTask(taskID) {
  return {
    type : DELETE_TASK,
    taskID
  }
}
