<template>
<div>
<BaseLayout>
	<div class="pics">
		<div class="mainpic">
			<img :src="item.photo_principal" @click="display(item.photo_principal)" width="100%">
		</div>
		<div class="altpic">
			<img :src="item.photo_1" @click="display(item.photo_1)" width="100%">
			<img :src="item.photo_2" @click="display(item.photo_2)" width="100%">
			<img :src="item.photo_3" @click="display(item.photo_3)" width="100%">
			<img :src="item.photo_4" @click="display(item.photo_4)" width="100%">
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
			<div class="twin" v-for="prix of item.prix">
				<div>Min <b>{{ prix.prix_min }} FBu </b></div>
				<div>Max <b>{{ prix.prix_max }} FBu </b></div>
				<div>Max <i>{{ prix.commentaire }}</i></div>
			</div>
		</div>
		<div class="field">
			<h3>Precision à propos du prix</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, facilis.</p>
		</div>
	</div>
	<Calendar :taken="item.allocation.map(x => x.date)"/>
</BaseLayout>
<ImgPlayer
	:item="current_img" @close="closeImage"
	:class="{'hidden':!current_img}"/>
</div>
</template>
<script>
import axios from "axios"
import BaseLayout from "../components/base_layout"
import ImgPlayer from "../components/img_player"
import Calendar from "../components/calendar"
export default{
	components:{BaseLayout, ImgPlayer, Calendar},
	data(){
		return {
			item:{allocation:[]}, current_img:null
		}
	},
	methods:{
		display(img){
			this.current_img = img;
		},
		closeImage(){
			this.current_img = null;
		}
	},
	mounted(){
		let id = this.$route.params["id"];
		axios.get(this.url+`/salle/${id}/`)
		.then((response) => {
			this.item = response.data;
			this.$store.state.current_salle = response.data;
		}).catch((error) => {
		  console.error(error);
		}).finally(() => {
		  // TODO
		});
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
.twin *{
	display: inline;
}
.hidden{
	display: none;
}

@media only screen and (max-width: 400px) {
	.pics{
		display: block;
	}
}
</style>