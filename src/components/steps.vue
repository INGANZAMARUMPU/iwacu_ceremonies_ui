<template>
<div class="parent">
	<div class="title">
		<h1>Les étapes</h1>
		<div>Seulement quelques clicks vous suffisent pour effectuer une reservation</div>
	</div>
	<div class="steps">
		<div class="item">
			<div class="number">1.</div>
			<h3>Filtez</h3>
			<div>Vous pouvez filter par prix, par localité, par nombre de places...</div>
		</div>
		<div class="item">
			<div class="number">2.</div>
			<h3>Choisissez</h3>
			<div>Selectionner une parmis les resultats que vous recevez</div>
		</div>
		<div class="item">
			<div class="number">3.</div>
			<h3>Réservez</h3>
			<div>Selectionnez la datte et demandez la reservation. Le reste on s'en charge!</div>
		</div>
	</div>
</div>
</template>
<script>
export default{
};
</script>
<style scoped>
.parent{
	background-color: white;
	padding: 20px
}
.title{
	padding: 10px 0 20px 0;
	text-align: center;
}
.steps{
	display: flex;
	justify-content: center;
	gap: 20px;
}
.item{
	max-width: 320px;
	text-align: center;;
}
.item > *{
	padding: 5px 0;
}
.number{
	font-size: 3em;
	font-weight: 100;
	color: var(--primary);
}
</style>