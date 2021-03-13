<template>
  <div id="todo" v-on:click="updateActiveTodo">
    <input type="checkbox" id="checkbox" />
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.project }}</p>
    <p>10:00am</p>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    updateActiveTodo() {
      this.$router.push('/' + this.todo.id)
    }
  }
};
</script>

<style scoped>
#todo {
  white-space: nowrap;
}

#todo * {
  display: inline;
}

#checkbox {
  padding-right: 20px;
}
</style>
