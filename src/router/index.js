import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Components/Home.vue'
import Settings from '@/Components/Settings.vue'
import About from '@/Components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ],
  linkActiveClass: "active",
})

export default router
