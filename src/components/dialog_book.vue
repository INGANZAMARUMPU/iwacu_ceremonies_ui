<template>
<div class="overlay">
	<div class="form">
		<div class="buttons">
			<button class="close" @click="close">&times</button>
		</div>
		<div class="field">
			<label for="nom">Nom *</label>
			<input type="text" id="nom" v-model="nom_client"
				placeholder="votre nom et prenom">
		</div>
		<div class="field">
			<label for="tel">Numero de teléphone *</label>
			<input type="text" v-model="tel1" id="tel" placeholder="votre numero de télephone">
		</div>
		<div class="field">
			<label for="tel2">Numero alternative</label>
			<input type="text" v-model="tel2" id="tel2" placeholder="votre numero de télephone">
		</div>
		<label class="logs" v-html="logs.slice(0, 256)"></label>
		<a v-if="!!new_date" :href="whatsapp_url" target="_blank" class="whatsapp_link">
			CONTINUER AVEC WHATSAPP
		</a>
		<img src="" alt="">
		<div class="buttons" id="book">
			<button @click="reserver">Demander</button>
		</div>
	</div>
</div>
</template>
<script>
import axios from "axios"
export default{
	props:["date"],
	data(){
		return {
			nom_client:"", tel2:"", tel1:"", logs:"", new_date:""
		}
	},
	computed:{
		tel_client(){
			let tel1 = this.tel1.length>5?this.tel1:""
			let tel2 = this.tel2.length>5?" / "+this.tel2:""
			return tel1 + tel2 
		},
		whatsapp_url(){
			return `https://api.whatsapp.com/send?phone=
			${this.$store.state.current_salle.owner.username}
			&text=Je m'appele ${this.nom_client}. Je veux reserver la salle 
			${this.$store.state.current_salle.nom} pour la date du ${this.new_date}`
		}
	},
	methods:{
		close(){
			this.logs = ""
			this.tel1 = ""
			this.tel2 = ""
			this.nom_client = ""
			this.$emit('close')
		},
		reserver(){
			this.logs = "demande en cours..."
			if(this.tel_client.length<6){
				this.logs = "vous devez donner un numero valide"
				return;
			}
			let salle = this.$store.state.current_salle;
			let data = {
				"date": this.date,
				"nom_client": this.nom_client,
				"tel_client": this.tel_client
			}
			let message = `Votre demande a été soumise.<br>Pour plus d'informations veuillez nous contacter<b>`
			axios.post(this.url+`/salle/${salle.id}/allouer/`, data)
			.then((response) => {
				this.logs = message
				this.new_date = response.data.date
				book.style.display = 'none'
				// window.setTimeout(()=>this.$emit("close"), 30_000)
				try {salle.allocation.push(response.data)} catch(e) {}
			}).catch((error) => {
			  console.error(error);
			  this.logs = `Reservation échouée`
			});
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
	font-weight: 500;
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 
}
button{
	margin-top: 20px;
}
.whatsapp_link{
	background-color: #5b5;
	color: white;
	font-weight: 600;
	margin: 10px 10px 0 10px;
	padding: 7px;
	display: block;
	text-align: center;
	border-radius: 5px;
	text-decoration: none;
}
</style>