import { createApp } from 'vue'
import axios from "axios"
import App from './App.vue'
import router from './router'
import store from './store'
import 'primeicons/primeicons.css'

let mixins = {
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
      let refresh = this.$store.state.user.refresh
      axios.post(this.url+"/refresh/", {"refresh":refresh})
      .then((response) => {
        this.$store.state.user.access = response.data.access
        callback()
      }).catch((error) => {
        if (error.response.status == 401) {
          this.$store.state.user = null;
        } else {
          console.error(error)
        }
      })
    },
    fetchSalles() {
      axios
        .get(this.url + "/salles/")
        .then((response) => {
          this.$store.state.salles = response.data;
          this.salles = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    compress(file, width, callback){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e){
        let img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = function () {
            let canvas = document.createElement("canvas");
            let rapport = img.width/width;
            canvas.width = width;
            canvas.height = img.height/rapport;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            let result64 = ctx.canvas.toDataURL(img, file.type);
            callback(new File([result64], file.name, { type: file.type }));
            URL.revokeObjectURL(file);
        };
      }
    },
    setActiveItem(id){
      let headers = !!this.active_user?this.headers:{}
      axios.get(this.url+`/salles/${id}/`, headers)
      .then((response) => {
        this.item = response.data;
        this.$store.state.current_salle = response.data;
      }).catch((error) => {
        if(error.response.status==401){
          this.refreshToken(() => this.setActiveItem(id))
        }
        this.logs = error.response.data;
        console.error(error)
      })
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
      		  "Authorization":"Bearer "+this.active_user.access
      	}
      }
    }
  }
}
window.axios = axios;

createApp(App)
	.mixin(mixins)
  .use(store)
	.use(router)
	.mount('#app')