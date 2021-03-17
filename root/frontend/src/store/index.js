import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTodo: null,
    todos: [
      {
        id: 0,
        title: "study for compilers",
        due_date: "2020-03-20",
        priority: 0,
        description: "description",
        project: "project",
        isComplete: false
      },
      {
        id: 1,
        title: "pay rent",
        due_date: "2020-03-20",
        priority: 0,
        project: "project",
        description: "description",
        isComplete: false
      },
      {
        id: 2,
        title: "do the thing",
        due_date: "2020-03-20",
        priority: 0,
        project: "project",
        description: "description",
        isComplete: false
      }
    ]
  },
  mutations: {
    setCurrentTodo(state, payload) {
      state.activeTodo = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getActiveTodo: state => state.activeTodo,
    getTodos: state => state.todos
  }
});
