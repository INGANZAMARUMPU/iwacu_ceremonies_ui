<template>
<div>
	<BaseLayout>
		<div style="margin: 10px 0">
			{{ $store.state.salles.length }} items found
		</div>
		<ListItem v-for="salle in salles" :item="salle"/>	
	</BaseLayout>
</div>
</template>
<script>
import axios from "axios"
import BaseLayout from "../components/base_layout.vue"
import ListItem from "../components/list_item.vue"
export default {
	components:{ListItem, BaseLayout},
	data(){
		return {
			salles:this.$store.state.salles
		}
	},
	watch:{
		"$store.state.salles"(new_val){
			this.salles = this.$store.state.salles;
		}
	},
	methods:{
		fetchSalles(){
			axios.get(this.url+"/salle/")
			.then((response) => {
				this.$store.state.salles = response.data;
			}).catch((error) => {
				console.error(error);
			})
		}
	},
	mounted(){
		if(this.$store.state.salles.length == 0){
			this.fetchSalles()
		}
	}
};	
</script>
<style>
.parent{
	padding-top: 20px;
	width: 100%;
	margin: auto;
	background-color: #bde; 
}
</style>