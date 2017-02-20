export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';
export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';

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
