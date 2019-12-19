import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails"
      ), // lazy load the page/component only trigger/load if the page was clicked/executed
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails"
          ),
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-travel-active-link-class", // custom active class name
  routes
});

export default router;
