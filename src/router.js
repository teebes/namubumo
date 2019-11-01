import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/entries",
      name: "Entries",
      component: () => import("@/components/Entries.vue")
    },
    {
      path: "/submit",
      name: "Submit",
      component: () => import("@/components/Submit.vue")
    },
    {
      path: "/rules",
      name: "Rules",
      component: () => import("@/components/Rules.vue")
    },
    {
      // learning component, not in use
      path: "/login",
      name: "Login",
      component: () => import("@/components/Login.vue")
    }
  ]
});
