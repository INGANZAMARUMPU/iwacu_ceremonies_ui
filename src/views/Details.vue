<template>
<div>
<BaseLayout>
	<center><h1>{{ item.nom }}</h1></center>
	<div class="mainpic">
		<img :src="item.photo_principal" @click="display()"
			width="100%" id="highlighted">
	</div>
	<div class="altpic">
		<div class="pic">
			<img :src="item.photo_principal" id="photo_0" @click="highlight(item.photo_principal)" width="100%">
		</div>
		<div class="pic">
			<img :src="item.photo_1" id="photo_1" @click="highlight(item.photo_1)" width="100%">
		</div>
		<div class="pic">
			<img :src="item.photo_2" id="photo_2" @click="highlight(item.photo_2)" width="100%">
		</div>
		<div class="pic">
			<img :src="item.photo_3" id="photo_3" @click="highlight(item.photo_3)" width="100%">
		</div>
		<div class="pic">
			<img :src="item.photo_4" id="photo_4" @click="highlight(item.photo_4)" width="100%">
		</div>
	</div>
	<div class="pics">
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
			<p>{{ item.valeurs_ajoutees }}</p>
		</div>
		<div class="field">
			<h3>Obligations</h3>
			<p>{{ item.obligations }}</p>
		</div>
		<div class="field">
			<h3>Prix</h3>
			<div class="inline">
				varie entre 
				<b>{{ money(item.prix_min) }} FBu</b> et 
				<b>{{ money(item.prix_max) }} FBu</b>
			</div>
		</div>
		<div class="field">
			<h3>Precision à propos du prix</h3>
			<p>{{ item.prix_infos }}</p>
		</div>
	</div>
	<Calendar/>
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
			current_img:null
		}
	},
	computed:{
		item(){
			return this.$store.state.current_salle
		}
	},
	watch:{
		"$store.state.user.access"(new_val){
			this.fetchData()
		},
	},
	methods:{
		display(){
			this.current_img = highlighted.src;
		},
		highlight(img){
			highlighted.src = img;
		},
		closeImage(){
			this.current_img = null;
		},
		animatePictures(nb){
			parent = this;
			this.interval_function = setInterval(() => {
				if(nb>4) nb = 0;
				let item = document.getElementById(`photo_${nb}`)
				item.click()
				nb++
			}, 3000,)
		}
	},
	mounted(){
		this.animatePictures(0)
	},
	beforeDestroy(){
		clearInterval(this.interval_function)
	}
};
</script>
<style scoped>
center h1 {
	margin: 30px;
}
.pics{
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(2, 1fr);
}
.altpic{
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(5, 1fr);
}
.pic{
	height: 100%;
	max-height: 140px;
	overflow: hidden;
	border-radius: 5px;
}
img{
	background-color: #ddd;
	width: 100%;
}
.twin *{
	display: inline;
}
.hidden{
	display: none;
}
.mainpic{
	width: 100%;
	max-height: 600px;
	overflow: hidden;
	border-radius: 5px;
	margin-bottom: 10px;
}
.inline *{
	display: inline;
}
@media only screen and (max-width: 400px) {
	.pics{
		display: block;
	}
}
</style>