const mongoose = require('mongoose');

// Task Schema
const taskSchema = new mongoose.Schema({
    task_name: {
        type: String,
        required: true, 
      },
      completed: {
        type: Boolean,
        default: false, 
      },

});


const Task = mongoose.model('Task', taskSchema);


module.exports = { Task };
