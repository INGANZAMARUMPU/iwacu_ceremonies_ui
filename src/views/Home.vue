<template>
<div class="home">
	<div class="slider">
		<HomeSlider :images="images"/>
	</div>
	<div class="overlay"></div>
	<div class="home-form">
		<label for="prix">Choisissez le prix</label>
		<select name="prix" id="prix">
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
		<button>Trouver</button>
	</div>
</div>
</template>
<script>
import HomeSlider from "../components/slider"
export default{
	components:{HomeSlider,},
	data(){
		return {
			images:[
				"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
				"https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg",
				"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
				"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
			]
		}
	}
};
</script>
<style scoped>
.home{
}
.overlay{
	background-color: #4ad7;
	position: fixed;
	top: 0;
	width: 100%;
	height:100%;
}
.home-form{
	width: 400px;
	min-width: 300px;
	position: absolute;
	top:45%;
	left:50%;
	transform: translate(-50%, -50%);
	color: var(--primary);
}
.home-form *{
	display: block;
	font-size: 20px;
	width: 100%;
}
label{
	margin-top: 10px;
	font-weight: 700;
}
button{
	margin-top: 20px;
}
</style>