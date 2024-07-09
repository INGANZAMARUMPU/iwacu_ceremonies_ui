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
	data(){
		return {
			position:0,
			interval_function:null,
			images: []
		}
	},
	methods:{
		fetchSuggestions(){
			axios.get(this.url+"/salles/")
			.then((response) => {
				this.images = response.data.results.filter(x => x.gallery.length > 0).map(x => x.gallery[0].image)
			}).catch((error) => {
				console.error(error);
			})
		}
	},
	mounted(){
		parent = this;
		this.fetchSuggestions()
		this.interval_function = setInterval(() => {
			this.position = (this.position + 1)%this.images.length;
		}, 6000)
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