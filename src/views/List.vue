<template>
<div>
	<ListItem v-for="salle in salles"/>	
</div>
</template>
<script>
import ListItem from "../components/list_item"
export default {
	components:[ListItem],
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
	
</style>