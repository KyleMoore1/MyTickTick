<template>
  <div>
    <h1>Todos</h1>
    <ul id="todos">
      <li v-for="todo in todos" :key="todo.title">
        <Todo v-bind:todo="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
export default {
  name: "TodoList",
  components: { Todo },
  data() {
    return {
      todos: [
        {
          id: 0,
          title: "title",
          due_date: "2020-03-20",
          priority: 0,
          description: "description",
          project: "project",
          isComplete: false
        },
        {
          id: 1,
          title: "title",
          due_date: "2020-03-20",
          priority: 0,
          project: "project",
          description: "description",
          isComplete: false
        },
        {
          id: 2,
          title: "title",
          due_date: "2020-03-20",
          priority: 0,
          project: "project",
          description: "description",
          isComplete: false
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
