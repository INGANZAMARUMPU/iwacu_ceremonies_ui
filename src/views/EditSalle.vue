<template>
  <div class="page">
    <h2>Edition de la salle {{ nom }}</h2>
    <Indicator :labels="['identification', 'images', 'Fin']" :current="page"/>
    <div class="container">
      <section class="section" v-show="page == 0">
        <label class="logs">{{ logs }}</label>
        <div class="fields">
          <div class="field">
            <label for="nom">Nom</label>
            <input id="nom" v-model="nom" type="text" placeholder="Nom de la salle"/>
          </div>
          <div class="field">
            <label for="lieu">Province</label>
            <input id="lieu" v-model="province" type="text" placeholder="Province"/>
          </div>
          <div class="field">
            <label for="lieu">Lieu</label>
            <input type="text" v-model="lieu" placeholder="Commune, Quartier et Rue"/>
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
          <textarea rows="7" id="details" v-model="details"
            placeholder="Les autres details sur cette salle">
          </textarea>
        </div>
        <label class="logs">{{ logs }}</label>
        <button class="btn" @click="upload">SUIVANT</button>
      </section>
      <section v-show="page == 1">
        <div class="pics">
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
        </div>
        <label class="logs">{{ logs }}</label>
        <button class="btn" @click="upload_images">SUIVANT</button>
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
      lieu: "",
      logs: "",
      img1: null, img2: null, img3: null, img4: null, img5: null,
      page: 0
    };
  },
  watch:{
    "$store.state.current_salle":{
      deep:true,
      handler(new_val){
      }
    }
  },
  methods: {
    forwardTo(component) {
      this.$refs[component].click();
    },
    load(event, img_id) {
      this.logs = "";
      let placeholder = document.getElementById(img_id);
      let raw = event.target.files[0];
      if (raw.size > 350_000) {
        this.logs = "L'image doit être inferieur à 350ko";
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
      let data = {
        "nom": this.nom,
        "province": this.lieu,
        "lieu": this.lieu,
        "taille_parking": this.parking,
        "no_places": this.places,
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
        axios.put(this.url + `/salle/${salle.id}/`, data, this.headers)
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
    upload_images() {
      this.logs = "";
      let form = new FormData();
      form.append("photo_principal", this.img1);
      form.append("photo_1", this.img2);
      form.append("photo_2", this.img3);
      form.append("photo_3", this.img4);
      form.append("photo_4", this.img5);

      axios.post(this.url + "/salle/", form, this.headers)
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
    this.nom = this.$store.state.current_salle?.nom
    this.parking = this.$store.state.current_salle?.parking
    this.places = this.$store.state.current_salle?.places
    this.ajouts = this.$store.state.current_salle?.ajouts
    this.obligations = this.$store.state.current_salle?.obligations
    this.prix = this.$store.state.current_salle?.prix
    this.details = this.$store.state.current_salle?.details
    this.province = this.$store.state.current_salle?.province
    this.lieu = this.$store.state.current_salle?.lieu
  },
  unmounted(){
    this.$store.state.current_salle = null
  }
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
