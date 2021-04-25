<template>
<BaseLayout>
	<div class="pics">
		<div class="mainpic">
			<img src="img_placeholder.png" @click="load('img1')" width="100%">
		</div>
		<div class="altpic">
			<img src="img_placeholder.png" @click="load('img2')" width="100%">
			<img src="img_placeholder.png" @click="load('img3')" width="100%">
			<img src="img_placeholder.png" @click="load('img4')" width="100%">
			<img src="img_placeholder.png" @click="load('img5')" width="100%">
		</div>
		<input type="file" ref="img1" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img2" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img3" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img4" accept=".jpg,.jpeg,.gif,.png">
		<input type="file" ref="img5" accept=".jpg,.jpeg,.gif,.png">
	</div>
</BaseLayout>
</template>
<script>
import BaseLayout from "../components/base_layout"
export default{
	components:{BaseLayout, },
	methods:{
		load(component){
			this.$refs[component].click();
		}
	}
};
</script>
<style>
.pics{
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(2, 1fr);
}
.altpic{
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(2, 1fr);
}
img{
	background-color: #ddd;
}
input[type=file]{
	display: none;
}
</style>