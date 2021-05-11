<template>
<div class="context" id="context_calendar">
	<label>{{ datetime(date) }}</label>
	<div>Etat <b>{{ etat }}</b></div>
	<center>
		<button @click="$emit('close')">
			{{ option }}
		</button>
	</center>
</div>
</template>
<script>
export default{
	props:["x", "y", "date", "shown"],
	data(){
		return {
			etat:"prise", option:"fermer", top:0, left:0,
			visible:false
		}
	},
	watch:{
		x(new_val){
			this.top = this.y >= 100 ? this.y-100 : 10;
			this.left = this.x >= 120 ? this.x-120 : 10;
			let max_w = window.innerWidth;
			this.left = this.left+250 >= max_w ? max_w-270 : this.left;
			context_calendar.style.left = this.left+"px";
			context_calendar.style.top = this.top+"px";
		},
		shown(new_val){
			this.visible = new_val;
		}
	},
	methods:{
		
	}
}
</script>
<style scoped>
.context{
	border: 1px solid gray;
	position: fixed;
	z-index: 5;
	width: 250px;
	background-color: white;
	box-shadow: 2px 2px 15px black;
}
</style>