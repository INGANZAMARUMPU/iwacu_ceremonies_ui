<template>
<div class="overlay">
	<div class="form">
		<div class="buttons">
			<button class="close" @click="$emit('close')">&times</button>
		</div>
		<div class="field">
			<label for="tel">Nom</label>
			<input type="text" id="tel" v-model="nom_client"
				placeholder="votre nom et prenom">
		</div>
		<div class="field">
			<label for="tel">Téléphone</label>
			<input type="text" v-model="tel_client" placeholder="votre numero de télephone">
		</div>
		<label class="logs">{{ logs }}</label>
		<div class="buttons">
			<button @click="reserver">Demander</button>
		</div>
	</div>
</div>
</template>
<script>
import axios from "axios"
export default{
	data(){
		return {
			nom_client:"", tel_client:"", logs:""
		}
	},
	methods:{
		reserver(){
			// this.logs = ""
			// axios.post(this.url+"/login/", 
			// 	{"username": this.username, "password":this.password}
			// ).then((response) => {
			// 	this.$store.state.user = response.data
			// 	this.$router.push("/");
			// }).catch((error) => {
			//   console.error(error);
			//   this.logs = error.response.data
			// })
		}
	}
};
</script>
<style scoped>
.overlay{
	position: fixed;
	top: 0px;
	left: 0;
	width: 100%;
	height: 100%;
	margin:auto;
	background: #0005;
}
.form{
	position: relative;
	width: 300px;
	background: white;
	margin: 100px auto;
	padding: 10px;
}
.close{
	padding: 3px 7px;
	margin-top: 0;
	background: red;
	right: 0;
}
input{
	font-size: 1.2em;
	width: 100%;
}
.buttons{
	display: flex;
	justify-content: flex-end;
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