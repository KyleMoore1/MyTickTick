<template>
  <div id = "container">
    <ActiveTodoTitle/>
    <p>{{activeTodo.description}}</p>
  </div>
</template>

<script>
import ActiveTodoTitle from "@/components/ActiveTodoTitle";
export default {
  name: "ActiveTodo",
  components: {ActiveTodoTitle},
  computed: {
    activeTodo() {
      return this.$store.getters.getActiveTodo
    }
  },
  data: () => ({
    title: "",
    description: ""
  })
}
</script>

<style scoped>

#container {
  text-align: left;
}

</style>