import { createRouter, createWebHistory } from "vue-router";
import MapView from "../components/MapView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/map",
      name: "Map",
      component: MapView,
    },
  ],
});

export default router;
