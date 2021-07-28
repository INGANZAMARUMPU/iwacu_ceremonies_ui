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
					<option value="">----</option>
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
		<div class="flex">
			<div class="left">
				<center><h4>Nos Suggestions</h4></center>
				<div class="items">
					<SuggestionItem v-for="suggestion in $store.state.suggestions"
						:key="suggestion.salle.id" :item="suggestion.salle"/>
				</div>
			</div>
			<div class="slot">
				<slot></slot>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import SuggestionItem from "./suggestion_item"
export default{
	components:{SuggestionItem, },
	computed:{
		quartiers(){
			return ["Gihosha", "kamenge", "Ngagara", "Kinama", "Rohero", "Nyakabiga", "Buwiza", "Buyenzi", "Musaga", "Kanyosha"]
		}
	},
	methods:{
		fetchSuggestions(){
			axios.get(this.url+"/salle/suggestions/")
			.then((response) => {
				this.$store.state.suggestions = response.data;
				this.$store.state.images = response.data.map(x => x.salle.photo_principal)
			}).catch((error) => {
				console.error(error);
			})
		}
	},
	mounted(){
		if(this.$store.state.suggestions.length<2){
			this.fetchSuggestions()
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
.content{
	padding: 0 10px;
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
.flex{
	display: flex;
    align-items: flex-start;
}
.left{
	background: #eee;
	padding: 10px;
	border-radius: 2px;
	margin-right: 20px;
}
.slot{
	flex-grow: 1;
}
@media only screen and (max-width: 800px) {
	.flex{
		flex-direction: column-reverse;
	}
	.items{
		white-space: nowrap;
		width: 100%;
		overflow-y: auto;
	}
	.items *{
		display: inline-block;
		width: 300px;
	}
	.left{
		width: 100%;
	}
	.items *{
		margin: 5px;
	}
	.search{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10px;
		padding-right: 10px;
	}
	.search *{
		width: 100%;
	}
}
</style>