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
  computed: {
    todos() {
      return this.$store.getters.getTodos
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
