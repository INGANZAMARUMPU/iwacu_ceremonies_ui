<template>
    <div id="nav">
    	<div class="logo">
    		<router-link to="/">AGATUTU</router-link>
    	</div>	
    	<div class="left">
    		<router-link to="/create" class="menu">Ajouter</router-link>
    		<router-link to="/login" class="menu">S'abonner</router-link>
    		<button>Se Connecter</button>
    	</div>
    </div>
</template>
<script>
	
</script>
<style>
#nav{
	background-color: var(--primary);
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
}
#nav *{
	color: var(--white);
}
.logo{
	margin-left: 8px;
}
.menu{
	padding: 8px;
	margin: 8px;
}
.menu:hover{
	background-color: var(--primary-hover);
}
</style>