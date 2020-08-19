import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "About Page - Example App" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/work",
    name: "Work",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue")
  },
  {
    path: "/work/:id",
    name: "ClientDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ClientDetails" */ "../views/ClientDetails.vue"
      )
  },
  {
    path: "/case-study/:id",
    name: "CaseStudy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ClientDetails" */ "../views/CaseStudy.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "ClientDetails" */ "../views/Contact.vue")
  },
  {
    path: "/service/digital-marketing",
    name: "digital-marketing",
    component: () => import("../views/services/marketing.vue")
  },
  {
    path: "/service/print",
    name: "print",
    component: () => import("../views/services/print.vue")
  },
  {
    path: "/service/design",
    name: "design",
    component: () => import("../views/services/design.vue")
  },
  {
    path: "/service/web",
    name: "web",
    component: () => import("../views/services/webdev.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
});




router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? "Consider This";

  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
});





export default router;
