<template>
<div id = "todo">
  <input type="checkbox" id="checkbox">
  <h3>{{todo.title}}</h3>
  <p>{{todo.project}}</p>
  <p>10:00am</p>
</div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"]
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