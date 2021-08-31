const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const cors = require('cors')

// create express app
const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

require('./app/routes/task.routes.js')(app);
// listen for requests
app.listen(9000, () => {
  console.log('Server is listening on port 9000')
})