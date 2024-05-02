import { createRouter, createWebHistory } from 'vue-router'
import GreetingView from '../views/GreetingView.vue'
import HomePageView from '../views/HomePageView.vue'
import AuthView from '../views/AuthView.vue'

const routes = [
  { path: '/', component: GreetingView },
  { path: '/map', component: HomePageView },
  { path: '/auth', component: AuthView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
