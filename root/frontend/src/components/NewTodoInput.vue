<template>
  <div id = "container">
    <div id = "todo-input">
      <input v-model="todo.title" type="text" v-on:keyup.enter="addTodo" placeholder="Add Task to Inbox. Press Enter to save.">
    </div>
  </div>
</template>

<script>

export default {
  name: "NewTodoInput",
  data: () => ({
    todo: {
      title: "",
      due_date: "2021-03-05T00:00:00.000+00:00",
      project: "project",
      priority: "0",
      description: ""
    }
  }),
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.todo).then(
          () => {this.todo.title = ""}
      )
    }
  }
}

</script>

<style scoped>

#container {
  margin: 12px 28px 20px;
}

#todo-input {
  background-color: rgba(44, 66, 118, 0.06);
  margin: auto;
  height: 40px;
}

input {
  width: 100%;
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>