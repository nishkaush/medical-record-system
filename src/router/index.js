import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/Home";
import StartApp from "@/components/StartApp/StartApp";
import Meds from "@/components/Meds/Meds.vue";
import Tests from "@/components/PatientTests/Tests.vue";
import Reports from "@/components/Reports/Reports.vue";

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
      path: "/start-app",
      name: "StartApp",
      component: StartApp
    },
    {
      path: "/meds",
      name: "Meds",
      component: Meds
    },
    {
      path: "/tests",
      name: "Tests",
      component: Tests
    },
    {
      path: "/reports",
      name: "Reports",
      component: Reports
    },
    {
      path: "*",
      name: "All",
      component: StartApp
    }
  ]
});
