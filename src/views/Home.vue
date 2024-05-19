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
}
.slider-text h1{
	padding: 50px;
	color: white;
}
h1{
	text-align: center;
	font-size: 3em;
}
</style>