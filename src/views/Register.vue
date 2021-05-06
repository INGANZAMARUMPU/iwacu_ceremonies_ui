<template>
<div class="home">
	<div class="slider">
		<HomeSlider/>
	</div>
	<div class="overlay"></div>
	<div class="home-form">
		<div class="form">
			<div class="field">
				<label for="nom">Nom</label>
				<input type="text" id="nom" placeholder="votre nom">
			</div>
			<div class="field">
				<label for="prenom">Prenom</label>
				<input type="text" id="prenom" placeholder="votre prenom">
			</div>
			<div class="field">
				<label for="tel">Téléphone</label>
				<input type="text" id="tel" placeholder="votre numero de télephone">
			</div>
			<div class="field">
				<label for="cni">CNI</label>
				<input type="text" id="cni" placeholder="carte national d'identite">
			</div>
			<div class="field">
				<label for="password">Mot de passe</label>
				<input type="password" id="password" placeholder="votre mot de passe">
			</div>
			<div class="field">
				<label for="password">Confirmation</label>
				<input type="password" id="password" placeholder="retapez votre mot de passe">
			</div>
			<div class="field">
				<label for="email">Email</label>
				<input type="email" id="email" placeholder="votre adresse email">
			</div>
			<button>S'abonner</button>
		</div>
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
	background-color: var(--overlay-color);
	position: fixed;
	top: 0;
	width: 100%;
	height:100%;
}
.home-form{
	position: fixed;
	top: 50px;
	width: 100%;
	height: calc(100% - 50px);
	overflow: auto;
	color: var(--primary);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
}
.home-form *{
	font-size: 20px;
	width: 100%;
}
.form{
	max-width: 350px;
}
label{
	margin-top: 10px;
	font-weight: 700;
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 
}
button{
	margin-top: 20px;
}
a{
    color: blue;
    text-decoration: underline;
}
@media only screen and (max-height: 300px) {
	.home-form{
		max-width: 400px;
		width: 90%;
		position: absolute;
		margin:auto;
		top: 40px;
		left: 50%;
		height: inherit;
		transform: translate(-50%, 0);
	}
}
</style>