import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('../views/GreetingView.vue')
const HomePage = () => import('../views/HomePageView.vue')
const AuthPage = () => import('../views/AuthView.vue')
const LoginPage = () => import('../views/LoginView.vue')
const RegistrationPage = () => import('../views/RegistrationView.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/map', component: GreetingPage },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: AuthPage,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'registration', component: RegistrationPage }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
