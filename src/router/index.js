import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Registration from "../views/Registration.vue";
import AllEvents from "../views/AllEvents.vue";
import LoginView from "../views/Login.vue";
import PageNotFound from "../views/NotFound.vue";
import AdminPage from "../views/admin/AdminDashboard.vue";
import AdminBanner from "../views/admin/AdminBanner.vue";
import AdminSpeaker from "../views/admin/AdminSpeaker.vue";
import AdminVenue from "../views/admin/AdminVenue.vue";
import adminSchedule from "../views/admin/adminSchedule.vue";
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
      path: "/allevents",
      name: "allevents",
      component: AllEvents,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin",
      name: "adminIndex",
      component: AdminPage,
    },
    {
      path: "/admin/banner",
      name: "adminBanner",
      component: AdminBanner,
    },
    {
      path: "/admin/speakers",
      name: "adminSpeakers",
      component: AdminSpeaker,
    },
    {
      path: "/admin/schedule",
      name: "adminSchedule",
      component: adminSchedule,
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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // This ensures that if hash is provided to router.push it works as expected.
      //  & since we have used "behavior: 'smooth'" the browser will slowly come to this hash position.
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { left: 0, top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
  if (to.name === "adminIndex" && !isAuthenticated) {
    next({ name: "login" });
  }
  if (to.name === "adminBanner" && !isAuthenticated) {
    next({ name: "login" });
  }
  if (to.name === "adminSpeakers" && !isAuthenticated) {
    next({ name: "login" });
  }
  if (to.name === "adminVenues" && !isAuthenticated) {
    next({ name: "login" });
  }
  if (to.name === "adminSchedule" && !isAuthenticated) {
    next({ name: "login" });
  }
  if (to.name === "adminPartner" && !isAuthenticated) {
    next({ name: "login" });
  }
  if (to.name === "login" && isAuthenticated) {
    next({ name: "adminIndex" });
  }
  next();
});
export default router;
