import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.mixin({
  methods: {
    money(x) {
      if(x == undefined) return 0;
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    datetime(x) {
      if(!x) return "-"
      let date = new Date(x);
    	return new Intl.DateTimeFormat(
    		'en-GB',
    		{ dateStyle: 'short', timeStyle: 'short' }
    	).format(date)
    },
    refreshToken(callback){
      let refresh = this.$store.state.user.refresh_token
      axios.post(this.url+"/auth/refresh/"+refresh)
      .then((response) => {
        this.$store.state.user.access_token = response.data.access_token
        callback()
      }).catch((error) => {
        if (error.response.status == 401) {
          this.$store.state.user = {};
        } else {
          console.error(error)
        }
      })
    },
    activeUserIs(group){
      return this.active_user.group == this.$store.state.group_id[group];
    },
    activeUserIsValidator(){
      return !this.activeUserIs("comptable") && (
          this.activeUserIs("admin") || this.active_user.is_validator
        );
    },
  },
  computed:{
    active_user(){
      return this.$store.state.user;
    },
    url(){
      return this.$store.state.url;
    },
    headers(){
      return {
      	headers:{
      		"Authorization":"Bearer "+this.$store.state.user.access_token
      	}
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
