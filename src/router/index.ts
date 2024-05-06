import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../pages/Markdown.vue") },
  { path: "/markdown", component: () => import("../pages/Markdown.vue") },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
