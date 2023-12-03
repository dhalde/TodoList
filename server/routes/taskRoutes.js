const express = require('express');
const app = express();
const taskController = require('../controllers/taskController');

app.post('/create-task', taskController.createTask );
app.get('/read-Alltask', taskController.readAllTask );
// app.get('/read-Activetask', taskController.activetask );
// app.get('/read-Completedtask', taskController.completedtask );
app.put('/update-task/:_id', taskController.updateTask );
app.delete('/delete-task/:_id', taskController.deleteTask );

module.exports = app;