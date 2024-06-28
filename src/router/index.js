import { createRouter, createWebHashHistory } from 'vue-router';
import { projectAuth } from '../firebase/config';
import Events from '@/views/Events.vue';
import EventDetails from '@/views/EventDetails.vue';
const routes = [

  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/events/:id',
    name: 'EventsDetails',
    component: EventDetails,
  },
  {
    path: '/events',
    name: 'events',
    component: Events,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = projectAuth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = await getCurrentUser();

  if (requiresAuth && !currentUser) {
    next('/welcome');
  } else if (currentUser && from.path === '/dashboard' && to.path === '/welcome') {
    // Prevent going back to /welcome from /dashboard
    next(false);
  } else {
    next();
  }
});


export default router;