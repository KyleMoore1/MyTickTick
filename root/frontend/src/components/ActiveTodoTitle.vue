<template>
  <div v-if="!this.editTitle">
    <h1 @click="toggleEditTitle">{{activeTodo.title}}</h1>
  </div>
  <div v-else>
    <input type="text" @blur="updateTodoAndToggleEdit"  v-model="activeTodo.title" v-focus>
  </div>
</template>

<script>
export default {
  name: "ActiveTodoTitle",
  computed: {
    activeTodo() {
      return this.$store.getters.getActiveTodo
    }
  },
  data: () => ({
    editTitle: false
  }),
  methods: {
    toggleEditTitle() {
      this.editTitle = !this.editTitle
    },
    updateTodoAndToggleEdit() {
      //todo push to backend
      this.toggleEditTitle()
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }

}

</script>

<style scoped>


</style>