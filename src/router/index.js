import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

import ListSalles from '../views/ListSalles'
import EditSalle from '../views/EditSalle'
import DetailsSalle from '../views/DetailsSalle'
import ReservationsSalle from '../views/ReservationsSalle'

import EditVoiture from '../views/EditVoiture'
import ListVoitures from '../views/ListVoitures'
import DetailsVoiture from '../views/DetailsVoiture'
import ReservationsVoiture from '../views/ReservationsVoiture'

const routes = [
  { path: '/', name:'home', component:Home},
  
  { path: '/mine/salle', name:'salle_mine', component:ListSalles},
  { path: '/list/salle', name:'salle_list', component:ListSalles},
  { path: '/reservations/salle', name:'salle_reservations', component:ReservationsSalle},
  { path: '/salle/:prix/:localite', name:'search_salle', component:ListSalles},
  { path: '/edit-salle/:salle_id', name:'edit_salle', component:EditSalle},
  { path: '/edit-salle', name:'add_salle', component:EditSalle},
  { path: '/details-salle/:salle_name', name:'details-salle', component:DetailsSalle},
  
  { path: '/mine/voiture', name:'voiture_mine', component:ListVoitures},
  { path: '/list/voiture', name:'voiture_list', component:ListVoitures},
  { path: '/reservations/voiture', name:'voiture_reservations', component:ReservationsVoiture},
  { path: '/voiture/:prix/:localite', name:'search_voiture', component:ListVoitures},
  { path: '/details-voiture/:voiture_name', name:'details-voiture', component:DetailsVoiture},
  { path: '/edit-voiture/:voiture_id', name:'edit_voiture', component:EditVoiture},
  { path: '/edit-voiture', name:'add_voiture', component:EditVoiture},
  { path: '/details-voiture/:voiture_id', name:'details_voiture', component:DetailsVoiture},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router