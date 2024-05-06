import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/home", redirect: "/markdown" },
  { path: "/markdown", component: () => import("../pages/Markdown.vue") },
  { path: "/authorize", component: () => import("../pages/Authorize.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
