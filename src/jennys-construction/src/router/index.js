import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home | Jenny\'s Construction' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About Us | Jenny\'s Construction' },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: { title: 'Our Services | Jenny\'s Construction' },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
    meta: { title: 'Portfolio | Jenny\'s Construction' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact Us | Jenny\'s Construction' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If there is a saved scroll position, return to it
      return savedPosition;
    } else {
      // Scroll to the top of the page
      return { left: 0, top: 0 };
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Jenny\'s Construction'; // Default title if no meta title is defined
  next();
});

export default router

