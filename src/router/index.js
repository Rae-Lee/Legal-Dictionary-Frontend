import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import store from './../store'
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
    path:'/admin/login',
    name: 'adminLogin',
    component: () => import('../views/adminLogin.vue')
  },
  {
    path: '/admin',
    name: 'adminHome',
    component: () => import('../views/adminHome.vue')
  },
  {
    path: '/keywords/:id/articles',
    name: 'keywords articles',
    component: () => import('../views/keywordsArticles.vue')
  },
  {
    path: '/keywords/:id/references',
    name: 'keywords references',
    component: () => import('../views/keywordsReferences.vue')
  },
  {
    path: '/keywords/:id/notes',
    name: 'keywords notes',
    component: () => import('../views/keywordsNotes.vue')
  },
  {
    path: '/references/:id',
    name:'reference',
    component: () => import('../views/reference.vue')
  },
  {
    path: '/users/:id/favorites',
    name: 'favorites',
    component: () => import('../views/favorites.vue')
  },
  {
    path: '/users/:id/notes',
    name: 'notes',
    component: () => import('../views/notes.vue')
  },
  {
    path: '/users/:id/profile',
    name: 'profile',
    component: () => import('../views/profile.vue')
  },
  {
    path:'/',
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
  linkExactActiveClass: "active",
  routes
})
router.beforeEach((to, from, next) => {
  store.dispatch('fetchUser')
  next()
})
export default router