const TodoRepository = require("../repository/TodoRepository");

class TodoService {
  constructor() {
    this.todoRepository = new TodoRepository();
  }
  async getAllTodos() {
    return this.todoRepository.findAllTodos();
  }
}

module.exports = TodoService;
