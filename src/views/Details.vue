<template>
<div>
<BaseLayout>
	<div class="pics">
		<div class="mainpic">
			<img :src="item.photo_principal" @click="load('img1')" width="100%">
		</div>
		<div class="altpic">
			<img :src="item.photo_1" @click="load('img2')" width="100%">
			<img :src="item.photo_2" @click="load('img3')" width="100%">
			<img :src="item.photo_3" @click="load('img4')" width="100%">
			<img :src="item.photo_4" @click="load('img5')" width="100%">
		</div>
		<div class="field">
			<h3>Nom</h3>
			<p>{{ item.nom }}</p>
		</div>
		<div class="field">
			<h3>Lieu</h3>
			<p>{{ item.lieu}}</p>
		</div>
		<div class="field">
			<h3>Taille du parking</h3>
			<p>{{ item.taille_parking}}</p>
		</div>
		<div class="field">
			<h3>Nombre de places</h3>
			<p>{{ item.no_places}}</p>
		</div>
		<div class="field">
			<h3>Valeurs ajoutées</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Beatae, recusandae?</p>
		</div>
		<div class="field">
			<h3>Obligations</h3>
			<p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Nam, commodi!</p>
		</div>
		<div class="field">
			<h3>Prix</h3>
			<div class="twin">
				<div>Min <b>50 000 FBu</b></div>
				<div>Max <b>{{ item.prix}} FBu</b></div>
			</div>
		</div>
		<div class="field">
			<h3>Precision à propos du prix</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, facilis.</p>
		</div>
	</div>
</BaseLayout>
</div>
</template>
<script>
import BaseLayout from "../components/base_layout"
export default{
	components:{BaseLayout, },
	data(){
		return {
			item:{},
		}
	},
	methods:{
		load(component){
			this.$refs[component].click();
		}
	},
	mounted(){
		let id = this.$route.params["id"];
		this.item = this.$store.state.salles.find(x => x.id = id);
	}
};
</script>
<style scoped>
.pics{
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(2, 1fr);
}
.altpic{
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(2, 1fr);
}
img{
	background-color: #ddd;
}
.twin{
	display: flex;
}
</style>