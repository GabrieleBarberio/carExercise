import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


import CarsList from './components/CarsList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: CarsList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
