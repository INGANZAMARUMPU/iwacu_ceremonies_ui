<template>
<div class="content">
	<div class="steps">
		<div class="item">
			<div>
			<img src="/static/logo.png" width="96" />
			</div>
			<div>Vous pouvez nous visiter à Bujumbura Centre-Ville Boulevard de l'UPRONA</div>
			<div>
				<div class="hard">+257 71 208 396</div>
				<div>
					<a href="mailto:management@figibook.com">management@figibook.com</a>
				</div>
			</div>
		</div>
		<div class="item">
			<h3>SERVICES</h3>
			<div>
				<a href="salles.figibook.com">Salles de réception</a>
			</div>
			<div>
				<a href="voitures.figibook.com">Location de Voiture</a>
			</div>
			<div>
				<a href="softs.figibook.com">Conception Logiciels</a>
			</div>
			<div>
				<a href="location.figibook.com">Location Appartement</a>
			</div>
			<div>
				<a href="ecommerce.figibook.com">e-commerce</a>
			</div>
		</div>
		<div class="item">
			<h3>NEWSLETTER</h3>
			<div>
				<input type="email" name="" placeholder="Votre Addresse Email" id="">
			</div>
			<h3>NOUS SUIVRE</h3>
			<div class="social">
				<a href="https://facebook.com">
					<i class="pi pi-facebook" style="color:var(--primary); font-size: 1.8em;"></i>
				</a>
				<a href="https://twitter.com">
					<i class="pi pi-twitter" style="color:var(--primary); font-size: 1.8em;"></i>
				</a>
				<a href="https://instagram.com">
					<i class="pi pi-instagram" style="color:var(--primary); font-size: 1.8em;"></i>
				</a>
			</div>
		</div>
	</div>
	<hr>
	<div style="text-align: center; padding: 20px 0;">
		© 2024 FiGiBook, All Rights Reserved. Developed and Designed by
		<a href="github.com/inganzamarumpu" style="text-decoration: underline; color: cornflowerblue">INGANZAMARUMPU</a>
	</div>
</div>
</template>
<script>
export default{
};
</script>
<style scoped>
.content{
	width: 90%;
	max-width: 1080px;
	padding-bottom: 40px;
	margin: auto;
}
.steps{
	display: flex;
	justify-content: space-between;
	gap: 40px;
	margin-bottom: 30px;
}
.item{
	min-width: 30%;
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.item input{
	width: 100%;
}
.hard{
	color: black;
}
.social{
	display: flex;
	gap: 20px
}
</style>