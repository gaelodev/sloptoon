import HomeView from '@/modules/views/HomeView.vue';
import TaleView from '@/modules/views/TaleView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tale',
      name: 'taleView',
      component: TaleView,
    },
  ],
});

export default router;
