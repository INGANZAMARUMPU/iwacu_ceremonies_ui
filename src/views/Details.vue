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
        <h1 class="primary">BIF {{ money(current_salle.prix) }}</h1>
      </div>
    </div>
    <hr>
    <div class="details">
      <div class="left">
        <ImgPlayer :photos="gallery"/>
        {{ current_salle }}
      </div>
      <div class="right">
        <Agent/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Agent from "@/components/details/agent"
import ImgPlayer from "@/components/details/img_player"
export default {
  components:{
    Agent, ImgPlayer
  },
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
  overflow: hidden;
}
.gray{
  color: #999!important;
}
.primary{
  color: var(--secondary)!important;
}
</style>
