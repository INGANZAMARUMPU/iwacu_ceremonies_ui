<template>
  <div class="form-popup">
    <div class="form-container" @submit.prevent.stop="login">
      <h1>Abonnement</h1>

      <label for="nom">Nom</label>
      <input type="text" v-model="nom" placeholder="votre nom" required />

      <label for="prenom">Prenom</label>
      <input type="text" v-model="prenom" placeholder="votre prenom" required />

      <label for="tel">Téléphone</label>
      <input
        type="text"
        v-model="tel"
        id="tel"
        placeholder="votre numero de télephone"
      />

      <label for="cni">CNI</label>
      <input
        type="text"
        placeholder="carte national d'identite"
        name="cni"
        v-model="cni"
        required
      />

      <label for="password">Mot de passe</label>

      <input
        type="password"
        placeholder="votre mot de passe"
        name="psw"
        id="pswd"
        v-model="password"
        required
      />

      <label for="password2">Confirmation</label>
      <input
        type="password"
        placeholder="votre mot de passe"
        name="psw"
        id="pswd"
        required
        v-model="password2"
      />

      <label for="email">Email</label>
      <input
        type="text"
        placeholder="votre adresse email"
        name="tel"
        v-model="email"
        required
      />
      <label class="logs">{{ logs }}</label>
      <button @click="register">S'abonner</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      tel: "",
      cni: "",
      password: "",
      password2: "",
      email: "",
      logs: "",
    };
  },
  methods: {
    register() {
      this.logs = "";
      if (this.password != this.password2) {
        this.logs = "les mots de passes ne sont pas identiques";
        return;
      }
      let data = {
        nom: this.nom,
        prenom: this.prenom,
        telephone: this.tel,
        cni: this.cni,
        password: this.password,
        email: this.email,
      };
      axios
        .post(this.url + "/register/", data)
        .then((response) => {
          this.$store.state.user = response.data;
          this.$store.state.auth_popup = false;
        })
        .catch((error) => {
          this.logs = error.response.data;
        });
    },
  },
};
</script>
