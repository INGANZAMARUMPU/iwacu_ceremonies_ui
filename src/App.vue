<template>
  <div id="app">
  	<TopBar/>
    <router-view/>
  </div>
</template>
<script>
import TopBar from "./components/topbar"
export default {
	components:{ TopBar }
};
</script>
<style src="./style.css">
</style>
