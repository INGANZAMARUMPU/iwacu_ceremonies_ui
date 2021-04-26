<template>
<BaseLayout>
	<div class="pics">
		<div class="mainpic">
			<img src="img_placeholder.png" @click="load('img1')" width="100%">
		</div>
		<div class="altpic">
			<img src="img_placeholder.png" @click="load('img2')" width="100%">
			<img src="img_placeholder.png" @click="load('img3')" width="100%">
			<img src="img_placeholder.png" @click="load('img4')" width="100%">
			<img src="img_placeholder.png" @click="load('img5')" width="100%">
		</div>
		<input type="file" ref="img1" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img2" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img3" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img4" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img5" accept=".jpg,.jpeg,.gif,.png">
		<div class="field">
			<label for="nom">Nom</label>
			<input id="nom" type="text" placeholder="Nom de la salle">
		</div>
		<div class="field">
			<label for="lieu">Lieu</label>
			<div class="twin">
				<input id="lieu" type="text" placeholder="Province">
				<input type="text" placeholder="Commune">
				<input type="text" placeholder="Quartier, Rue">
			</div>
		</div>
		<div class="field">
			<label for="parking">Taille du parking</label>
			<input id="parking" type="text" placeholder="Combien de voitures">
		</div>
		<div class="field">
			<label for="places">Nombre de places</label>
			<input id="places" type="number" min="30" max="1000">
		</div>
		<div class="field">
			<label for="ajouts">Valeurs ajoutées</label>
			<textarea id="ajouts" placeholder="autres choses que le client beneficie"/>
		</div>
		<div class="field">
			<label for="obligations">Obligations</label>
			<textarea id="obligations" placeholder="ce que vous obligez aux clients" />
		</div>
		<div class="field">
			<label for="prix">Prix</label>
			<div class="twin">
				<input id="prix" type="number" min="50000" placeholder="minimum">
				<input type="number" min="50000" placeholder="maximum">
			</div>
		</div>
		<div class="field">
			<label for="details_prix">Precision à propos du prix</label>
			<textarea id="details_prix" placeholder="autres prix selon les cas" />
		</div>
	</div>
	<button class="submit">Soumettre</button>
</BaseLayout>
</template>
<script>
import BaseLayout from "../components/base_layout"
export default{
	components:{BaseLayout, },
	methods:{
		load(component){
			this.$refs[component].click();
		}
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
input[type=file]{
	display: none;
}
.field *{
	display: block;
	width: 100%;
}
.twin{
	display: flex;
}
.submit{
	display: block;
	margin:20px 0 20px auto;
}
</style>