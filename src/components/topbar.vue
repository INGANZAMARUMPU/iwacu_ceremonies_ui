<template>
  <div id="nav">
    <div class="logo">
      <router-link to="/">
        <img src="/static/logo.png" width="36" />
        FiGiBook.com
      </router-link>
    </div>
    <div class="left">
      <center>
        <div v-if="!!active_user">
          <router-link to="/mine" class="menu"> Mes Salles </router-link>
          <router-link to="/create" class="menu">
            Ajouter une Salle
          </router-link>
          <button @click="$store.state.user = null">Se Deconnecter</button>
        </div>
        <div v-else>
          <router-link to="/register" class="menu"> S'abonner </router-link>
          <button @click="signin">Se Connecter</button>
        </div>
      </center>
    </div>
  </div>
  <Popup v-if="$store.state.auth_popup"></Popup>
</template>
<script>
import Popup from "../components/popup.vue";
export default {
  components: { Popup },

  methods: {
    signin() {
      this.$store.state.auth_popup = true;
    },
  },
};
</script>
<style scoped>
#nav {
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 0 100px;
  top: 0;
  width: 100%;
  z-index: 5;
  border-bottom: 2px solid var(--primary);
  position: sticky;
}
#nav * {
  color: var(--primary);
}
button {
  color: var(--white) !important;
}
.menu:hover {
  background-color: var(--primary-hover);
  color: var(--white) !important;
}
.logo * {
  font-size: 1.5em;
  font-weight: 700;
  font-family: monospace;
}
@media only screen and (max-width: 540px) {
  #nav {
    display: block;
    position: relative;
    padding: 5px;
  }
  .logo {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
}
</style>
