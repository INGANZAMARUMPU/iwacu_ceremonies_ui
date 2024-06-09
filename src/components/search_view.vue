<template>
  <div class="body">
    <input type="text" class="search" name="" placeholder="Rechercher">
    <div class="options">
      <select>
        <option value="">N'importe quel prix</option>
        <option value="1">50 000 à 500 000 Fbu</option>
        <option value="2">550 000 à 1 000 000 Fbu</option>
        <option value="3">1 000 000 à 1 500 000 Fbu</option>
        <option value="4">1 500 000 à 2 000 000 Fbu</option>
        <option value="5">2 000 000 à 2 500 000 Fbu</option>
        <option value="6">2 500 000 à 3 000 000 Fbu</option>
        <option value="7">plus de 3 000 000 Fbu</option>
      </select>
      <select>
        <option value="">N'importe quel endroit</option>
        <option value="1">50 000 à 500 000 Fbu</option>
        <option value="2">550 000 à 1 000 000 Fbu</option>
        <option value="3">1 000 000 à 1 500 000 Fbu</option>
        <option value="4">1 500 000 à 2 000 000 Fbu</option>
        <option value="5">2 000 000 à 2 500 000 Fbu</option>
        <option value="6">2 500 000 à 3 000 000 Fbu</option>
        <option value="7">plus de 3 000 000 Fbu</option>
      </select>
      <select>
        <option value="">Parking</option>
        <option value="1">5 voitures ou moins</option>
        <option value="1">10 voitures ou moins</option>
        <option value="1">30 voitures ou moins</option>
        <option value="1">40 voitures ou moins</option>
        <option value="1">50 voitures ou moins</option>
      </select>
      <select>
        <option value="">Places</option>
        <option value="1">200 personnes ou moins</option>
        <option value="1">400 personnes ou moins</option>
        <option value="1">600 personnes ou moins</option>
        <option value="1">800 personnes ou moins</option>
        <option value="1">1000 personnes ou moins</option>
      </select>
    </div>
    <button @click="search" class="btn">
      APPLIQUER LES FILTRES
    </button>
  </div>
</template>
<script>
export default{
  data(){
    return {
      show_all: false
    }
  },
  methods:{
    search(){
      this.$router.push("/list")
    }
  }
};
</script>
<style scoped>
.body{
  padding: 40px;
}
.search{
  width: 100%;
  margin-bottom: 20px;
}
.search, select, button{
  padding: 10px 20px;
}
.search, select{
  background-color: var(--white);
}
.options{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
button{
  margin-top: 20px;
  width: 100%;
  font-size: .9em;
}
</style>