<template>
  <div class="parent">
    <div class="pics">
      <div class="img" v-for="img in item.gallery">
        <img :src="img.image" alt="">
        <div class="overlay"></div>
        <div class="close">
          <i class="pi pi-times" style="color: white;"></i>
        </div>
      </div>
      <div class="new" @click="choose"
        v-if="item.gallery.length < 4 && !loading">
        <i class="pi pi-plus"></i>
      </div>
      <div class="black" v-show="loading">
        <img id="img"/>
        <div class="overlay">
          <i class="pi pi-spin pi-spinner" style="font-size: 2rem; color:black"></i>
        </div>
      </div>
    </div>
    <input type="file" ref="img" style="display:none"
        @change="(e) => load(e)" accept=".jpg,.jpeg,.gif,.png"/>
    <label class="logs">{{ logs }}</label>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["item", "url_path"],
  data() {
    return {
      logs: "",
      img: null,
      loading: false
    };
  },
  methods: {
    choose() {
      this.$refs["img"].click();
    },
    load(event) {
      this.logs = "";
      this.loading = true
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
    upload_images() {
      this.logs = "";
      let images = [ this.img, this.img2, this.img3, this.img4, this.img5 ]
      let form = new FormData();
      form.append("photo_principal", this.img);
      form.append("photo_1", this.img2);
      form.append("photo_2", this.img3);
      form.append("photo_3", this.img4);
      form.append("photo_4", this.img5);

      axios.post(this.url + "/salles/", form, this.headers)
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
};
</script>
<style scoped>
.pics {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  margin: 20px 0;
}
.logs {
  grid-column: 1 / span 2;
  text-align: center;
  color: red;
}
img {
  width: 100%;
  border-radius: 5px;
}
.black{
  background-color: #000;
}
.img, .new, .black{
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
}
.close{
  display: none
}
.img:hover .close{
  display: flex;
}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img:hover .overlay{
  display: block;
}
.img .overlay{
  display: none;
}
.close{
  background-color: red;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 5px;
  transform: translate(50%, -50%);
}
.new{
  border: 2px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
}
.new .pi{
  color: #ddd;
}
.new:hover {
  border: 5px solid #bbb;
  font-size: 3em;
}
.new:hover .pi{
  color: #bbb;
}
</style>
