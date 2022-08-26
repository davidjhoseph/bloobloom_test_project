import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CollectionsView from "@/views/collections/CollectionsView.vue";
import SpectaclesWomenView from "@/views/collections/SpectaclesWomenView.vue";
import SpectaclesMenView from "@/views/collections/SpectaclesMenView.vue";
import SunglassesWomenView from "@/views/collections/SunglassesWomenView.vue";
import SunglassesMenView from "@/views/collections/SunglassesMenView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/collections",
      name: "collections",
      component: CollectionsView,
      children: [
        {
          path: "sunglasses-women",
          name: "Sunglasses Women",
          component: SunglassesWomenView,
        },
        {
          path: "sunglasses-men",
          name: "Sunglasses Men",
          component: SunglassesMenView,
        },
        {
          path: "spectacles-men",
          name: "Spectacles Men",
          component: SpectaclesMenView,
        },
        {
          path: "spectacles-women",
          name: "Spectacles Women",
          component: SpectaclesWomenView,
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
