export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';


export default function createNewTask(taskObj) {
  return {
    type : CREATE_NEW_TASK,
    taskObj
  }
};
