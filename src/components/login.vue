<template>
<div class="parent" @click="$store.state.login_shown=false">
	<div class="body" @click.stop>
		<div class="title">
			<div :class="{'active': active=='login'}" @click="active='login'">
				Se connecter
			</div>
			<div :class="{'active': active=='register'}" @click="active='register'">
				Creer un compte
			</div>
		</div>
		<div class="form" v-if="active=='login'">
          <div class="field">
            <label for="username">Nom d'utilisateur</label>
            <input type="text" v-model="username" placeholder="Nom d'utilisateur" />
          </div>
          <div class="field">
            <label for="password">Mot de passe</label>
            <input :type="pass_shown?'text':'password'"
				v-model="password" placeholder="Mot de passe"/>
			<span class="show" @click="pass_shown=!pass_shown">
				<i class="pi pi-eye-slash" v-if="pass_shown"></i>
				<i class="pi pi-eye" v-else></i>
			</span>
          </div>
		  <button class="btn" @click="login">Se connecter</button>
		</div>
		<div class="form" v-else>
          <div class="field">
            <label for="username">Nom d'utilisateur</label>
            <input type="text" v-model="username" placeholder="Nom d'utilisateur" />
          </div>
          <div class="field">
            <label for="first_name">Nom de Famille</label>
            <input type="text" v-model="first_name" placeholder="Nom de Famille" />
          </div>
          <div class="field">
            <label for="last_name">Prenom</label>
            <input type="text" v-model="last_name" placeholder="Prenom" />
          </div>
          <div class="field">
            <label for="password">Mot de passe</label>
            <input :type="pass_shown?'text':'password'"
				v-model="password" placeholder="Mot de passe"/>
			<span class="show" @click="pass_shown=!pass_shown">
				<i class="pi pi-eye-slash" v-if="pass_shown"></i>
				<i class="pi pi-eye" v-else></i>
			</span>
          </div>
		  <button class="btn" @click="upload">Se connecter</button>
		</div>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return {
			active: "login",
			pass_shown: false
		}
	},
	methods:{
		login(){
		this.is_loading=true
		this.logs = ""
		axios.post(this.url+"/login/", 
			{"username": this.username, "password":this.password}
		).then((response) => {
			this.$store.state.user = response.data
			this.$store.state.login_shown=false
			this.$store.state.alert = {
				type:"success", message:`Bienvenue sur FiGiBook, ${this.username}!`
			}
		}).catch((error) => {
			console.log(error)
			if(!!error.response){
				this.$store.state.alert = {
					type:"danger", message:this.cleanString(error.response.data)
				}
			}
		}).finally(()=>this.is_loading=false)
		},
	}
}
</script>
<style scoped>
@keyframes submenu {
	from {
    margin-top: -20px;
    opacity: .5;
	}
	to {
    margin-top:0;
    opacity: 1;
	}
}
.parent{
	position: fixed;
	top:0;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background-color: #0005;
	z-index: 11;
}
.body{
	width: 300px;
	margin: 80px auto 0 auto;
}
.form{
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	animation: submenu .5s;
}
.title{
	display: flex;
	font-size: 1.2em;
	cursor: default;
}
.title > *{
	color: #DDD;
	padding: 10px 0;
	flex-grow: 1;
	text-align: center;
	margin-bottom: 5px;
}
.active{
	color: #fff;
}
.active::after{
	content:"";
	display: block;
	width: 80px;
	height: 2px;
	background-color: white;
	position: relative;
	bottom: -10px;
	margin: auto;
}
label{
	margin-bottom: 5px;
}
.field{
	position: relative;
}
.show{
	position: absolute;
	bottom: 8px;
	right: 10px;
	width: 20px;
	text-align: center;
}
</style>