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
	props:{
		images:{type:Array, default:[]}
	},
	data(){
		return {
			position:0,
			interval_function:null
		}
	},
	mounted(){
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
	height: 100%;
	height: 100vh;
	overflow: hidden;
	white-space: nowrap;
}
img{
	position: absolute;
	min-width: 100%;
	min-height: 100%;
	left: 50%;
	transform: translateX(-50%);
}
</style>