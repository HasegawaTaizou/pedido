import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Message from "../pages/Message.vue";
import Tour from "../pages/Tour.vue";

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
  {
    path: "/tour",
    name: "tour",
    component: Tour,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;