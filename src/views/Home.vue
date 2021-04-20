<template>
	<div class="home-form">
		<label for="prix">Choisissez le prix</label>
		<select name="prix" id="prix">
			<option value="1">50 000 à 500 000 Fbu</option>
			<option value="2">550 000 à 1 000 000 Fbu</option>
			<option value="3">1 000 000 à 1 500 000 Fbu</option>
			<option value="4">1 500 000 à 2 000 000 Fbu</option>
			<option value="5">2 000 000 à 2 500 000 Fbu</option>
			<option value="6">2 500 000 à 3 000 000 Fbu</option>
			<option value="7">plus de 3 000 000 Fbu</option>
		</select>
		<label for="lieux">Dans quelle localité</label>
		<input type="text" id="lieux" placeholder="ex: Province, quartier, commune">
		<button>Trouver</button>
	</div>
</template>
<script>
	
</script>
<style scoped>
.home-form{
	width: 400px;
	min-width: 300px;
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
button{
	margin-top: 20px;
}
</style>