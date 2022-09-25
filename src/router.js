import { createWebHistory, createRouter } from "vue-router";
import Library from './components/Library.vue';
import Login from './components/Login.vue';

const routes =  [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;