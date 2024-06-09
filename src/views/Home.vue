<template>
<div class="home">
	<div class="slider">
		<div class="slider-imgs">
			<HomeSlider/>
		</div>
		<div class="slider-text">
			<div class="form">
				<h1>Trouver votre salle de réception</h1>
				<SearchView/>
			</div>
		</div>
	</div>
	<HomeSuggestions/>
	<Steps/>
	<ParVille/>
	<Contact/>
</div>
</template>
<script>
import HomeSlider from "@/components/home/slider.vue"
import SearchView from "@/components/home/search_view.vue"
import HomeSuggestions from "@/components/home/home_suggestions.vue"
import Steps from "@/components/home/steps.vue"
import ParVille from "@/components/home/par_ville.vue"
import Contact from "@/components/home/contact.vue"

export default{
	components:{ HomeSlider, SearchView, HomeSuggestions, Steps, ParVille, Contact },
	data(){
		return {
			show_all: false
		}
	},
	methods:{
	},
	mounted(){
		if(this.$store.state.salles?.results?.length == 0){
			this.fetchSalles()
		}
	}
};
</script>
<style scoped>
.home{
	position: relative;
}
.slider{
	position: relative;
	height: 100vh;
}
.slider-imgs{
	width: 100%;
	z-index: -1;
}
.slider-text{
	top:0;
	position: absolute;
	background-color: #0005;
	z-index: 10;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.slider-text h1{
	font-size: 3em;
	color: white;
	text-align: center;
	padding-bottom: 20px;
}
</style>