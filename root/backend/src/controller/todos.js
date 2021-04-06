const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const TodoService = require("../services/TodoService");

const todoService = new TodoService();

// Get all todos
router.get("/", async (req, res) => {
  try {
    const allTodos = await todoService.getAllTodos();
    res.json(allTodos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Save to-do
router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  try {
    const savedTodo = await todoService.saveTodo(todo);
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// one
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const newTodo = req.body;

  const updatedTodo = await todoService.updateTodo(id, newTodo);
  res.json(updatedTodo);
});

//deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
