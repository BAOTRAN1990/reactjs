var TASKLIST = [
  {taskID: 1, name: 'Task 1', createdDate: '14/02/2017', effort: 10, status: 'Completed'},
  {taskID: 2, name: 'Task 2', createdDate: '14/02/2017', effort: 10, status: 'In Progress'}
];
var taskID = 2;

export function createNewTask(task) {
	taskID += 1;
	TASKLIST.push({
		taskID: taskID,
		name: task.name,
    createdDate: task.createdDate,
    effort: task.effort,
    status: task.status
	});
}

export default TASKLIST;
