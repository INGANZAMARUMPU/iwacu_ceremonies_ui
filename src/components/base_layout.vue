<template>
<div class="base_layout">
	<div class="top">
		<div class="search">
			<input type="text" placeholder="nom de la salle ou quatrier">
			<button type="">Rechercher</button>
		</div>
		<div>
			0 items found
		</div>
	</div>
	<hr style="margin: 20px 0">
	<div class="flex">
		<div class="left">
			<div class="filter">
				<h3>les prix</h3>
				<hr>
				<div class="field" v-for="i in 5">
					<input type="checkbox" :id="'chk_'+i">
					<label :for="'chk_'+i"> {{(i-1)*500000+50000}}  à {{i*500000}} Fbu</label>
				</div>
				<div class="field">
					<input type="checkbox" value="50 000 à 500 000 Fbu" id="chk_more">
					<label for="more"> plus de 2500000 Fbu</label>
				</div>
				<button type="">Filtrer</button>
			</div>
			<div class="filter">
				<h3>les localités</h3>
				<hr>
				<div class="field" v-for="quartier in quartiers">
					<input type="checkbox" :id="quartier">
					<label :for="quartier"> {{ quartier }}</label>
				</div>
				<button type="">Filtrer</button>
			</div>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</div>
</template>
<script>
export default{
	computed:{
		quartiers(){
			return ["Gihosha", "kamenge", "Ngagara", "Kinama", "Rohero", "Nyakabiga", "Buwiza", "Buyenzi", "Musaga", "Kanyosha"]
		}
	}
};
</script>
<style scoped>
.base_layout{
	position: absolute;
	padding-top: 30px;
	padding: 20px;
	height: calc(100% - 50px);
	width: 100%;
	overflow: hidden;
}
.search{
	display: flex;
}
.search input{
	flex-grow: 1;
	font-size: 1.2em;
}
.search button{
	font-size: 1.2em;
}
.flex{
	display: flex;
	align-items: flex-start;
	height: calc(100% - 90px);
	overflow: hidden;
}
.left{
	min-width: 250px;
	margin-right: 20px;
	height: 100%;
	overflow-y: auto;
}
.content{
	width: 100%;
	height: 100%;
	overflow: hidden auto;
	padding: 20px;
}
.filter{
	margin-bottom: 20px;
}
.filter button{
	width: 100%;
}
@media only screen and (max-width: 860px) {
	.base_layout{
		position: relative;
	}
	.left{
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.filter{
		margin-left: 20px;
	}
	.flex{
		flex-direction: column;
	}
}
</style>