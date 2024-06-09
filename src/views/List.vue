<template>
  <div class="page">
  </div>
</template>
<script>
import Agent from "@/components/details/agent"
export default {
  components:{
    Agent,
  },
  data() {
    return {
      salles: []
    };
  },
  watch: {
  },
  methods: {
    fetchData() {
    },
  },
  mounted() {
    this.fetchData()
  },
};
</script>
<style scoped>

</style>
