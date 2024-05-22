<template>
<div class="home">
	<div class="slider-imgs">
		<HomeSlider/>
	</div>
	<div class="slider-text">
		<div class="form">
			<h1>Trouver votre salle de réception</h1>
			<SearchView/>
		</div>
	</div>
	<HomeSuggestions/>
	<Steps/>
	<ParVille/>
	<Contact/>
	<Foot/>
</div>
</template>
<script>
import HomeSlider from "@/components/home/slider.vue"
import SearchView from "@/components/home/search_view.vue"
import HomeSuggestions from "@/components/home/home_suggestions.vue"
import Steps from "@/components/home/steps.vue"
import ParVille from "@/components/home/par_ville.vue"
import Contact from "@/components/home/contact.vue"
import Foot from "@/components/home/foot.vue"

export default{
	components:{ HomeSlider, SearchView, HomeSuggestions, Steps, ParVille, Contact, Foot },
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
	margin-top: -75px;
	height: 100vh;
}
.slider-imgs{
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
}
.slider-text{
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