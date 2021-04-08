import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTodo: null,
    todos: []
  },
  mutations: {
    setCurrentTodo(state, payload) {
      state.activeTodo = payload;
    },
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    setTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    getTodos(state) {
      axios
        .get("http://localhost:5000/todos/")
        .then(resp => state.commit("setTodos", resp.data));
    }
  },
  modules: {},
  getters: {
    getActiveTodo: state => state.activeTodo,
    getTodos: state => state.todos
  }
});
