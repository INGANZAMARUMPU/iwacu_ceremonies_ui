<template>
<div class="salle" @click="details(item.id, item.nom)">
	<div class="img">
		<img :src="item.photo_principal">
	</div>
	<h3 style="margin:10px 0">{{ item.nom }}</h3>
	<div class="infos">
		<div class="details">
			<div><b>places:</b> {{ item.no_places }}</div>
			<div><b>parkings:</b> {{ item.taille_parking }}</div>
			<div>
				<b>prix: </b>
				<span>
					<b>{{ item.prix_min }}</b> à 
					<b>{{ item.prix_max }}</b>
				</span>
			</div>
		</div>
		<button class="reserver" @click="reserver(item.id,item.nom)">Reserver</button>
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
		details(id, nom){
			this.setActiveItem(id)
			this.$router.push(`/details/${nom.toLowerCase().replace(" ", "-")}`)
		},
		reserver(nom){
			this.setActiveItem(id)
			this.$router.push(`/details/${nom.toLowerCase().replace(" ", "-")}#calendar`)
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
.img{
	max-height: 180px;
	overflow: hidden;
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