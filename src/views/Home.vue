<template>
<div class="home">
	<div class="slider-text">
		<div class="form">
			<h1>Trouver votre salle de réception</h1>
			<SearchView/>
		</div>
	</div>
	<HomeSlider/>
</div>
</template>
<script>
import HomeSlider from "../components/slider.vue"
import SearchView from "../components/search_view.vue"
export default{
	components:{HomeSlider, SearchView},
	data(){
		return {
			show_all: false
		}
	},
	methods:{
		search(){
			this.$router.push("/list")
		}
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
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
h1{
	padding: 50px;
	text-align: center;
	font-weight: 300;
	font-size: 3em;
}
</style>