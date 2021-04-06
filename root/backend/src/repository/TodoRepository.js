const Todo = require("../models/todo");

class TodoRepository {
  constructor() {}
  async findAllTodos() {
    const allTodos = await Todo.find();
    return allTodos;
  }
}

module.exports = TodoRepository;
