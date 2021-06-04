<template>
<div class="home">
	<div class="slider">
		<HomeSlider/>
	</div>
	<div class="overlay">
		<div class="form">
			<label for="prix">Choisissez le prix</label>
			<select name="prix" id="prix">
				<option value="">----</option>
				<option value="1">50 000 à 500 000 Fbu</option>
				<option value="2">550 000 à 1 000 000 Fbu</option>
				<option value="3">1 000 000 à 1 500 000 Fbu</option>
				<option value="4">1 500 000 à 2 000 000 Fbu</option>
				<option value="5">2 000 000 à 2 500 000 Fbu</option>
				<option value="6">2 500 000 à 3 000 000 Fbu</option>
				<option value="7">plus de 3 000 000 Fbu</option>
			</select>
			<label for="lieux">Dans quelle localité</label>
			<input type="text" id="lieux" placeholder="ex: Province, quartier, commune">
			<button @click="search">Trouver</button>
			<center>
				<router-link to="/list" v-slot="{ navigate, href }">
					<i @click="navigate">Afficher tout</i>
				</router-link>
			</center>
		</div>
	</div>
</div>
</template>
<script>
import HomeSlider from "../components/slider.vue"
export default{
	components:{HomeSlider,},
	data(){
		return {
		}
	},
	methods:{
		search(){
			this.$router.push("/list")
		}
	}
};
</script>
<style scoped>
.overlay{
	background-color: var(--overlay-color);
	position: fixed;
	top: 0;
	width: 100%;
	height:100%;
	padding-top: 120px;
	overflow-y: auto;
}
.form{
	width: 350px;
	margin:auto;
}
.form *{
	display: block;
	width: 100%;
}
input, button, option{
	font-size: 1.2em;
}
label{
	margin-top: 10px;
	font-weight: 700;
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 
}
button{
	margin-top: 20px;
}
i{
	margin-top: 20px;
	cursor: pointer;
    color: blue;
	font-size: 2em;
	font-weight: 600;
	-webkit-text-fill-color: blue;
	-webkit-text-stroke: .5px white;
}
i:hover{
	font-weight: 700;
	-webkit-text-stroke: 1px white;
}
</style>