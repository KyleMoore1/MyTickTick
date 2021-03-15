<template>
  <div>
    <h1>Todos</h1>
    <ul id="todos">
      <li v-for="todo in todos" :key="todo.id" :class="{activeTodo: ifIsActiveTodo(todo.id)}">
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
  },
  methods: {
    ifIsActiveTodo(id) {
      const activeTodo = this.$store.getters.getActiveTodo
      return activeTodo.id == id
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
}

li {
  transition: background-color 0.1s linear;
}

li:hover {
  background-color: rgba(75,111,222,0.08);
}

.activeTodo {
 background-color: rgba(75,111,222,0.12);
}
</style>
