<template>
  <div class="page">
    <SearchView/>
    <div class="items">
      ok
    </div>
  </div>
</template>
<script>
import SearchView from "@/components/search_view"
export default {
  components:{
    SearchView,
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
.page{
  width: 90%;
  max-width: 1080px;
  margin: 80px auto 20px auto;
}
.items{
  background-color: white;
  border-radius: 5px;
  padding: 20px;
}
</style>
