<template>
    <div class="fullwidth">
    	<img :src="item" :width="width" id="image" draggable="false"
    		@mousedown="e => startMove(e)"
    		@mouseup="moving=false"
    		@mousemove="e => move(e)"/>
 		<div class="zoom">
 			<fa @click="zoomOut" class="outline" icon="search-minus"/>
 			<fa @click="zoomIn" class="outline" icon="search-plus"/>
 		</div>
    	<div class="controls">
    		<button style="background:red" @click="close">&times</button>
    	</div>
    </div>
</template>
<script>
export default{
	props:["item"],
	data(){
		return {
			zoom:1, moving:false, x:0, y:0
		}
	},
	computed:{
		width(){
			return (100*this.zoom)+'%';
		}
	},
	methods:{
		close(){
			this.$emit("close");
		},
		zoomOut(){
			if(this.zoom>1)
				this.zoom -= 1
			else if (this.zoom>0.4)
				this.zoom -= 0.2
		},
		zoomIn(){
			if(this.zoom>=1)
				this.zoom += 1
			else if (this.zoom<1)
				this.zoom += 0.2
		},
		startMove(e){
			this.moving = true;
			this.x = e.clientX;
			this.y = e.clientY;
		},
		move(e){
			if(this.moving){
				let x = e.clientX;
				let y = e.clientY;
				let step_x = x - this.x;
				let step_y = y - this.y;
				image.style.left = `calc(50% + ${step_x}px)`;
				image.style.top = `calc(50% + ${step_y}px)`;
			}
		}
	}
};
</script>
<style scoped>
.fullwidth{
	position: fixed;
	background-color: #4449;
	height: 100%;
	width: 100%;
	overflow: auto;
	top: 0;
}
.controls{
	position: fixed;
	top: 50px;
	right: 0;
}
button{
	padding: 0 7px;
	margin: 5px;
	font-family: monospace;
	font-size: 2em;
}
.zoom{
	font-size: 2em;
	color: #f00;
	position: fixed;
	top: 50px;
	left: 50%;
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 
	transform: translateX(-50%);
}
.zoom *{
	/*background-image: linear-gradient(white 10%, #0000 60%);*/
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 
	margin: 5px;
}
.outline{
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 

}
img{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: move;
}
</style>