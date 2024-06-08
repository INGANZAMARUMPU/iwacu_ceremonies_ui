<template>
<div class="agent">
	<h3>A propos de notre Agent</h3>
	<img src="/static/gilbert.jpg" alt="">
	<h3>Gilbert NIYONKURU</h3>
	<div>
				<i class="pi pi-phone" style="color:var(--primary)"></i>
	+257 71 20 83 96
	</div>
	<div>
				<i class="pi pi-at" style="color:var(--primary)"></i>
	<a href="mailto:gigidevict@gmail.com" target="_blank"> gigidevict@gmail.com</a>
	</div>
	<div>
				<i class="pi pi-link" style="color:var(--primary)"></i>
	<a href="https://digitech.com" target="_blank"> digitech.com</a>
	</div>
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
.agent{
  width: 100%;
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap:20px;
}
</style>