import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import Teams from "@/views/Teams";

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
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      guest: true
    }
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
    meta: {
      guest: false
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
