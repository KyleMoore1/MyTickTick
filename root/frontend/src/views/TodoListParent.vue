<template>
  <v-row style="height:100%">
    <v-col id= "list">
      <TodoList/>
    </v-col>
    <v-col id= "active">
      <ActiveTodo />
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList";
import ActiveTodo from "@/components/ActiveTodo";

export default {
  name: "MainView",
  components: {
    ActiveTodo,
    TodoList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#list {
  border-right: 1px solid rgba(0,0,0,.07);
}

#active {
}
</style>
