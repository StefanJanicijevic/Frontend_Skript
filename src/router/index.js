import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Crud from '@/views/Crud.vue';
import Socket from '@/views/Socket.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/crud',
    name: 'Crud',
    component: Crud
  },
  {
    path: '/socket',
    name: 'Socket',
    component: Socket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
