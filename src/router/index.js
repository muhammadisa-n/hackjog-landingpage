import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Registration from "../views/Registration.vue";
import PageNotFound from "../views/NotFound.vue";
import AdminPage from "../views/admin/AdminDashboard.vue";
import AdminBanner from "../views/admin/AdminBanner.vue";
import AdminSpeaker from "../views/admin/AdminSpeaker.vue";
import AdminVenue from "../views/admin/AdminVenue.vue";
import AdminPartner from "../views/admin/AdminPartner.vue";

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
      path: "/admin",
      name: "adminIndex",
      component: AdminPage,
      children: [],
    },
    { path: "/admin/banner", name: "adminBanner", component: AdminBanner },
    {
      path: "/admin/speakers",
      name: "adminSpeakers",
      component: AdminSpeaker,
    },
    {
      path: "/admin/venue",
      name: "adminVenues",
      component: AdminVenue,
    },
    {
      path: "/admin/ecopartner",
      name: "adminPartner",
      component: AdminPartner,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: PageNotFound,
    },
  ],
});

export default router;
