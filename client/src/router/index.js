import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("../pages/Chat.vue"),
    },
  ],
});

export default router;
