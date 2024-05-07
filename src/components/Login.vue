<template>
  <div class="form-popup">
    <form class="form-container" @submit.prevent.stop="login">
      <h1>Connexion</h1>

      <label for="tel"><b>Télṕhone</b></label>
      <input
        type="text"
        placeholder="votre numero de télephone"
        name="tel"
        v-model="username"
        required
      />

      <label for="psw"><b>Mot de passe</b></label>
      <input
        type="password"
        placeholder="votre mot de passe"
        name="psw"
        id="pswd"
        v-model="password"
        required
      />
      <label class="logs">{{ logs }}</label>
      <button @click.prevent.stop="login" class="btn">Se connecter</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      logs: "",
    };
  },
  methods: {
    login() {
      this.logs = "loging in ...";
      axios
        .post(this.url + "/login/", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.logs = "";
          this.$store.state.user = response.data;
          this.$store.state.auth_popup = false;
        })
        .catch((error) => {
          console.error(error);
          this.logs = error.response.data;
        });
    },
  },
};
</script>
