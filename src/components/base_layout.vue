<template>
<div class="base_layout">
	<div class="top">
		<div class="search">
			<div class="field">
				<label for="search">Recherche</label>
				<input type="text" id="search" placeholder="nom de la salle ou quatrier">
			</div>
			<div class="field">
				<label for="prix">Prix</label>
				<select name="prix" id="prix">
					<option v-for="i in 5" :value="i">
						{{(i-1)*500000+50000}}  à {{i*500000}} Fbu
					</option>
				</select>
			</div>
			<div class="field">
				<label for="localite">Place</label>
				<select name="localite" id="localite">
					<option v-for="quartier in quartiers" :value="quartier">
						{{quartier}}
					</option>
				</select>
			</div>
			<button type="">Rechercher</button>
		</div>
	</div>
	<hr style="margin: 10px 0">
	<div class="content">
		<div style="margin: 10px 0">
			{{ $store.state.salles.length }} items found
		</div>
		<div class="flex">
			<div class="left">
			</div>
			<div class="slot">
				<slot></slot>
			</div>
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
.content, .search{
	width: 100%;
	max-width: 1200px;
	overflow: hidden;
	margin: auto;
}
.search{
	display: flex;
	align-items: flex-end;
	justify-content: center;
}
.field, .search button{
	margin:5px;
}
.field *{
	display: block
}
.left{
	background: lightgray;
}
</style>