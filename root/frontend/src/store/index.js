import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTodo: null,
    todos: []
  },
  mutations: {
    setCurrentTodo(state, payload) {
      state.activeTodo = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getActiveTodo: state => state.activeTodo
  }
});
