import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Computed from '../views/Computed.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
