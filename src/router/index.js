import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Components/Home.vue'
import Info from '@/Components/Info.vue'
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
      path: '/info',
      name: 'info',
      component: Info
    }
  ],
  linkActiveClass: "active",
})

export default router
