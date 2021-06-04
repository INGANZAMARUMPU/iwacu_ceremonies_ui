<template>
    <div id="nav">
    	<div class="logo">
    		<router-link to="/">FiGiBook.com</router-link>
    	</div>	
    	<div class="left">
    		<center>
				<div  v-if="!!active_user">
					<router-link to="/create" class="menu">
						Mes Salles
					</router-link>
					<router-link to="/create" class="menu">
						Ajouter une Salle
					</router-link>
					<button @click="$store.state.user=null">Se Deconnecter</button>
				</div>
				<div v-else>
					<router-link to="/register" class="menu">
						S'abonner
					</router-link>
					<router-link  to="/login" v-slot="{ href, navigate }">
						<button @click="navigate">Se Connecter</button>
					</router-link>
				</div>
    		</center>
    	</div>
    </div>
</template>
<script>
export default {
};
</script>
<style scoped>
#nav{
	background-color: var(--white);
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding: 0 10px; 
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 5;
	border-bottom: 2px solid var(--primary);
	position: sticky;
}
#nav *{
	color: var(--primary);
}
button{
	color: var(--white)!important;
}
.menu{
	padding: 8px;
}
.menu:hover{
	background-color: var(--primary-hover);
	color: var(--white)!important;
}
.logo *{
	font-size: 1.5em;
	font-weight: 700;
	font-family: monospace;
}
@media only screen and (max-width: 400px) {
	#nav{
		display: block;
		position: relative;
		height: 80px;
	}
	.logo{
		display: flex;
		justify-content: center;
		padding: 10px;
	}
}
</style>