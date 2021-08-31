const Task = require('../models/task.model.js');
const { body, validationResult } = require('express-validator');

// Create and Save a new Task
exports.create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(),  success:false });
  }
  // Create a Task
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    completed: req.body.completed,
  })

  task.save()
  .then(data => {
    res.send({ data: data, success: true})
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured while creating the task.",
      success:false
    })
  })
};

// Retrieve and return all tasks from the database.
exports.findAll = (req, res) => {
  Task.find()
  .then(task => {
    res.send({ data: task, success: true})
  }).catch( err => {
    res.status(500).send({
      message: err.message || 'Some error occured while retrieving tasks',
      success: false
    })
  })
};

// Find a single task with a taskId
exports.findOne = (req, res) => {
  Task.findById(req.params.taskId)
  .then( task => {
    if (!task) {
      return res.status(404).send({
        message: "Task not found with id " + req.params.taskId,
        success: false
      })
    }
    res.send(task)
  }).catch( err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Task not found with id " + req.params.taskId,
        success: false
      })
    }

    return res.status(500).send({
      message: "Error retrieving task with id " + req.params.taskId,
      success: false
    })
  })
};

// Update a task identified by the taskId in the request
exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(),  success:false });
  }

 Task.findByIdAndUpdate(req.params.taskId, {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    completed: req.body.completed,
 }, { new: true })
 .then( task => {
   if(!task) {
     return res.status(404).send({
       message: "Task not found with id " + req.params.taskId,
       success: false
     })
   }
   res.send({ data: task, success: true});
 }).catch( err => {
   if(err.kind === 'ObjectId') {
     return res.status(404).send({
       message: "Task not found with id " + req.params.taskId,
       success:false
     })
   }
   return res.status(500).send({
     message: "Error updating task with id " + req.params.taskId,
     success:false
   })
 })
};

// Delete a task with the specified taskId in the request
exports.delete = (req, res) => {
  Task.findByIdAndRemove(req.params.taskId)
  .then(task => {
    if (!task) {
      return res.status(400).send({
        message: "Task not foun with id " + req.params.taskId,
        success:false
      })
    }
    res.send({ message: "Task deleted successfully",success: true })
  }).catch( err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Task not found with id " + req.params.taskId,
        success:false
      })
    }

    return res.status(500).send({
      message: "Could not delete task with id " + req.params.taskId,
      success:false
    })
  })
};


exports.validate = (method) => {
  switch (method) {
    case 'createTask': {
     return [ 
        body('title').exists().withMessage('title is required'),
        body('description').exists().withMessage('description is required'),
        body('priority').exists().withMessage('priority is required').isInt().withMessage('priority should be a number'),
        body('completed').exists().withMessage('completed is required'),
       ]   
    }
  }
}

