<template>
<div>
<BaseLayout>
	<ListItem v-for="salle in salles" :item="salle"/>	
</BaseLayout>
</div>
</template>
<script>
import BaseLayout from "../components/base_layout.vue"
import ListItem from "../components/list_item.vue"
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