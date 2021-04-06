const Todo = require("../models/todo");

class TodoRepository {
  constructor() {}
  async findAllTodos() {
    const allTodos = await Todo.find();
    return allTodos;
  }

  async saveTodo(todo) {
    const savedTodo = await todo.save();
    return savedTodo;
  }

  async updateTodo(id, newTodo) {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { $set: newTodo },
      { new: true }
    );
    return updatedTodo;
  }
}

module.exports = TodoRepository;
