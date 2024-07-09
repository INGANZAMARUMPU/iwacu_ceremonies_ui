import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import EditSalle from '../views/EditSalle'
import EditVoiture from '../views/EditVoiture'
import Details from '../views/Details'
import Reservations from '../views/Reservations'


const routes = [
  { path: '/', name:'home', component:Home},
  { path: '/mine', name:'mine', component:List},
  { path: '/list', name:'list', component:List},
  { path: '/reservations', name:'reservations', component:Reservations},
  { path: '/list/:prix/:localite', name:'search', component:List},
  { path: '/edit-salle/:salle_id', name:'edit_salle', component:EditSalle},
  { path: '/edit-voiture', name:'edit_voiture', component:EditVoiture},
  { path: '/details/:salle_name', name:'details', component:Details},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router