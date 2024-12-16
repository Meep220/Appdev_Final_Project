const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Pending', 'Completed', 'Overdue'], default: 'Pending' },
    dueDate: { type: Date, required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // One-to-One or One-to-Many
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },      // Optional: Belong to one Group
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] // One-to-Many
});
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Overdue', 'Completed'] },
  assignee: String,
  comments: [
    {
      content: String,
      author: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Task', taskSchema);
