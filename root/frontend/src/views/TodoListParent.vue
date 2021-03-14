<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col id = "list">
          <TodoList/>
        </v-col>
        <v-col id = "active">
          <ActiveTodo/>
        </v-col>
      </v-row>
    </v-container>

  </div>
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
  background-color: grey;
}

#active {
  background-color: beige;
}
</style>
