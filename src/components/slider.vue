<template>
    <div class="slider">
    	<img v-for="img in images" :src="img">
    </div>
</template>
<script>
export default{
	props:{
		images:{type:Array, default:[]}
	},
};
</script>
<style scoped>
</style>