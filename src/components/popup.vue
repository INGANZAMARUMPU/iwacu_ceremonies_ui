<template>
  <section ref="popup" id="popup">
    <Login @click="" v-if="action == 0" />
    <Register @click="" v-else />
  </section>
</template>

<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
export default {
  props: ["action"],
  components: { Login, Register },
  methods: {
    closeForm() {
      this.$store.state.auth_popup = false;
    },
  },
  mounted() {
    document.body.addEventListener(
      "mouseup",
      (evt) => {
        if (evt.target.id == "popup") this.$store.state.auth_popup = false;
      },
      true
    );
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}

#popup {
  background: rgba(112, 112, 112, 0.656);
  /* opacity: 0.8; */
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

/* The popup form - hidden by default */
</style>
