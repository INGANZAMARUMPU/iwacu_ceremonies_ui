<template>
  <div class="page">
    <SearchView/>
    <div class="items">
      {{ $store.state.salles?.count || 0 }} Resultats trouvés
      <Item v-for="salle in salles" :item="salle"/>
    </div>
  </div>
</template>
<script>
import SearchView from "@/components/search_view"
import Item from "@/components/item"
export default {
  components:{
    SearchView, Item
  },
  data() {
    return {
      salles: this.$store.state.salles?.results
    };
  },
  watch: {
    "$store.state.salles.results"(new_val){
      this.salles = new_val
    },
    "$route.path"(new_val){
      this.display(new_val)
    }
  },
  methods: {
    display(url){
      if(url == "/mine"){
        this.salles = this.$store.state.salles?.results.filter(x => this.active_user.id == x.owner)
        this.fetchSalles(`/api/salles/?owner=${this.active_user.id}`, result => this.salles = result)
      } else {
        this.salles = this.$store.state.salles?.results
      }
    },
  },
  mounted() {
		if(this.$store.state.salles.results?.length == 0){
      if(this.$route.path == "/mine"){
        this.fetchSalles(`/api/salles/?owner=${this.active_user.id}`, result => this.salles = result)
      } else {
        this.fetchSalles("/api/salles/", result => this.salles = result)
      }
		} else {
      this.display(this.$route.path)
    }
  },
};
</script>
<style scoped>
.page{
  width: 90%;
  max-width: 1080px;
  margin: 80px auto 20px auto;
}
.items{
  background-color: var(--white);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media only screen and (max-width: 600px) {
  .body{
    padding: 10px;
  }
}
</style>
