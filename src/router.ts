import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


import CarsList from './components/CarsList.vue';
import CarDetails from './components/CarDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: CarsList,
  },
  {
    path: '/car/:id',
    component: CarDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
