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
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
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

export default router

