<template>
<div class="salle" @click="details(item.nom)">
	<img :src="item.gallery[0]?.image || '/static/img_placeholder.png'" height="200px"/>
	<div class="infos">
		<div style="width: 100%; overflow: hidden;">
			<h3>{{ item.nom }}</h3>
			<div><small :title="item.lieu">{{ item.lieu }}</small></div>
			<h2>{{ money(item.prix) }} FBU</h2>
		</div>
		<hr style="margin-bottom: 10px;">
		<div class="numbers">
			<div>
				<div class="key">Places</div>
				<div>{{ item.places }}</div>
			</div>
			<div>
				<div class="key">Parkings</div>
				<div>{{ item.taille_parking }}</div>
			</div>
			<div v-for="produit in item.produits">
				<div class="key">{{ produit.category }}</div>
				<div>{{ money(produit.prix) }} BIF</div>
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
			this.$router.push(`/details-salle/${slug}`)
		},
		reserver(slug){
			this.$router.push(`/details-salle/${slug}#calendar`)
		}
	}
};
</script>
<style scoped>
.salle{
	border-radius: 5px;
	cursor: default;
	overflow: hidden;
	display: flex;
	flex-direction: column;
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
small{
	max-width: 100%;
	text-wrap: nowrap;
	text-overflow: ellipsis;
}
h3, h2{
	font-weight: 100;
}
</style>