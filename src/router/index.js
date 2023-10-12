import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Registration from "../views/Registration.vue";
import PageNotFound from "../views/NotFound.vue";

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
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: PageNotFound,
    },
  ],
});

export default router;
