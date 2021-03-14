<template>
  <h1>{{activeTodo.id}}</h1>
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