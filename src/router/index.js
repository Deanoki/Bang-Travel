import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/LoginView.vue";
import Home from "@/views/HomeView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: () => import("@/views/RegisterView.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
