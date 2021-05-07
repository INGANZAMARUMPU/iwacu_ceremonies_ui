<template>
<div class="home">
	<div class="slider">
		<HomeSlider/>
	</div>
	<div class="overlay">
		<div class="form">
			<div class="field">
				<label for="nom">Nom</label>
				<input type="text" v-model="nom" id="nom" placeholder="votre nom">
			</div>
			<div class="field">
				<label for="prenom">Prenom</label>
				<input type="text" v-model="prenom" id="prenom" placeholder="votre prenom">
			</div>
			<div class="field">
				<label for="tel">Téléphone</label>
				<input type="text" v-model="tel" id="tel" placeholder="votre numero de télephone">
			</div>
			<div class="field">
				<label for="cni">CNI</label>
				<input type="text" v-model="cni" id="cni" placeholder="carte national d'identite">
			</div>
			<div class="field">
				<label for="password">Mot de passe</label>
				<input type="password" v-model="password" id="password" placeholder="votre mot de passe">
			</div>
			<div class="field">
				<label for="password2">Confirmation</label>
				<input type="password" v-model="password2" id="password2" placeholder="retapez votre mot de passe">
			</div>
			<div class="field">
				<label for="email">Email</label>
				<input type="email" v-model="email" id="email" placeholder="votre adresse email">
			</div>
			<label class="logs">{{ logs }}</label>
			<button @click="register">S'abonner</button>
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
			],
			nom:"", prenom:"", tel:"", cni:"",
			password:"",password2:"",email:"",
			logs:""
		}
	},
	methods:{
		register(){
			this.logs = ""
			if (this.password!=this.password2) {
				this.logs = "les mots de passes ne sont pas identiques"
				return;
			}
			let data = {
				"nom": this.nom,
				"prenom": this.prenom,
				"tel": this.tel,
				"cni": this.cni,
				"password": this.password,
				"email": this.email
			}
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
	overflow: auto;
}
.form{
	position: relative;
	top: 80px;
	width: 300px;
	margin: auto;
}
.form *{
	display: block;
	width: 100%;
}
input, button{
	font-size: 1.2em;
}
label{
	font-weight: 700;
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 
}
button{
	margin-top: 20px;
}
</style>