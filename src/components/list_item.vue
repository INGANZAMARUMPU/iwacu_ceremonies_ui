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
			<button @click.stop="">Verifier</button>
		</div>
	</div>
</div>
</template>
<script>
export default{
	props:["item"],
	data(){
		return {
			date:null
		}
	},
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
	padding: 10px;
	overflow: hidden;
	height: 260px;
	border-top: 2px solid gray;
}
.left{
	max-height: 260px;
	width: 400px;
	overflow: hidden;
	border-radius: 5px;
}
img{
	width: 100%;
	min-height: 100%;
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
.check_date{
	width: 200px;
	margin: 10px;
}
.check_date *{
	width: 100%;
}
@media only screen and (max-width: 550px) {
	.salle{
		flex-direction: column;
	}
}
</style>