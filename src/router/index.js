import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/favorites',
    name: 'favorites',
    /* eslint-disable */
    component: () => import('../views/favorites.vue')
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('../views/notes.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]
const router = new VueRouter({
  routes
})
export default router