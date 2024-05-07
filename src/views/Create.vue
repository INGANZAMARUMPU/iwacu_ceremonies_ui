<template>
  <div>
    <BaseLayout>
      <div class="container">
        <section class="pics section">
          <div class="mainpic">
            <img
              src="/static/img_placeholder.png"
              id="img1"
              @click="forwardTo('img1')"
            />
          </div>
          <div class="altpic">
            <img
              src="/static/img_placeholder.png"
              id="img2"
              @click="forwardTo('img2')"
            />
            <img
              src="/static/img_placeholder.png"
              id="img3"
              @click="forwardTo('img3')"
            />
            <img
              src="/static/img_placeholder.png"
              id="img4"
              @click="forwardTo('img4')"
            />
            <img
              src="/static/img_placeholder.png"
              id="img5"
              @click="forwardTo('img5')"
            />
          </div>
          <input
            type="file"
            ref="img1"
            @change="(e) => load(e, 'img1')"
            accept=".jpg,.jpeg,.gif,.png"
          />
          <input
            type="file"
            ref="img2"
            @change="(e) => load(e, 'img2')"
            accept=".jpg,.jpeg,.gif,.png"
          />
          <input
            type="file"
            ref="img3"
            @change="(e) => load(e, 'img3')"
            accept=".jpg,.jpeg,.gif,.png"
          />
          <input
            type="file"
            ref="img4"
            @change="(e) => load(e, 'img4')"
            accept=".jpg,.jpeg,.gif,.png"
          />
          <input
            type="file"
            ref="img5"
            @change="(e) => load(e, 'img5')"
            accept=".jpg,.jpeg,.gif,.png"
          />
        </section>

        <section class="section">
          <label class="logs">{{ img_logs }}</label>
          <div class="field">
            <label for="nom">Nom</label>
            <input
              id="nom"
              v-model="nom"
              type="text"
              placeholder="Nom de la salle"
            />
          </div>
          <div class="field">
            <label for="lieu">Lieu</label>
            <div class="twin">
              <input
                id="lieu"
                v-model="province"
                type="text"
                placeholder="Province"
              />
              <input type="text" v-model="commune" placeholder="Commune" />
              <input
                type="text"
                v-model="quartier"
                placeholder="Quartier, Rue"
              />
            </div>
          </div>
          <div class="field">
            <label for="parking">Taille du parking</label>
            <input
              id="parking"
              v-model="parking"
              type="number"
              placeholder="Combien de voitures"
            />
          </div>
          <div class="field">
            <label for="places">Nombre de places</label>
            <input
              id="places"
              v-model="places"
              type="number"
              min="30"
              max="1000"
            />
          </div>
          <div class="field">
            <label for="ajouts">Valeurs ajoutées</label>
            <textarea
              id="ajouts"
              v-model="ajouts"
              placeholder="autres choses que le client beneficie"
            >
            </textarea>
          </div>
          <div class="field">
            <label for="obligations">Obligations</label>
            <textarea
              id="obligations"
              v-model="obligations"
              placeholder="ce que vous obligez aux clients"
            >
            </textarea>
          </div>
          <div class="field">
            <label for="prix">Prix</label>
            <div class="twin">
              <input
                id="prix"
                v-model="prix_min"
                type="number"
                min="50000"
                placeholder="minimum"
              />
              <input
                type="number"
                v-model="prix_max"
                min="50000"
                placeholder="maximum"
              />
            </div>
          </div>
          <div class="field">
            <label for="details_prix">Autres details:</label>
            <textarea
              id="details_prix"
              v-model="details"
              placeholder="autres prix selon les cas"
            >
            </textarea>
          </div>
        </section>

        <label class="logs">{{ logs }}</label>
      </div>
      <button class="submit" @click="upload">Soumettre</button>
    </BaseLayout>
  </div>
</template>
<script>
import axios from "axios";
import BaseLayout from "../components/base_layout";
export default {
  components: { BaseLayout },
  data() {
    return {
      nom: "",
      parking: "",
      places: "",
      ajouts: "",
      obligations: "",
      prix_min: "",
      prix_max: "",
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
        case "img1":
          this.img1 = raw;
          break;
        case "img2":
          this.img2 = raw;
          break;
        case "img3":
          this.img3 = raw;
          break;
        case "img4":
          this.img4 = raw;
          break;
        case "img5":
          this.img5 = raw;
          break;
        default:
          console.log("DONE");
          break;
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
      form.append("prix_min", this.prix_min);
      form.append("prix_max", this.prix_max);
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
.pics {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
}
.altpic {
  display: grid;
  grid-gap: 5px;
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
.field * {
  display: block;
  width: 100%;
}
.twin {
  display: flex;
  gap: 10px;
}
.submit {
  display: block;
  margin: 20px 0 20px auto;
}

input {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}
@media only screen and (max-width: 400px) {
  .field {
    grid-column: span 2;
  }
}
</style>
