import MainLayout from '@/modules/layouts/MainLayout.vue';
import HomeView from '@/modules/views/HomeView.vue';
import TaleView from '@/modules/views/TaleView.vue';
import LoginView from '@/modules/views/LoginView.vue';
import RegisterView from '@/modules/views/RegisterView.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { user, authReady } from '@/authState';
import { watch } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      meta: { requiresAuth: true },
      redirect: '/login',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'tales/:id',
          name: 'taleView',
          component: TaleView,
        },
      ],
    },

    // 🔥 login fuera del layout
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guestOnly: true },
    },
    {
      path: '/register',
      component: RegisterView,
      meta: { guestOnly: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  // espera Firebase
  /*if (!authReady.value) return next();

  // si requiere auth y no hay usuario → login
  if (to.meta.requiresAuth && !user.value) {
    return next('/login');
  }

  // si ya está logueado y va a login → home
  if (to.path === '/login' && user.value) {
    return next('/');
  }

  next();*/

  if (!authReady.value) {
    await new Promise<void>((resolve) => {
      const stop = watch(authReady, (ready) => {
        if (ready) {
          stop();
          resolve();
        }
      });
    });
  }
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const guestOnly = to.matched.some((record) => record.meta.guestOnly);

  if (requiresAuth && !user.value) {
    return next('/login');
  }

  if (guestOnly && user.value) {
    return next('/');
  }

  next();
});

export default router;
