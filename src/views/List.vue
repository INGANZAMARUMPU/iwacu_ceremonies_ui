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
			if(this.$route.path!="/mine"){
				this.salles = new_val;
			}
		},
		"$store.state.mes_salles"(new_val){
			if(this.$route.path=="/mine"){
				this.salles = new_val;
			}
		},
		"$route.path"(new_val){
			this.refetch(new_val)
		}
	},
	methods:{
		refetch(path){
			if(path=="/mine"){
				if(!this.active_user){
					this.$router.push("/")
					return
				}
				if(this.$store.state.mes_salles.length == 0){
					this.fetchMesSalles()
				} else {
					this.salles = this.$store.state.mes_salles
				}
			} else {
				if(this.$store.state.salles.length == 0){
					this.fetchSalles()
				} else{
					this.salles = this.$store.state.salles
				}
			}
		},
		fetchSalles(){
			axios.get(this.url+"/salle/")
			.then((response) => {
				this.$store.state.salles = response.data;
				this.salles = response.data
			}).catch((error) => {
				console.error(error);
			})
		},
		fetchMesSalles(){
			axios.get(this.url+"/salle/mine/", this.headers)
			.then((response) => {
				this.$store.state.mes_salles = response.data;
				this.salles = response.data
			}).catch((error) => {
				if(error.response.status == 403){
					this.refreshToken(this.fetchComptes)
				} else {
					this.logs = error.response.data;
				}
			})
		}
	},
	mounted(){
		this.refetch(this.$route.path)
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