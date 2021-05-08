<template>
<div>
<BaseLayout>
	<div class="pics">
		<div class="mainpic">
			<img src="img_placeholder.png" id="img1"
				@click="forwardTo('img1')" width="100%">
		</div>
		<div class="altpic">
			<img src="img_placeholder.png" id="img2"
				@click="forwardTo('img2')" width="100%">
			<img src="img_placeholder.png" id="img3"
				@click="forwardTo('img3')" width="100%">
			<img src="img_placeholder.png" id="img4"
				@click="forwardTo('img4')" width="100%">
			<img src="img_placeholder.png" id="img5"
				@click="forwardTo('img5')" width="100%">
		</div>
		<input type="file" ref="img1" @change="(e) => load(e, 'img1')"
			accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img2" @change="(e) => load(e, 'img2')"
			accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img3" @change="(e) => load(e, 'img3')"
			accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img4" @change="(e) => load(e, 'img4')"
			accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img5" @change="(e) => load(e, 'img5')"
			accept=".jpg,.jpeg,.gif,.png">
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
			<textarea id="ajouts" placeholder="autres choses que le client beneficie"></textarea>
		</div>
		<div class="field">
			<label for="obligations">Obligations</label>
			<textarea id="obligations" placeholder="ce que vous obligez aux clients"></textarea>
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
			<textarea id="details_prix" placeholder="autres prix selon les cas"></textarea>
		</div>
	</div>
	<button class="submit">Soumettre</button>
</BaseLayout>
</div>
</template>
<script>
import BaseLayout from "../components/base_layout"
export default{
	components:{BaseLayout, },
	methods:{
		forwardTo(component){
			this.$refs[component].click();
		},
		load(event, img_id){
			let placeholder = document.getElementById(img_id)
			let raw = event.target.files[0];
			this.compress(raw, 300, (compressed) =>{
				console.log(raw)
				console.log(compressed)
				var reader = new FileReader();
				reader.readAsDataURL(raw);
				reader.onload = function(event) {
					placeholder.src = event.target.result;
				};
			})
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
input{
	padding: 8px;
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