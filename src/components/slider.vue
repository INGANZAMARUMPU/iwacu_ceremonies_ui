<template>
    <div class="slider">
    	<img v-for="(img, i) in images" :src="img" :style="{
			'opacity': position==i?1:0,
			'transition': 'opacity 2s'
		}">
    </div>
</template>
<script>
export default{
	computed:{
		images(){
			return this.$store.state.images;
		}
	},
	data(){
		return {
			position:0,
			interval_function:null
		}
	},

	methods:{
		fetchSuggestions(){
			axios.get(this.url+"/salle/suggestions/")
			.then((response) => {
				this.$store.state.suggestions = response.data;
				this.$store.state.images = response.data.map(x => x.salle.photo_principal)
			}).catch((error) => {
				console.error(error);
			})
		}
	},
	mounted(){
		if(this.$store.state.suggestions.length<2){
			this.fetchSuggestions()
		}
		parent = this;
		this.interval_function = setInterval(() => {
			this.position = (this.position + 1)%this.images.length;
		}, 6000,)
	},
	beforeDestroy(){
		clearInterval(this.interval_function)
	}
};
</script>
<style scoped>
.slider{
	position: relative;
	top: 0;
	height:100vh;
	overflow: hidden;
	white-space: unset;
}
img{
	position: absolute;
	top: 0;
	width: 100%;
	min-height: 100%;
	left: 50%;
	transform: translateX(-50%);
}
</style>