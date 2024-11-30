const mongoose = require('mongoose')
// Note we will be using mongoDB for the model and database so start learning
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true},
    email: {type: String, required: true, unique: true},
    password:{type : String, required: true},
    groups:[{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}],
    tasks:[{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
});

