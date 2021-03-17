<template>
  <div id = "container">
    <div id = "todo-input">
      <input type="text" placeholder="Add Task to Inbox. Press Enter to save.">
    </div>
  </div>
</template>

<script>
export default {
name: "NewTodoInput"
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