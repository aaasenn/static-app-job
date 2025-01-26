import { createRouter, createWebHistory } from 'vue-router';
import { routesList } from './routesList';

export const router = createRouter({
  history: createWebHistory(),
  routes: routesList,   
})

router.beforeEach((to) => {
  if (to.name === "auth" && sessionStorage.getItem("auth")) {
    return false
  }

  if (!sessionStorage.getItem("auth") && to.name !== 'auth') {
    router.push({ name: "auth" })
    return false
  }
})