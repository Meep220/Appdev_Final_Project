const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Get all tasks with optional filters
router.get('/', async (req, res) => {
  const filters = req.query;
  const tasks = await Task.find(filters);
  res.json(tasks);
});

// Get a single task
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) res.json(task);
  else res.status(404).send('Task not found');
});

// Create a task
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Update a task
router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (task) res.json(task);
  else res.status(404).send('Task not found');
});

// Add a comment to a task
router.post('/:id/comments', async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    task.comments.push(req.body);
    await task.save();
    res.json(task.comments[task.comments.length - 1]);
  } else res.status(404).send('Task not found');
});

module.exports = router;
