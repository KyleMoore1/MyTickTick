const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  project: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model("Todo", todoSchema);
