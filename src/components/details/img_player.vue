<template>
    <div class="parent">
		<div class="img">
			<img :src="photos[current]" alt="">
		</div>
		<div class="others">
			<img v-for="photo, i in photos" :src="photo" alt=""
				:class="{'active':i==current}"
				@click="current = i">
		</div>
    </div>
</template>
<script>
export default{
	props:[ "photos" ],
	data(){
		return {
			current: 0
		}
	},
	computed:{
	},
	methods:{
		close(){
			this.$emit("close");
		},
	}
};
</script>
<style scoped>
.parent{
	background-color: white;
	border-radius: 5px;
	padding: 20px;
}
.others{
	width: 100%;
	overflow-x: auto;
	display: flex;
	padding-top: 10px;
}
.others > img{
	width: 120px;
	padding: 5px
}
.active{
	border: 2px solid black;
}
.img{
	height: 420px;
	overflow: hidden;
}
.img img{
	height: 100%;
	min-width: 100%;
	position: relative;
	top:50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>