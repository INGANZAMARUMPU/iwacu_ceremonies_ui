<template>
<BaseLayout>
	<ListItem v-for="salle in salles" :item="salle"/>	
</BaseLayout>
</template>
<script>
import BaseLayout from "../components/base_layout"
import ListItem from "../components/list_item"
export default {
	components:{ListItem, BaseLayout},
	data(){
		return {
		}
	},
	computed:{
		salles(){
			return this.$store.state.salles;
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