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
        <SalleDetails :salle="current_salle"/>
        <Suggestions/>
      </div>
      <div class="right">
        <Agent/>
        <Calendar/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Agent from "@/components/details/agent"
import ImgPlayer from "@/components/details/img_player"
import SalleDetails from "@/components/details/details"
import Suggestions from "@/components/details/suggestions"
import Calendar from "@/components/details/calendar"
export default {
  components:{
    Agent, ImgPlayer, SalleDetails, Suggestions, Calendar
  },
  data() {
    return {
      current_salle: null,
      gallery:[]
    };
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
          this.gallery = response.data.gallery.map(x => x.image)
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
  flex-basis: 300px;
}
.left{
  flex-grow: 1;
  overflow: hidden;
}
.right, .left{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.gray{
  color: #999!important;
}
.primary{
  color: var(--secondary)!important;
}
@media only screen and (max-width: 900px) {
  .details{
    grid-template-columns: 1fr;
  }
  .right{
    flex-direction: column-reverse;
  }
}
</style>
