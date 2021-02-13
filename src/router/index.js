import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import Home from "@/views/Home";
import Login from "@/views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => !record.meta.guest) &&
    !store.state.isLoggedIn
  ) {
    router.push({ path: "/login" });
  }

  next();
});

export default router;
