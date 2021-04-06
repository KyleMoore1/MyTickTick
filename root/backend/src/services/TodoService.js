const TodoRepository = require("../repository/TodoRepository");

class TodoService {
  constructor() {
    this.todoRepository = new TodoRepository();
  }
  async getAllTodos() {
    return this.todoRepository.findAllTodos();
  }

  async saveTodo(todo) {
    const savedTodo = await this.todoRepository.saveTodo(todo);
    return savedTodo;
  }

  async updateTodo(id, newTodo) {
    const updatedTodo = await this.todoRepository.updateTodo(id, newTodo);
    return updatedTodo;
  }
}

module.exports = TodoService;
