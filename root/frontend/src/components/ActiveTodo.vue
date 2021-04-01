<template>
  <div id = "container">
    <ActiveTodoTitle/>
    <ActiveTodoDescription/>
  </div>
</template>

<script>
import ActiveTodoTitle from "@/components/ActiveTodoTitle";
import ActiveTodoDescription from "@/components/ActiveTodoDescription";

export default {
  name: "ActiveTodo",
  components: {ActiveTodoTitle, ActiveTodoDescription},
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