export default class Todo {
  constructor(id, title, due_date, priority, project) {
    this.id = id;
    this.title = title;
    this.due_date = due_date;
    this.priority = priority;
    this.project = project;
  }
}
