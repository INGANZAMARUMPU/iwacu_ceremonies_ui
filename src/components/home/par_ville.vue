<template>
<div class="recent">
	<div class="title">
		<h1>Nous sommes partout</h1>
		<div>Nous vous proposons les salles dans tout les villes du pays</div>
	</div>
	<div class="ligne1">
		<div class="img">
			<img src="/static/Bujumbura.jpg" alt="">
			<div class="caption">
				<h3>Bujumbura</h3>
				<div>3 salles</div>
			</div>
		</div>
		<div class="img">
			<img src="/static/Kayanza.jpg" alt="">
			<div class="caption">
				<h3>Kayanza</h3>
				<div>3 salles</div>
			</div>
		</div>
	</div>
	<div class="ligne2">
		<div class="img">
			<img src="/static/Ngozi.jpg" alt="">
			<div class="caption">
				<h3>Ngozi</h3>
				<div>3 salles</div>
			</div>
		</div>
		<div class="img">
			<img src="/static/Gitega.jpg" alt="">
			<div class="caption">
				<h3>Gitega</h3>
				<div>3 salles</div>
			</div>
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
	padding: 0 40px 40px 40px;
}
.title{
	padding: 30px;
	text-align: center;
}
.ligne1, .ligne2{
	display: grid;
	max-width: 1024px;
	height: 400px;
	margin: auto;
	gap: 20px;
}
.ligne1{
	grid-template-columns: 5fr 3fr;
	margin-bottom: 20px;
}
.ligne2{
	grid-template-columns: 3fr 5fr;
}
img{
	height: 100%;
	min-width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 1;
	transform: translate(-50%, -50%);
}
.img:hover img{
	height: 105%;
	min-width: 110%;
}
.img{
	position: relative;
	overflow: hidden;
	border-radius: 5px;
}
.caption{
	background-color: #0005;
	height: 100%;
	position: relative;
	text-align: center;
	padding-top: 250px;
	z-index: 2;
}
.caption *{
	color: #ddd;
}
</style>