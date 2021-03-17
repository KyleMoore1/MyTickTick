<template>
  <div id="todo" v-on:click="updateActiveTodo">
    <div>
      <input type="checkbox" id="checkbox"/>
      <h3 id = "title">{{ todo.title }}</h3>
    </div>
    <div>
      <p id="project">{{ todo.project }}</p>
      <p id="date">10:00am</p>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 12px;
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

#date {
  margin-left: 5px;
  color: #4b6fde;
}

#project {
  color: rgba(0,0,0,.36);
  font-size: 12px;
}
</style>
