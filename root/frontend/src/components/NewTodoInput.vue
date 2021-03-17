<template>
  <div id = "container">
    <div id = "todo-input">
      <input v-model="inputText" type="text" v-on:keyup.enter="addTodo" placeholder="Add Task to Inbox. Press Enter to save.">
    </div>
  </div>
</template>

<script>
import Todo from "@/data/Todo";

export default {
  name: "NewTodoInput",
  data: () => ({
    inputText: ""
  }),
  methods: {
    addTodo() {
      const todo = new Todo("3", this.inputText, "5:00am", "0", "project")
      this.$store.commit("addTodo", todo)
      this.inputText = ""
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