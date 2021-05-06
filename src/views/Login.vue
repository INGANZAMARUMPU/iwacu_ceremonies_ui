<template>
<div class="home">
	<div class="slider">
		<HomeSlider/>
	</div>
	<div class="overlay"></div>
	<div class="home-form">
		<div class="field">
			<label for="tel">Téléphone</label>
			<input type="text" id="tel" v-model="username" placeholder="votre numero de télephone">
		</div>
		<div class="field">
			<label for="password">Mot de passe</label>
			<input type="password" id="password" v-model="password" placeholder="votre mot de passe">
		</div>
		<button @click="login">Se connecter</button>
	</div>
</div>
</template>
<script>
import axios from "axios"
import HomeSlider from "../components/slider.vue"
export default{
	components:{HomeSlider,},
	data(){
		return {
			username:"", password:""
		}
	},
	methods:{
		login(){
			axios.post(this.url+"/login/", 
				{"username": this.username, "password":this.password}
			).then((response) => {
				this.$store.state.user = response.data
			}).catch((error) => {
			  console.error(error);
			})
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
	max-width: 400px;
	width: 90%;
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
		top: 40px;
		transform: translate(-50%, 0);
	}
}
</style>