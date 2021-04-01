const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

//getting all
router.get("/", async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.json(allTodos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//adding one
router.post("/", async (req, res) => {
  const body = req.body;
  const todo = new Todo({
    title: body.title,
    due_date: body.due_date,
    priority: body.priority,
    description: body.description,
    project: body.project,
    isComplete: body.isComplete
  });

  try {
    const newTodo = await todo.save();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//updating one
router.put("/:id", (req, res) => {});

//deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
