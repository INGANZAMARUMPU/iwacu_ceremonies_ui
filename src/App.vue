<template>
  <div id="app">
  	<TopBar/>
  	<div class="body">
  		<router-view/>
  	</div>
  </div>
</template>
<script>
import TopBar from "./components/topbar"
export default {
	components:{ TopBar },
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
		},
		"$store.state.current_salle":{
			deep:true,
			handler(new_val){
				if(!!new_val){
					localStorage.setItem('current_salle', JSON.stringify(new_val));
				} else {
					localStorage.removeItem('current_salle')
				}
			}
		}
	},
  mounted(){
      var user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.$store.state.user = user;
      }
      var current_salle = JSON.parse(localStorage.getItem('current_salle'));
      if (current_salle) {
        this.$store.state.current_salle = current_salle;
      }
  }
};
</script>
<style src="./style.css">
</style>
