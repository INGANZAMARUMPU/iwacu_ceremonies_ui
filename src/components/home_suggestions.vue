<template>
<div class="recent">
	<div class="title">
		<h1>Nos suggestions</h1>
		<div>Les salles les plus appreciées et les plus consultés par nos visiteurs</div>
	</div>
	<div class="suggestions">
		<div class="items">
			<SuggestionItem :item="salle" v-for="salle in $store.state.salles.slice(0, 9)"/>
		</div>
	</div>
</div>
</template>
<script>
import SuggestionItem from "@/components/suggestion_item.vue";
export default{
	components:{ SuggestionItem },
};
</script>
<style scoped>
.title{
	padding: 30px;
	text-align: center;
}
.suggestions{
	width: 1150px;
	margin: 0 auto 30px auto;
}
.items{
	width: 3600px;
	overflow: hidden;
	padding: 10px 0;
}
.items > *{
	display: inline-block;
	width: 360px;
	margin-right: 30px;
	box-shadow: 1px 1px 10px #9993;
}
</style>