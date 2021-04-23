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
</style>