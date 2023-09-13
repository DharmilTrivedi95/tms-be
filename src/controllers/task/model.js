const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskModelSchema = new Schema({
  title: { type: String },
  description: { type: String },
  type: { type: String },
  priority: { type: String },
  status: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const TaskModel = mongoose.model('Tasks', TaskModelSchema);

module.exports = TaskModel;
