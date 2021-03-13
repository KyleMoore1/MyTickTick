<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList";

export default {
  name: "MainView",
  components: {
    TodoList
  }
};
</script>
