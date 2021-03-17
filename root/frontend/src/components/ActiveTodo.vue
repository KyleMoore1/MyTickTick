<template>
  <div>
    <h1>{{activeTodo.title}}</h1>
    <p>{{activeTodo.description}}</p>
  </div>
</template>

<script>
export default {
  name: "ActiveTodo",
  computed: {
    activeTodo() {
      return this.$store.getters.getActiveTodo
    }
  }
}
</script>

<style scoped>

</style>