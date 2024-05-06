<template>
<div class="home">
	<div class="slider">
		<HomeSlider/>
	</div>
	<div class="overlay">
		<form class="form" @submit.prevent.stop="login">
			<div class="field">
				<label for="tel">Téléphone</label>
				<input type="text" id="tel" v-model="username" placeholder="votre numero de télephone">
			</div>
			<div class="field">
				<label for="password">Mot de passe</label>
				<input type="password" id="password" v-model="password" placeholder="votre mot de passe">
			</div>
			<label class="logs">{{ logs }}</label>
			<button @click.prevent.stop="login">Se connecter</button>
		</form>
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
			username:"", password:"", logs:""
		}
	},
	methods:{
		login(){
			this.logs = "loging in ..."
			axios.post(this.url+"/login/", 
				{"username": this.username, "password":this.password}
			).then((response) => {
				this.logs = ""
				this.$store.state.user = response.data
				this.$router.push("/");
			}).catch((error) => {
				console.error(error);
				this.logs = error.response.data
			})
		}
	}
};
</script>
<style scoped>
.overlay{
	/*background-color: var(--overlay-color);*/
	position: fixed;
	top: 0;
	width: 100%;
	height:100%;
	padding-top: 100px;
	overflow-y: auto;
}
.form{
	width: 300px;
	margin:auto;
}
.form *{
	display: block;
	width: 100%;
}
input, button{
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
</style>