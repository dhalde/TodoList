const { Task } = require('../models/tasks');


const readAllTask = async (req, res) => {
    try {
        const allTask = await Task.find({});
        res.status(201).json(allTask);

    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const activetask = async (req, res) => {
    try {
        const incompleteTasks = await Task.find({ completed: false });
    
        res.status(200).json({message: "Active tasks", incompleteTasks});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
const completedtask = async (req, res) => {
    try {
        const completedTask = await Task.find({ completed: true });
    
        res.status(200).json({message: "Completed tasks", completedTask});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const createTask = async (req, res) => {

    try {
        const { task_name, completed } = req.body;

        const existingTask = await Task.findOne({ task_name, completed: false });

        if (existingTask) {
            return res.status(400).json({ error: 'Task with same task_name already exists' });
        }

        const newTaskData = { task_name, completed };


        const newTask = new Task(newTaskData);
        const savedTask = await newTask.save();

        res.status(201).json(savedTask);

    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateTask = async (req, res) => {
    try {
        const taskId = req.params._id;
        const { task_name, completed } = req.body;

        const existingTask = await Task.findById(taskId);

        if (!existingTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        existingTask.task_name = task_name ?? existingTask.task_name; 
        existingTask.completed = completed ?? existingTask.completed;

        // Save the updated task
        const updatedTask = await existingTask.save();
        res.status(201).json({message: "task successfully updated", updatedTask});

    } catch (error) {
        console.error('Error while updating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params._id;

        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
          return res.status(404).json({ error: 'Task not found' });
        }
    
        res.status(200).json({ message: 'Task deleted successfully', deletedTask });

    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

module.exports = { createTask, updateTask, readAllTask, deleteTask, activetask, completedtask };