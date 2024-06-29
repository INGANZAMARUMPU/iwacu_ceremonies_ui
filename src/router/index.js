import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import EditSalle from '../views/EditSalle'
import Details from '../views/Details'


const routes = [
  { path: '/', name:'home', component:Home},
  { path: '/mine', name:'mine', component:List},
  { path: '/list', name:'list', component:List},
  { path: '/list/:prix/:localite', name:'search', component:List},
  { path: '/edit-salle', name:'edit_salle', component:EditSalle},
  { path: '/details/:salle_name', name:'details', component:Details},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router