<template>
<div class="salle" @click="details(item.id)">
	<div class="left">
		<img :src="item.photo_principal">
	</div>
	<div class="right">
		<h3 style="margin:10px 0">{{ item.nom }}</h3>
		<div class="infos">
			<div class="details">
				<div><b>lieu:</b> {{ item.lieu }}</div>
				<div><b>places:</b> {{ item.no_places }}</div>
				<div><b>parkings:</b> {{ item.taille_parking }}</div>
				<div>
					<b>prix:</b>
					<span>
						varie entre
						<b>{{ item.prix_min }}</b> et 
						<b>{{ item.prix_max }}</b>
					</span>
				</div>
			</div>
			<button @click="reserver(item.id)">Reserver</button>
		</div>
	</div>
</div>
</template>
<script>
export default{
	props:["item"],
	data(){
		return {
			date:null
		}
	},
	methods:{
		details(id){
			this.$router.push(`/details/${id}`)
		},
		reserver(id){
			this.$router.push(`/details/${id}#calendar`)
		}
	}
};
</script>
<style scoped>
.salle{
	display: flex;
	width: 100%;
	padding: 10px;
	overflow: hidden;
	height: 260px;
	border-top: 2px solid gray;
}
.left{
	max-height: 260px;
	width: 400px;
	overflow: hidden;
	border-radius: 5px;
}
img{
	width: 100%;
	min-height: 100%;
}
.right{
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-left: 10px;
	position: relative;
}
li{
	margin-left: 20px;
}
a{
    color: blue;
    text-decoration: underline;
}
.check_date{
	width: 200px;
	margin: 10px;
}
.check_date *{
	width: 100%;
}
.infos{
	display: flex;
	flex-direction: column;
	height: 100%;
}
.details{
	flex-grow: 1;
}
button{
	background-color: var(--white);
	border: 1px solid var(--primary);
	color: var(--primary);
	max-width: 250px;
	margin-left: auto;
}
button:active{
	background-color: var(--primary);
	color: var(--white);
}
@media only screen and (max-width: 600px) {
	.salle{
		flex-direction: column;
		height: inherit;
	}
	.left{
		width: 100%;
		height: inherit;
		margin: auto;
	}
	button{
		margin: auto;
	}
}
</style>