<template>
<div class="parent">
	<ListItem v-for="salle in salles" :item="salle"/>	
</div>
</template>
<script>
import ListItem from "../components/list_item"
export default {
	components:{ListItem},
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
	max-width: 1000px;
	width: 100%;
	margin: auto;
	/*background-color: var(--primary-hover);*/ 
}
</style>