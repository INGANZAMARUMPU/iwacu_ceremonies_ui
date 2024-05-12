<template>
<div class="home">
	<div class="slider-text">
		<div class="form">
			<h1>Trouver votre salle de réception</h1>
			<SearchView/>
		</div>
	</div>
	<HomeSlider/>
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
</div>
</template>
<script>
import HomeSlider from "../components/slider.vue"
import SearchView from "../components/search_view.vue"
import SuggestionItem from "../components/suggestion_item.vue"

export default{
	components:{ HomeSlider, SearchView, SuggestionItem },
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
h1{
	text-align: center;
	font-weight: 300;
	font-size: 3em;
}
.slider-text h1{
	padding: 50px;
}
.title{
	padding: 30px;
	text-align: center;
}
.suggestions{
	width: 960px;
	margin: 0 auto 30px auto;
}
.items{
	width: 3300px;
	overflow: hidden;
	padding: 10px 0;
}
.items > *{
	display: inline-block;
	width: 300px;
	margin-right: 30px;
	box-shadow: 1px 1px 10px #9993;
}
</style>