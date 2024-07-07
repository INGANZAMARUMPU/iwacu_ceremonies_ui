<template>
  <div class="page">
    <h2>Edition de la salle {{ current_salle?.nom }}</h2>
    <Indicator :labels="['identification', 'images', 'Fin']" :current="page"/>
    <div class="container" v-if="!!current_salle">
      <section v-show="page == 0">
        <div class="fields">
          <div class="field">
            <label for="nom">Nom</label>
            <input id="nom" v-model="current_salle.nom" type="text" placeholder="Nom de la salle"/>
          </div>
          <div class="field">
            <label for="lieu">Province</label>
            <input id="lieu" v-model="current_salle.province" type="text" placeholder="Province"/>
          </div>
          <div class="field">
            <label for="lieu">Lieu</label>
            <input type="text" v-model="current_salle.lieu" placeholder="Commune, Quartier et Rue"/>
          </div>
          <div class="field">
            <label for="taille_parking">Taille du taille_parking</label>
            <input id="taille_parking" v-model="current_salle.taille_parking" type="number" placeholder="Combien de voitures"/>
          </div>
          <div class="field">
            <label for="places">Nombre de places</label>
            <input id="places" v-model="current_salle.places" type="number" min="30" max="1000" placeholder="Capacité de la salle"/>
          </div>
          <div class="field">
            <label for="prix">Prix</label>
            <input id="prix" v-model="current_salle.prix" type="number" min="50000" placeholder="Prix de location"/>
          </div>
        </div>
        <div class="field">
          <label for="details">Details:</label>
          <textarea rows="7" id="details" v-model="current_salle.details"
            placeholder="Les autres details sur cette salle">
          </textarea>
        </div>
        <label class="logs">{{ logs }}</label>
        <button class="btn" @click="upload">SUIVANT</button>
      </section>
      <section v-show="page == 1">
        <gallery :item="current_salle" name="salle" upload_url="/gallery-salles/"/>
        <button class="btn" @click="upload_images">SUIVANT</button>
      </section>
      <section v-show="page == 2">
        <div class="field">
          <label for="ajouts">Valeurs ajoutées</label>
          <textarea cols="30" rows="10" id="ajouts" v-model="current_salle.ajouts"
            placeholder="autres choses que le client beneficie">
          </textarea>
        </div>
        <div class="field">
          <label for="obligations">Obligations</label>
          <textarea cols="30" rows="10" id="obligations" v-model="current_salle.obligations"
            placeholder="ce que vous obligez aux clients">
          </textarea>
        </div>
        <label class="logs">{{ logs }}</label>
        <button class="btn" @click="upload">ENREGISTER LA SALLE</button>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Indicator from "../components/indicator.vue";
import Gallery from "../components/gallery.vue";

export default {
  components: { Indicator, Gallery },
  data() {
    return {
      current_salle: null,
      logs: "",
      img: null,
      page: 1
    };
  },
  watch:{
    "$store.state.current_salle"(new_val){
      this.current_salle = new_val
    }
  },
  methods: {
    forwardTo(component) {
      this.$refs[component].click();
    },
    load(event) {
      this.logs = "";
      let placeholder = document.getElementById("img");
      let raw = event.target.files[0];
      if (raw.size > 350_000) {
        this.logs = "L'image doit être inferieur à 350ko";
        return;
      }
      this.img = raw;
      var reader = new FileReader();
      reader.readAsDataURL(raw);
      reader.onload = function (event) {
        placeholder.src = event.target.result;
      };
    },
    upload() {
      this.logs = "";
      let data = {
        "nom": this.nom,
        "province": this.lieu,
        "lieu": this.lieu,
        "taille_parking": this.taille_parking,
        "places": this.places,
        "valeurs_ajoutees": this.ajouts,
        "obligations": this.obligations,
        "prix": this.prix,
        "details": this.details
      }
      if(!this.$store.state.current_salle){
        axios.post(this.url + "/salle/", data, this.headers)
        .then((response) => {
          this.$store.state.current_salle = response.data;
          this.page += 1
        }).catch((error) => {
          if (error.response.status == 403) {
            this.refreshToken(this.upload);
          } else {
            this.logs = error.response.data;
            console.error(error);
          }
        });
      } else {
        let salle = this.$store.state.current_salle
        axios.put(this.url + `/salles/${salle.id}/`, data, this.headers)
        .then((response) => {
          this.$store.state.current_salle = response.data;
          this.page += 1
        }).catch((error) => {
          if (error.response.status == 403) {
            this.refreshToken(this.upload);
          } else {
            this.logs = error.response.data;
            console.error(error);
          }
        });
      }
    },
    fetchItem(id){
      axios.get(this.url + `/salles/${id}/`, this.headers)
      .then((response) => {
        this.$store.state.current_salle = response.data;
        this.current_salle = response.data;
      }).catch((error) => {
        if (error.response.status == 403) {
          this.refreshToken(() => this.fetchItem(id));
        } else {
          this.logs = error.response.data;
          console.error(error);
        }
      });
    }
  },
  mounted() {
    let salle_id = this.$route.params.salle_id
    if(salle_id != this.$store.state.current_salle?.id){
      this.$store.state.current_salle = null
      this.fetchItem(salle_id)
    } else {
      this.current_salle = this.$store.state.current_salle
    }
  },
};
</script>
<style scoped>
.page{
  width: 90%;
  max-width: 1080px;
  margin: 120px auto 20px auto;
}
.container{
  background-color: white;
  border-radius: 5px;
  margin: 30px 0 50px 0;
}
.logs {
  grid-column: 1 / span 2;
  text-align: center;
  color: red;
}
img {
  background-color: #ddd;
  width: 100%;
}
input {
  padding: 8px;
}
.btn {
  display: block;
  margin: 10px 0 10px auto;
  font-size: .9em;
}
input, textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 5px 0 22px 0;
  background: #F9F9F9;
  border-color: #DDD;
}
h2{
  margin: 10px 0 20px 0;
  color: var(--primary);
}
@media only screen and (max-width: 600px) {
  .fields{
    grid-template-columns: 1fr 1fr;
  }
}
</style>
