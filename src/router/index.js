import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Example from '../views/Example.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/example', name: 'Example', component: Example },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
