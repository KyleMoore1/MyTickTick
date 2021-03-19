<template>
  <div id = "container">
    <ActiveTodoDescription/>
    <p>{{activeTodo.description}}</p>
  </div>
</template>

<script>
import ActiveTodoDescription from "@/components/ActiveTodoTitle";
export default {
  name: "ActiveTodo",
  components: {ActiveTodoDescription},
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