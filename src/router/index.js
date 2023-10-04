import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Registration from "../views/Registration.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexView,
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration,
    },
  ],
});

export default router;
