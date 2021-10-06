import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import Create from '../views/Create'
import Details from '../views/Details'
import Register from '../views/Register'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  // { path: '/', name:'home', component:Home},
  { path: '/', name:'home', component:List},
  { path: '/mine', name:'mine', component:List},
  // { path: '/list', name:'list', component:List},
  { path: '/register', name:'register', component:Register},
  { path: '/login', name:'login', component:Login},
  { path: '/list/:prix/:localite', name:'search', component:List},
  { path: '/create', name:'create', component:Create},
  { path: '/details/:salle_name', name:'details', component:Details},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
