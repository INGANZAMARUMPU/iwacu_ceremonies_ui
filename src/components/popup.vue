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
        const condition1 = Array.from(evt.target.classList).includes(
          "form-popup"
        );
        const condition2 = evt.target.id == "popup";
        if (condition1 || condition2) this.$store.state.auth_popup = false;
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
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

/* The popup form - hidden by default */
</style>
