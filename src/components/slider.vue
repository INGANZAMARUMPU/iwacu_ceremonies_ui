<template>
    <div class="slider">
    	<div v-for="img in images" class="img":style="{
			'transform': position_css,
			'transition': 'transform 2s'
		}">
    		<img :src="img">
    	</div>
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
			position_css:'',
			interval_fuction:null
		}
	},
	mounted(){
		parent = this;
		this.interval_fuction = setInterval(() => {
			this.position = (this.position + 1)%this.images.length;
			this.position_css = 'translateX('+(-this.position*100)+'%)'
		}, 6000,)
	},
	beforeDestroy(){
		clearInterval(interval_fuction)
	}
};
</script>
<style scoped>
.slider{
	position: absolute;
	top: 0;
	height: 100%;
	height: 100vh;
	overflow: hidden;
	white-space: nowrap;
}
.img{
    display: inline-block;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
img{
	position: relative;
	width: 100%;
	/*top: 50%;
	transform: translateY(-45%);*/
}
</style>