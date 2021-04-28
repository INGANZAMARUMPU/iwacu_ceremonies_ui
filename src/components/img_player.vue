<template>
    <div class="fullwidth">
    	<img :src="item"/>
    	<div class="controls">
    		<button style="background:green">-</button>
    		<button style="background:green">+</button>
    		<button style="background:red" @click="close">x</button>
    	</div>
    </div>
</template>
<script>
export default{
	props:["item"],
	methods:{
		close(){
			this.$emit("close");
		}
	}
};
</script>
<style scoped>
.fullwidth{
	position: fixed;
	background-color: #4444;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
}
.controls{
	position: fixed;
	right: 0;
}
button{
	padding: 5px 15px;
	margin: 5px;
	font-family: monospace;
	font-size: 2em;
}
</style>