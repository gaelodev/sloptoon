import MainLayout from '@/modules/layouts/MainLayout.vue';
import HomeView from '@/modules/views/HomeView.vue';
import TaleView from '@/modules/views/TaleView.vue';
import LoginView from '@/modules/views/LoginView.vue';
import RegisterView from '@/modules/views/RegisterView.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { user, authReady } from '@/authState';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: { requiresAuth: true },
        },
        {
          path: 'tale',
          name: 'taleView',
          component: TaleView,
          meta: { requiresAuth: true },
        },
        {
          path: '/register',
          component: RegisterView,
        },
      ],
    },

    // 🔥 login fuera del layout
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // espera Firebase
  if (!authReady.value) return next();

  // si requiere auth y no hay usuario → login
  if (to.meta.requiresAuth && !user.value) {
    return next('/login');
  }

  // si ya está logueado y va a login → home
  if (to.path === '/login' && user.value) {
    return next('/');
  }

  next();
});

export default router;
