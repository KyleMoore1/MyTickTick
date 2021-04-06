const Todo = require("../models/todo");

class TodoRepository {
  constructor() {}
  async findAllTodos() {
    const allTodos = await Todo.find();
    return allTodos;
  }

  async saveTodo(todo) {
    const newTodo = await todo.save();
    return newTodo;
  }
}

module.exports = TodoRepository;
