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
	98% {left: 0%;}
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
	@keyframes push {
		0% { left: 0; }
		13% {left: 0;}
		
		17% {left: -50%;}
		28% {left: -50%;}

		34% {left: -100%;}
		43% {left: -100%;}

		47% {left: -150%;}
		58% {left: -150%;}
		
		62% {left: -200%;}
		73% {left: -200%;}
		
		77% {left: -250%;}
		88% {left: -250%;}
		
		92% {left: -300%;}
		98% {left: 0%;}
	}
	.suggestions{
		width: 90%;
		margin: 0 auto 20px auto;
	}
	.items{
		width: 450%;
	}
}
@media only screen and (max-width: 420px) {
	@keyframes push {
		0% { left: 0; }
		13% {left: 0;}
		
		17% {left: -105%;}
		28% {left: -105%;}

		34% {left: -210%;}
		43% {left: -210%;}

		47% {left: -315%;}
		58% {left: -315%;}
		
		62% {left: -420%;}
		73% {left: -420%;}
		
		77% {left: -525%;}
		88% {left: -525%;}
		
		92% {left: -630%;}
		98% {left: 0%;}
	}
	.items{
		width: 940%;
	}
}
</style>