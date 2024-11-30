// Model for the Comments, Should have who made the comment and what task its assigned to and what time it was created
const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Many-to-One
    task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },       // Many-to-One
    createdAt: { type: Date, default: Date.now }
});

