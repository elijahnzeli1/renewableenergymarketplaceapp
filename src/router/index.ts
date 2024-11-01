import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/providers',
      name: 'Providers',
      component: () => import('../views/Providers.vue'),
    },
    {
      path: '/plans',
      name: 'Plans',
      component: () => import('../views/Plans.vue'),
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('../views/Education.vue'),
    },
    {
      path: '/campaigns',
      name: 'Campaigns',
      component: () => import('../views/Campaigns.vue'),
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('../views/Community.vue'),
    },
    {
      path: '/insights',
      name: 'Insights',
      component: () => import('../views/Insights.vue'),
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('../views/Support.vue'),
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/Auth.vue'),
    },
  ],
});

router.onError((error) => {
  console.error('Router error:', error);
});

export default router;