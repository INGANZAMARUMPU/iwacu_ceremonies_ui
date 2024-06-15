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
@keyframes push {
	0% { left: 0; }
	13% {left: 0;}
	
	17% {left: -33.34%;}
	28% {left: -33.34%;}

	34% {left: -66.67%;}
	43% {left: -66.67%;}

	47% {left: -100%;}
	58% {left: -100%;}
	
	62% {left: -133.34%;}
	73% {left: -133.34%;}
	
	77% {left: -166.67%;}
	88% {left: -166.67%;}
	
	92% {left: -200%;}
	98% {left: -200%;}
}
.title{
	padding: 30px;
	text-align: center;
}
.suggestions{
	width: 80%;
	margin: 0 auto 30px auto;
	overflow-x: hidden;
}
.items{
	overflow: hidden;
	display: grid;
	width: 300%;
	gap: 20px;
	position: relative;
	animation: push 60s infinite;
	grid-template-columns: repeat(9, 1fr);
	align-items: baseline;
}
.items > *{
	box-shadow: 1px 1px 10px #9993;
}
@media only screen and (max-width: 900px) {
	.suggestions{
		width: 90%;
		margin: 0 auto 20px auto;
	}
	.items{
		width: 450%;
	}
}
@media only screen and (max-width: 420px) {
	.items{
		width: 940%;
	}
}
</style>