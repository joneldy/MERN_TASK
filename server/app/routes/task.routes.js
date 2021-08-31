

 module.exports = (app) => {
  const tasks = require('../controllers/tasks.controller.js')
  //Create new Task
  app.post('/tasks', tasks.validate('createTask'), tasks.create)

  //Retrive all Tasks
  app.get('/tasks', tasks.findAll)

  //Retrieve a single Task with taskId
  app.get('/tasks/:taskId', tasks.findOne)

  //Update a Task with taskId
  app.put('/tasks/:taskId', tasks.validate('createTask'), tasks.update)

  //Delete a Task with taskId
  app.delete('/tasks/:taskId', tasks.delete)
}