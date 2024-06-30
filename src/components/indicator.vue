<template>
<div class="indicator">
	<div class="progress">
		<div class="bar" :style="{'width':`${current*100 / (labels.length - 1)}%`}"></div>
	</div>
	<div class="boules">
		<div v-for="i in labels.length" :class="{'primary':current >= i-1}">
			<div class="label">{{ labels[i-1] }}</div>
			<div class="boule"></div>
		</div>
	</div>
</div>
</template>
<script>
export default{
	props:{
		labels : { type: Array, required: true},
		current : { type: Number, required: true}
	},
};
</script>
<style scoped>
.indicator{
	padding-top: 1px;
	width: 90%;
	margin: auto;
}
.progress{
	background-color: #999;
	height: 10px;
	border-radius: 5px;
	margin: 30px 5px;
}
.boules{
	display: flex;
	justify-content: space-between;
	margin-top: -45px;
	position: relative;
}
.label{
	position: absolute;
	top: -20px;
}
.boules > * {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.boule{
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: #999;
}
.primary .boule{
	background-color: var(--primary);
}
.primary .label{
	color: var(--primary);
}
.bar{
	background-color: var(--primary);
	height: 100%
}
</style>