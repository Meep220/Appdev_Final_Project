const express = require('express');
const Comment = require('../models/Comment');
const Task = require('../models/Task');

const router = express.Router();

// Get all comments for a task
router.get('/:taskId', async (req, res) => {
  const comments = await Comment.find({ taskId: req.params.taskId });
  res.json(comments);
});

// Add a comment to a task
router.post('/:taskId', async (req, res) => {
  const { content, author } = req.body;
  const taskId = req.params.taskId;

  try {
    const comment = new Comment({ content, author, taskId });
    await comment.save();

    // Update task to include the comment reference
    const task = await Task.findById(taskId);
    task.comments.push(comment._id);
    await task.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add comment' });
  }
});

// Delete a comment
router.delete('/:commentId', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.commentId);

    // Remove reference from the task
    await Task.updateOne({ comments: comment._id }, { $pull: { comments: comment._id } });

    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete comment' });
  }
});

module.exports = router;
