import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'home', component: Home},
  { path: '/list',name: 'list', component: List},
  { path: '/list/:prix/:localite',name: 'list', component: List},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
