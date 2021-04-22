<template>
<div class="salle">
	<div class="left">
		<img :src="item.photo_principal">
	</div>
	<div class="right">
		Spring
	</div>
</div>
</template>
<script>
export default{
	props:["item"],
};
</script>
<style scoped>
.salle{
	height: 300px;
	overflow: hidden;
	margin: 20px 0;
	position: relative;
}
.left{
	display: inline-block;
	width: 70%;
}
.right{
	display: inline-block;
	position: absolute;
	width: 40%;
	height: 110%;
	right: 0px;
	top: -5px;
	background: var(--primary-hover);
	box-shadow: -50px 0 20px var(--primary-hover);
}
img{
	position: absolute;
	min-width: 100%;
	min-height: 100%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>