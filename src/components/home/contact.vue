<template>
<div class="recent">
	<img src="/static/agent.jpg" alt="">
	<div class="caption">
		<div class="inner">
			<h1>Veuillez entrer en contact avec l'équipe de nos experts la plus proche de chez vous.</h1>
			<div><button>CONTACT</button></div>
		</div>
	</div>
</div>
</template>
<script>
export default{
};
</script>
<style scoped>
.recent{
	position: relative;
	margin: 40px 0;
	overflow: hidden;
	
}
img{
	position: absolute;
	width: 100%;
	z-index: -1;
}
.caption{
	background-color: #035E;
}
.inner{
	width: 90%;
	max-width: 800px;
	margin: auto;
	text-align: center;
	padding: 80px 0;
}
h1{
	font-size: 2.5em;
	font-weight: 100;
	color: #DDD;
	margin-bottom: 20px;
}
button{
	background-color: var(--secondary);
}
</style>