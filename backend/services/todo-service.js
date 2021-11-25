const { tasks, sequence } = require('../models/todo-db');

function findAllTasks() {
  return tasks.find().sort((a, b) => a.id - b.id);
};

function insertTask(task) {
  const nextSeq = sequence.findOne({ key: 'seq'});
  task.id = nextSeq.value++;
  task.isCompleted = false;
  tasks.insert(task);
  sequence.update(nextSeq);
}

function updateTask(task) {
  const taskToUpdate = tasks.findOne({ id: task.id });
  taskToUpdate.title = task.title;
  taskToUpdate.isCompleted = task.isCompleted;
  tasks.update(taskToUpdate);
}

function deleteTask(taskId) {
  tasks.findAndRemove({ id: taskId });
}

module.exports = {
  findAllTasks,
  insertTask,
  updateTask,
  deleteTask,
}
