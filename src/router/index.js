import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/Home";
import StartApp from "@/components/StartApp/StartApp";

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
      name: "startApp",
      component: StartApp
    }
  ]
});
