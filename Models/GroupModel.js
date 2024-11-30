// Shuld have the members, who created it, what time it was created and the name of the group.
const mongoose = requrie('mongoose')

const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Many-to-Many
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]    // One-to-Many
});
