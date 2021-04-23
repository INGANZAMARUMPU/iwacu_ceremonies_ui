<template>
<div class="salle">
	<div class="left">
		<img :src="item.photo_principal">
	</div>
	<div class="right">
		<h3 style="margin:10px 0">{{ item.nom }}</h3>
		<div class="infos">
			<div class="details">
				<ul>
					<li><b>lieu:</b> {{ item.lieu }}</li>
					<li><b>places:</b> {{ item.no_places }}</li>
					<li><b>parkings:</b> {{ item.taille_parking }}</li>
					<li><b>prix:</b> {{ item.prix }}</li>
				</ul>
			</div>
			<div class="check_date">
				<input type="date" name="" value="" placeholder="">
				<button>Verifier</button>
				<button class="reserver">Reserver</button>
			</div>	
		</div>
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
	display: flex;
	width: 100%;
	margin: 20px 10px;
	border: 1px solid lightgray;
	border-radius: 5px;
	overflow: hidden;
	height: 220px;
	box-shadow: 0px 0px 5px gray;
}
.salle:hover{
	box-shadow: 0px 0px 10px gray;
}
.left img{
	height: 100%;
}
.right{
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-left: 10px;
	position: relative;
}
li{
	margin-left: 20px;
}
a{
    color: blue;
    text-decoration: underline;
}
.infos{
	display: flex;
	justify-content: space-between;
	flex-grow: 1;
}
.check_date{
	width: 200px;
	margin: 10px;
}
.check_date *{
	width: 100%;
}
</style>