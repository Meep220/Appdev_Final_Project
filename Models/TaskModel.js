const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Pending', 'Completed', 'Overdue'], default: 'Pending' },
    dueDate: { type: Date },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // One-to-One or One-to-Many
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },      // Optional: Belong to one Group
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] // One-to-Many
});
