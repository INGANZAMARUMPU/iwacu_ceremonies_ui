<template>
  <div class="page" v-if="!!current_salle">
    <div class="nom">
      <div>
        <h1>{{ current_salle.nom }}</h1>
        <h3 class="gray">
          <i class="pi pi-map-marker"></i>
          {{ current_salle.lieu }}
        </h3>
      </div>
      <div>
        <h3>PRIX</h3>
        <h1 class="primary">${{ current_salle.prix }} FBU</h1>
      </div>
    </div>
    <hr>
    <div class="details">
      <div class="left">
        <div class="gallery">

        </div>
        {{ current_salle }}
      </div>
      <div class="right">
        <div class="agent">
          <h3>A propos de notre Agent</h3>
          <img src="/static/gilbert.jpg" alt="">
          <h3>Gilbert NIYONKURU</h3>
          <div>
					  <i class="pi pi-phone" style="color:var(--primary)"></i>
            +257 71 20 83 96
          </div>
          <div>
					  <i class="pi pi-at" style="color:var(--primary)"></i>
            <a href="mailto:gigidevict@gmail.com" target="_blank"> gigidevict@gmail.com</a>
          </div>
          <div>
					  <i class="pi pi-link" style="color:var(--primary)"></i>
            <a href="https://digitech.com" target="_blank"> digitech.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      current_salle: null,
      gallery:[]
    };
  },
  watch: {
  },
  methods: {
    fetchData() {
      let salle_name = this.$route.params["salle_name"];
      let headers = !!this.active_user ? this.headers : {};
      axios
        .get(this.url + `/salles/${salle_name}/`, headers)
        .then((response) => {
          let salle = response.data;
          this.current_salle = response.data;
          this.gallery = [
            salle.photo_principal, salle.photo_1, salle.photo_2, salle.photo_3, salle.photo_4,
          ]
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.refreshToken(this.fetchData);
          }
          this.logs = error.response.data;
          console.error(error);
        });
    },
  },
  mounted() {
    this.fetchData()
  },
};
</script>
<style scoped>
.page{
  width: 90%;
  max-width: 1080px;
  margin: 80px auto 20px auto;
}
.nom{
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
h1, h3{
  font-weight: 400!important;
}
.details{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  padding: 40px 0;
}
.right{
  width: 300px;
}
.left{
  flex-grow: 1;
}
.agent{
  width: 100%;
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap:20px;
}
.gray{
  color: #999!important;
}
.primary{
  color: var(--secondary)!important;
}
</style>
