const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  title: String,
  description: String,
  priority: Number,
  completed: Boolean
}, {
  timestamps: true
})

TaskSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TaskSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model("Tasks", TaskSchema)