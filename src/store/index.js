import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	url:"http://127.0.0.1:8000/api",
  	// url:"/api",
  	user:null,
  	images:[
  		"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
  		"https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg",
  		"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
  		"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
  	],
  	salles:[],
    current_salle:null,
    allocation_states:{ "Partiellement Payée":1, "Entierement Payée":2}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
