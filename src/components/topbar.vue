<template>
    <div id="nav">
    	<div class="logo">
    		<router-link to="/">AGATUTU</router-link>
    	</div>	
    	<div class="left">
    		<router-link to="/create" class="menu">Ajouter</router-link>
    		<router-link to="/register" class="menu">S'abonner</router-link>
    		<button @click="login">Se Connecter</button>
    	</div>
    </div>
</template>
<script>
export default {
	methods:{
		login(){
			this.$router.push("/login")
		}
	}
};
</script>
<style scoped>
#nav{
	background-color: var(--primary);
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding: 0 10px; 
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 5;
}
#nav *{
	color: var(--white);
}
.menu{
	padding: 8px;
}
.menu:hover{
	background-color: var(--primary-hover);
}
@media only screen and (max-width: 400px) {
	#nav{
		display: block;
		position: relative;
		height: 70px;
	}
}
</style>