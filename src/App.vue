<template>
  <div id="app">
	<div class="router-view">
		<router-view/>
	</div>
	<TopBar/>
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
