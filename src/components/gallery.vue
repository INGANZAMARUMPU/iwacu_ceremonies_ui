<template>
  <div class="parent">
    <div class="pics">
      <div class="img" v-for="img in item.gallery">
        <div class="crop">
          <img :src="img.image" alt="">
          <div class="overlay"></div>
        </div>
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
  props: ["item", "upload_url", "name"],
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
        this.loading = false
        return;
      }
      var reader = new FileReader();
      this.img = raw;
      reader.onload = (event) => {
        placeholder.src = event.target.result;
        this.upload()
      };
      reader.readAsDataURL(raw);
    },
    upload() {
      this.logs = "";
      let form = new FormData();
      form.append("image.image", this.img);
      form.append(this.name, this.item.id);
      axios.post(this.url + `${this.upload_url}`, form, this.headers)
      .then((response) => {
        this.item.gallery.push(response.data.image);
        this.loading = false
      }).catch((error) => {
        if (error.response.status == 403) this.refreshToken(this.upload);
        this.$store.state.alert = {type:"danger", message:error.response?.data};
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
}
.black, .crop{
  background-color: #000;
  overflow: hidden;
  height: 100%;
}
.img, .new, .black, .crop{
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
}
.close{
  display: none;
  z-index: 10;
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
