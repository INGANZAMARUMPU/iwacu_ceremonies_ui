import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	// url:"http://127.0.0.1:8000/api",
    url:"/api",
  	user:null,
  	images:[],
  	salles:[],
    suggestions:[],
    mes_salles:[],
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
