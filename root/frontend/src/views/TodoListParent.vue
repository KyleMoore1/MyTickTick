<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col id = "list">
          <TodoList/>
        </v-col>
        <v-col id = "active">
          <h1>active thing</h1>
          <h2>{{$route.params.id}}</h2>
        </v-col>
      </v-row>
    </v-container>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#list {
  background-color: grey;
}

#active {
  background-color: beige;
}
</style>
