<template>
<div class="home">
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
        <button @click="search">Trouver</button>
      </div>
      <a href="#" class="options" v-if="!show_all" @click="show_all = !show_all">
        Autres filtres
      </a>
      <div v-if="show_all" style="margin: 25px 0 10px 0;">
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
        <select>
          <option value="">Décor</option>
          <option value="1">Avec Décor</option>
          <option value="1">Sans Décor</option>
        </select>
      </div>
      <a href="#" class="options" v-if="show_all" @click="show_all = !show_all">
        Moins de filtres
      </a>
    </div>
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
  h1{
    margin: 60px auto;
    font-weight: 300;
    font-size: 3em;
    color: #CCC;
  }
  .form .body{
    background-color: #eeee;
    padding: 40px 40px 30px 40px;
    border-radius: 5px;
  }
  .form .body div{
    display: flex;
    gap: 30px;
  }
  .form .body div > *{
    width: 240px;
  }
  .options{
    padding-top: 10px;
  }
  a{
    color: var(--primary);
  }
  </style>