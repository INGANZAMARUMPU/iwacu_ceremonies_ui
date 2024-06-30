<template>
  <div class="page">
    <h2>Edition de la salle {{ nom }}</h2>
    <Indicator :labels="['identification', 'images', 'Fin']" :current="page" @click="page++"/>
    <div class="container">
      <section class="section" v-show="page == 0">
        <label class="logs">{{ img_logs }}</label>
        <div class="field">
          <label for="nom">Nom</label>
          <input id="nom" v-model="nom" type="text" placeholder="Nom de la salle"/>
        </div>
        <div class="fields">
          <div class="field">
            <label for="lieu">Lieu</label>
            <input id="lieu" v-model="province" type="text" placeholder="Province"/>
          </div>
          <div class="field">
            <label for="lieu">Lieu</label>
            <input type="text" v-model="commune" placeholder="Commune" />
          </div>
          <div class="field">
            <label for="lieu">Lieu</label>
            <input type="text" v-model="quartier" placeholder="Quartier, Rue"/>
          </div>
          <div class="field">
            <label for="parking">Taille du parking</label>
            <input id="parking" v-model="parking" type="number" placeholder="Combien de voitures"/>
          </div>
          <div class="field">
            <label for="places">Nombre de places</label>
            <input id="places" v-model="places" type="number" min="30" max="1000" placeholder="Capacité de la salle"/>
          </div>
          <div class="field">
            <label for="prix">Prix</label>
            <input id="prix" v-model="prix" type="number" min="50000" placeholder="Prix de location"/>
          </div>
        </div>
        <div class="field">
          <label for="details">Details:</label>
          <textarea cols="30" rows="10" id="details" v-model="details"
            placeholder="Les autres details sur cette salle">
          </textarea>
        </div>
        <label class="logs">{{ logs }}</label>
        <button class="btn" @click="upload">SUIVANT</button>
      </section>
      <section class="pics" v-show="page == 1">
        <div class="mainpic">
          <img src="/static/img_placeholder.png" id="img1" @click="forwardTo('img1')"/>
        </div>
        <div class="altpic">
          <img src="/static/img_placeholder.png" id="img2" @click="forwardTo('img2')"/>
          <img src="/static/img_placeholder.png" id="img3" @click="forwardTo('img3')"/>
          <img src="/static/img_placeholder.png" id="img4" @click="forwardTo('img4')"/>
          <img src="/static/img_placeholder.png" id="img5" @click="forwardTo('img5')"/>
        </div>
        <input type="file" ref="img1" @change="(e) => load(e, 'img1')" accept=".jpg,.jpeg,.gif,.png"/>
        <input type="file" ref="img2" @change="(e) => load(e, 'img2')" accept=".jpg,.jpeg,.gif,.png"/>
        <input type="file" ref="img3" @change="(e) => load(e, 'img3')" accept=".jpg,.jpeg,.gif,.png"/>
        <input type="file" ref="img4" @change="(e) => load(e, 'img4')" accept=".jpg,.jpeg,.gif,.png"/>
        <input type="file" ref="img5" @change="(e) => load(e, 'img5')" accept=".jpg,.jpeg,.gif,.png"/>
        <label class="logs">{{ logs }}</label>
        <button class="btn" @click="upload">SUIVANT</button>
      </section>
      <section v-show="page == 2">
        <div class="field">
          <label for="ajouts">Valeurs ajoutées</label>
          <textarea cols="30" rows="10" id="ajouts" v-model="ajouts"
            placeholder="autres choses que le client beneficie">
          </textarea>
        </div>
        <div class="field">
          <label for="obligations">Obligations</label>
          <textarea cols="30" rows="10" id="obligations" v-model="obligations"
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
export default {
  components: { Indicator },
  data() {
    return {
      nom: "",
      parking: "",
      places: "",
      ajouts: "",
      obligations: "",
      prix: "",
      details: "",
      province: "",
      commune: "",
      quartier: "",
      logs: "",
      img_logs: "",
      img1: null,
      img2: null,
      img3: null,
      img4: null,
      img5: null,
      page: 0
    };
  },
  computed: {
    lieu() {
      return `${this.province} ${this.commune} ${this.quartier}`;
    },
  },
  methods: {
    forwardTo(component) {
      this.$refs[component].click();
    },
    load(event, img_id) {
      this.img_logs = "";
      let placeholder = document.getElementById(img_id);
      let raw = event.target.files[0];
      if (raw.size > 350_000) {
        this.img_logs = "L'image doit être inferieur à 350ko";
        return;
      }
      switch (img_id) {
        case "img1": this.img1 = raw; break;
        case "img2": this.img2 = raw; break;
        case "img3": this.img3 = raw; break;
        case "img4": this.img4 = raw; break;
        case "img5": this.img5 = raw; break;
        default: console.log("DONE"); break;
      }
      var reader = new FileReader();
      reader.readAsDataURL(raw);
      reader.onload = function (event) {
        placeholder.src = event.target.result;
      };
    },
    upload() {
      this.logs = "";
      let form = new FormData();
      form.append("nom", this.nom);
      form.append("lieu", this.lieu);
      form.append("taille_parking", this.parking);
      form.append("no_places", this.places);
      form.append("valeurs_ajoutees", this.ajouts);
      form.append("obligations", this.obligations);
      form.append("prix", this.prix);
      form.append("details", this.details);
      form.append("photo_principal", this.img1);
      form.append("photo_1", this.img2);
      form.append("photo_2", this.img3);
      form.append("photo_3", this.img4);
      form.append("photo_4", this.img5);

      axios
        .post(this.url + "/salle/", form, this.headers)
        .then((response) => {
          alert("la salle a été ajoutée");
          this.$store.state.salles.push(response.data);
          this.$router.push("/create");
        })
        .catch((error) => {
          if (error.response.status == 403) {
            this.refreshToken(this.upload);
          }
          this.logs = error.response.data;
          console.error(error);
        });
    },
  },
  mounted() {
    if (window.screen.width <= 400) window.scrollBy(0, 500);
    else window.scrollBy(0, 200);
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
}
.pics {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  margin-bottom: 20px
}
.altpic {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
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
input[type="file"] {
  display: none;
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
