import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Message from "../pages/Message.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/message",
    name: "message",
    component: Message,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;