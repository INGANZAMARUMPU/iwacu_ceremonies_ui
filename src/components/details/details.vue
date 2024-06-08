<template>
<div class="parent">
	<h3>Description</h3>
	<div class="elements">
		<div>
			<div class="icon"><i class="pi pi-car"></i></div>
			<div>
			<div class="key">Taille du parking</div>
			<div class="value">{{ salle.taille_parking }} voitures</div>
			</div>
		</div>
		<div>
			<div class="icon"><i class="pi pi-users"></i></div>
			<div>
			<div class="key">Nombre de places</div>
			<div class="value">{{ salle.places }} personnes</div>
			</div>
		</div>
		<div v-for="item in salle.produits">
			<div class="icon"><i class="pi pi-sparkles"></i></div>
			<div>
			<div class="key">{{ item.category }}</div>
			<div class="value">{{ money(item.prix) }} FBU</div>
			</div>
		</div>
	</div>
	<div class="descr">{{ salle.details }}</div>
	<h3>Quelle est la date de votre evenement?</h3>
	<DatePicker v-model="today" style="width: 100%!important"/>
	<button>
		Reserver
	</button>
</div>
</template>
<script>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default{
	components:{ DatePicker },
	props:[ "salle" ],
	data(){
		return {
			today: new Date(),
		}
	}
}
</script>
<style scoped>
.parent{
	background-color: white;
	border-radius: 5px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 30px;
}
.elements{
	display: flex;
	gap: 40px;
}
.elements > div{
	display: flex;
	gap: 20px;
	align-items: center;
}
.icon{
	font-size: 3em;
	font-weight: 100;
}
.key{
	color: var(--primary)
}
.descr{
	line-height: 2em;
}
</style>