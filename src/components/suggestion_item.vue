<template>
<div class="salle" @click="details(item.id)">
	<div class="img">
		<img :src="item.photo_principal">
	</div>
	<h3 style="margin:10px 0">{{ item.nom }}</h3>
	<div class="infos">
		<div class="details">
			<div><b>places:</b> {{ item.no_places }}</div>
			<div><b>parkings:</b> {{ item.taille_parking }}</div>
			<div><b>prix:</b> {{ item.prix }}</div>
		</div>
		<button @click.stop="" class="reserver">Details</button>
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
	width: 250px;
	margin-bottom: 10px;
	overflow: hidden;
	border-radius: 2px;
}
.img, img{
	width: 100%;
	border-radius: 2px;
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
button{
	display: block;
	width: 100%;
}
</style>