<template>
<div class="salle" @click="details(item.nom)">
	<img :src="item.gallery[0]?.image">
	<div class="infos">
		<div class="prix">
			<h2>{{ item.nom }}</h2>
			<div><small :title="item.lieu">{{ item.lieu }}</small></div>
			<br>
			<h3>{{ money(item.prix) }} FBU</h3>
		</div>
		<hr>
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
		<button class="btn float" @click.stop="modifier"
			v-if="active_user && active_user.id == item.owner">
			modifier
		</button>
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
		},
		modifier(){
			this.$store.state.current_salle = this.item
			this.$router.push(`/edit-salle/${this.item.id}`)
		}
	}
};
</script>
<style scoped>
.salle{
	border-radius: 3px;
	cursor: default;
	overflow: hidden;
	display: flex;
	height: 200px;
}
img{
	flex-basis: 300px;
}
.infos{
	background-color: white;
	flex-grow: 1;
	position: relative;
}
.prix{
	width: 100%;
	overflow: hidden;
	padding: 20px;
}
.numbers{
	display: flex;
	padding: 20px;
	gap: 20px;
}
.key{
	color: #333;
}
small{
	max-width: 100%;
	text-wrap: nowrap;
	text-overflow: ellipsis;
}
h2{
	font-weight: 100;
}
h3{
	color: var(--secondary);
}
.float{
	position: absolute;
	bottom: 10px;
	right: 10px;
	background-color: white;
	color: var(--primary);
	border: 2px solid var(--primary);
}
.btn.float{
	padding: 5px 20px;
}
.btn.float:hover{
	padding: 5px 20px;
	color: white;
	background-color: var(--primary);
}
@media only screen and (max-width: 800px) {
	img{
		width: 240px;
	}
}
@media only screen and (max-width: 500px) {
	img{
		width: 120px;
	}
	.prix{
		padding: 10px;
	}
	.numbers{
		padding: 10px;
		gap: 10px;
	}
}
</style>