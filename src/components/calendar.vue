<template>
<div class="main">
	<div class="head">
		<button><<</button>
		<div class="month">Avril</div>
		<button>>></button>
	</div>
	<div class="grid">
		<div class="box" v-for="i in 36"
			:class="{'valid':inRange(i)}">
			<span v-if="inRange(i)">{{ i - decalage }}</span>
		</div>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return {
			decalage:6
		}
	},
	methods:{
		inRange(n){
			return n-this.decalage<=31 && n-this.decalage>0;
		}
	}
}
</script>
<style scoped>
.main{
	width: 100%;
	margin: 20px 0; 
}
.head{
	display: flex;
	margin-bottom: 10px;
}
.grid{
	display: grid;
	grid-template-columns: repeat(7, 1fr);
}
.month{
	flex-grow: 1;
	text-align: center;
	font-weight: 700;
	font-size: 2em;
	color: var(--primary);
}
.valid{
	background-color: var(--primary);
}
.box{
	flex-grow: 1;
	margin: 2px;
	color: var(--white);
	font-weight: 700;
	text-align: center;
	padding-top: 8px;
	padding-bottom: 8px;
}
</style>