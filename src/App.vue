<template>
  <div id="app">
  	<TopBar/>
  	<div class="body">
  		<router-view/>
  	</div>
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
