import Vue from "vue";
import VueRouter from "vue-router";
import TodoListParent from "@/views/TodoListParent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:id",
    name: "TodoListParent",
    component:TodoListParent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
