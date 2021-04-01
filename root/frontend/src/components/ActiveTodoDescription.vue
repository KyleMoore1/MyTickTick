<template>
  <div v-if="!this.editDesc">
    <p @click="toggleEditDesc">{{activeTodo.description}}</p>
  </div>
  <div v-else>
    <textarea type="text" @blur="updateTodoAndToggleEditDesc"  v-model="activeTodo.description" v-focus></textarea>
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
    editDesc: false
  }),
  methods: {
    toggleEditDesc() {
      this.editDesc = !this.editDesc
    },
    updateTodoAndToggleEditDesc() {
      //todo push to backend
      this.toggleEditDesc()
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