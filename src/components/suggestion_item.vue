<template>
<div class="salle" @click="details(item.slug)">
	<img :src="item.photo_principal">
	<div class="infos">
		<h3>{{ item.nom }}</h3>
		<div><small>{{ item.lieu }}</small></div>
		<h2>{{ money(item.prix_min) }} FBU</h2>
		<div class="numbers">
			<div>
				<div class="key">Places</div>
				<div>{{ item.no_places }}</div>
			</div>
			<div>
				<div class="key">Parkings</div>
				<div>{{ item.taille_parking }}</div>
			</div>
			<div>
				<div class="key">Decor</div>
				<div>{{ money(item.prix_max - item.prix_min) }} BIF</div>
			</div>
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
		details(slug){
			this.$router.push(`/details/${slug}`)
		},
		reserver(slug){
			this.$router.push(`/details/${slug}#calendar`)
		}
	}
};
</script>
<style scoped>
.salle{
	width: 100%;
	border-radius: 5px;
}
.img, img{
	width: 100%;
}
.img{
	overflow: hidden;
}
.infos{
	background-color: white;
	padding: 20px;
}
.numbers{
	display: flex;
	gap:20px;
}
.key{
	color: #333;
}
</style>