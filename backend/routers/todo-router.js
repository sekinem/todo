const router = require('express').Router();

const todoService = require('../services').todoService;

router.get('/', (req, res) => {
  res.json(todoService.findAllTasks());
});

router.post('/', (req, res) => {
  const task = req.body;
  todoService.insertTask(task);
  res.status(201).json(null);
});

router.put('/', (req, res) => {
  const task = req.body;
  task.isCompleted = true;
  todoService.updateTask(task);
  res.status(200).json(null);
});

router.delete('/', (req, res) => {
  todoService.deleteTask(req.body.id);
  res.status(200).json(null);
});

module.exports = router;
