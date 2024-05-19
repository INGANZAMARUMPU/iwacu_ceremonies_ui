<template>
<div class="home">
	<div class="slider-text">
		<div class="form">
			<h1>Trouver votre salle de réception</h1>
			<SearchView/>
		</div>
	</div>
	<HomeSlider/>
	<HomeSuggestions/>
	<Steps/>
	<ParVille/>
</div>
</template>
<script>
import HomeSlider from "../components/slider.vue"
import SearchView from "../components/search_view.vue"
import HomeSuggestions from "../components/home_suggestions.vue"
import Steps from "../components/steps.vue"
import ParVille from "../components/par_ville.vue"

export default{
	components:{ HomeSlider, SearchView, HomeSuggestions, Steps, ParVille },
	data(){
		return {
			show_all: false
		}
	},
	methods:{
	},
	mounted(){
		this.fetchSalles()
	}
};
</script>
<style scoped>
.home{
	position: relative;
}
.slider-text{
	position: absolute;
	z-index: 1;
	background-color: #0005;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-y: hidden;
}
.slider-text h1{
	padding: 50px;
}
h1{
	text-align: center;
	font-weight: 300;
	font-size: 3em;
}
</style>