<template>
  <h1>Trouver votre salle de réception</h1>
  <div class="body">
    <div style="margin-bottom: 10px;">
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
      <select class="responsive">
        <option value="">Places</option>
        <option value="1">200 personnes ou moins</option>
        <option value="1">400 personnes ou moins</option>
        <option value="1">600 personnes ou moins</option>
        <option value="1">800 personnes ou moins</option>
        <option value="1">1000 personnes ou moins</option>
      </select>
      <button @click="search" class="btn">
        <i class="pi pi-search" style="color:whitesmoke"></i>
        Trouver
      </button>
      <select v-if="show_all">
        <option value="">Parking</option>
        <option value="1">5 voitures ou moins</option>
        <option value="1">10 voitures ou moins</option>
        <option value="1">30 voitures ou moins</option>
        <option value="1">40 voitures ou moins</option>
        <option value="1">50 voitures ou moins</option>
      </select>
      <select v-if="show_all">
        <option value="">Places</option>
        <option value="1">200 personnes ou moins</option>
        <option value="1">400 personnes ou moins</option>
        <option value="1">600 personnes ou moins</option>
        <option value="1">800 personnes ou moins</option>
        <option value="1">1000 personnes ou moins</option>
      </select>
      <select v-if="show_all">
        <option value="">Décor</option>
        <option value="1">Avec Décor</option>
        <option value="1">Sans Décor</option>
      </select>
    </div>
    <a href="#" class="options default" v-if="!show_all" @click="show_all = !show_all">
      <i class="pi pi-plus" style="color:var(--primary)"></i>
      Autres filtres
    </a>
    <a href="#" class="options default" v-else @click="show_all = !show_all">
      <i class="pi pi-minus" style="color:var(--primary)"></i>
      Moins de filtres
    </a>
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
  background-color: #eeee;
  padding: 40px 40px 30px 40px;
  border-radius: 5px;
}
.body div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
.body div > *{
  flex-grow: 1;
}
.options{
  padding-top: 10px;
}
a{
  color: var(--primary);
}
h1{
	font-size: 3em;
	color: white;
	text-align: center;
	padding-bottom: 20px;
}
@media only screen and (max-width: 900px) {
  .body div{
    gap: 10px;
    grid-template-columns: 1fr;
  }
  .body{
    padding: 20px 20px 15px 20px;
    margin: 0 20px;
  }
  h1, .body{
    margin: 0 20px;
  }
  h1{
    font-size: 2em;
  }
}
</style>