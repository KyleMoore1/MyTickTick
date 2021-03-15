<template>
  <div id="todo" v-on:click="updateActiveTodo">
    <div style="float: left">
      <input type="checkbox" id="checkbox"/>
      <h3 id = "title">{{ todo.title }}</h3>
    </div>
    <div style="float: right">
      <p>{{ todo.project }}</p>
      <p>10:00am</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    updateActiveTodo() {
      this.$store.commit("setCurrentTodo", this.todo);
    }
  }
};
</script>

<style scoped>
#todo {
  white-space: nowrap;
  height: 40px;
  border-bottom: 1px solid rgba(0,0,0,.07);
}

#todo * {
  display: inline;
}

#checkbox {
  margin-right: 10px;
}

#title {
  font-weight: 400 !important;
  font-size: 16px !important;
}
</style>
