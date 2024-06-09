<template>
<div id="app">
	<TopBar/>
	<LoginDialog v-if="$store.state.login_shown"/>
	<router-view/>
	<Foot/>
</div>
</template>
<script>
import TopBar from "./components/topbar"
import Foot from "./components/foot.vue"
import LoginDialog from "./components/login.vue"

export default {
	components:{ TopBar, Foot, LoginDialog },
	watch:{
		"$store.state.user":{
			deep:true,
			handler(new_val){
				if(!!new_val){
					localStorage.setItem('user', JSON.stringify(new_val));
				} else {
					localStorage.removeItem('user')
				}
			}
		}
	},
  mounted(){
      var user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.$store.state.user = user;
      }
  }
};
</script>
<style src="./style.css">
</style>
