<template>
<div id="app">
	<TopBar/>
	<router-view/>
	<Foot/>
</div>
</template>
<script>
import TopBar from "./components/topbar"
import Foot from "./components/foot.vue"

export default {
	components:{ TopBar, Foot },
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
