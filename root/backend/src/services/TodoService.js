const TodoRepository = require("../repository/TodoRepository");

class TodoService {
  constructor() {
    this.todoRepository = new TodoRepository();
  }
  async getAllTodos() {
    return this.todoRepository.findAllTodos();
  }

  async saveTodo(todo) {
    const newTodo = await this.todoRepository.saveTodo(todo);
    return newTodo;
  }
}

module.exports = TodoService;
