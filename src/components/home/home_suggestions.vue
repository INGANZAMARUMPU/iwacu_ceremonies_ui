<template>
<div class="recent">
	<div class="title">
		<h1>Nos suggestions</h1>
		<div>Les salles les plus appreciées et les plus consultés par nos visiteurs</div>
	</div>
	<div class="suggestions">
		<div class="items">
			<SuggestionItem :item="salle" v-for="salle in salles"/>
		</div>
	</div>
</div>
</template>
<script>
import SuggestionItem from "@/components/suggestion_item.vue";
export default{
	components:{ SuggestionItem },
	data(){
		return {
			salles: this.$store.state.salles?.results?.slice(0, 9)
		}
	},
	watch:{
		"$store.state.salles.results"(new_val){
			this.salles = new_val.slice(0, 9)
		}
	}
};
</script>
<style scoped>
.title{
	padding: 30px;
	text-align: center;
}
.suggestions{
	width: 1150px;
	overflow-x: hidden;
	margin: 0 auto 30px auto;
}
.items{
	width: 3600px;
	overflow: hidden;
	padding: 10px 0;
}
.items > *{
	display: inline-block;
	margin-right: 30px;
	box-shadow: 1px 1px 10px #9993;
}
</style>