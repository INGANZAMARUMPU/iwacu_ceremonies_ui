import { createStore } from "vuex";


export default createStore({
  state: {
  	url:"http://127.0.0.1:8000/api",
    // url:"/api",
    auth_popup: false,
  	user:null,
  	images:[],
  	salles:{results:[]},
    profile_shown: false,
    contact_shown: false,
    login_shown: false,
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
