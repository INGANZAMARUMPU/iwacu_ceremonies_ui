<template>
<div class="salle" @click="details(item.id)">
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
				<input @click.stop="" type="date" name="" value="" placeholder="">
				<button @click.stop="">Verifier</button>
				<button @click.stop="" class="reserver">Reserver</button>
			</div>	
		</div>
	</div>
</div>
</template>
<script>
export default{
	props:["item"],
	methods:{
		details(id){
			this.$router.push("/details/"+id)
		}
	}
};
</script>
<style scoped>
.salle{
	display: flex;
	width: 100%;
	margin-bottom: 20px;
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
@media only screen and (max-width: 1140px) {
	.infos{
		flex-direction: column;
	}
	.salle{
		height: unset;
	}
	.left img{
		height: unset;
		width: 100%;
	}
}
@media only screen and (max-width: 550px) {
	.salle{
		flex-direction: column;
	}
}
</style>