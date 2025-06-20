// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/Pedidos.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pedidos', name: 'Pedidos', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
