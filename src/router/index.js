import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path:'/TelaGeral',
    name:'TelaGeral',
    component: function () {
    return import('../views/TelaGeral.vue')
  }
},
{
  path:'/UserTable',
  name:'UserTable',
  component: function() { return import('../views/UserTable.vue')}
},

{
  path:'/teste',
  name:'teste',
  component: function() { return import('../views/teste.vue')}
}
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
