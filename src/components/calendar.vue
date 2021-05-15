<template>
<div class="main">
	<div class="head">
		<button @click="decreaseMonth"><<</button>
		<div class="month">{{month_name}}</div>
		<button @click="increaseMonth">>></button>
	</div>
	<div class="grid">
		<div class="box col">Lundi</div>
		<div class="box col">Mardi</div>
		<div class="box col">Mercr</div>
		<div class="box col">Jeudi</div>
		<div class="box col">Vendr</div>
		<div class="box col">Samed</div>
		<div class="box col">Diman</div>
		<div class="box" v-for="i in max+decalage"
			:class="{'valid':inRange(i), 'taken':inTaken(i-decalage, month, year)}"
			@click="e => showContext(e, i-decalage, month, year)">
			<span v-if="inRange(i)">
				{{ i - decalage }}
			</span>
		</div>
	</div>
	<ContextMenu :x="x" :y="y" :date="selected_date"
	:style="{'display':context_visible?'block':'none'}"
	@close="context_visible=false"/>
</div>
</template>
<script>
import ContextMenu from "./calendar_context"
export default{
	props:["taken"],
	data(){
		return {
			decalage:0, max:28, month:1,
			addition:0, year:2021, day:0,
			month_counting_base:1,
			selected_date:undefined,
			x:500, y:500, context_visible:false
		}
	},
	components:{ContextMenu},
	computed:{
		month_name(){
			let month_=new Date(this.year, this.month-1, 1);
			return month_.toLocaleString('fr', { month: 'long' }) +" "+ this.year;
		}
	},
	methods:{
		showContext(e, day, month, year){
			if(this.inTaken(day, month, year)) return;
			this.context_visible = false;
			this.x = e.clientX;
			this.y = e.clientY;
			this.selected_date = new Date(year, month-1, day)
			this.context_visible = true;
		},
		inRange(n){
			return n-this.decalage<=this.max && n-this.decalage>0;
		},
		inTaken(day, month, year){
			month = month <= 9 ? '0'+month : month
			day = day <= 9 ? '0'+day : day
			let date = `${year}-${month}-${day}`
			return this.taken.includes(date)
		},
		decreaseMonth(){
			if(this.addition<1) return;
			if(this.month==1){
				this.year -= 1
			}
			this.addition--
			let pure = this.month_counting_base+this.addition;
			if(pure%12==0){
				this.month = 12
			} else {
				this.month = pure%12
			}
			let first_date = new Date(this.year, this.month-1, 1)
			this.max = new Date(this.year, this.month, 0).getDate();
			this.decalage = first_date.getDay()-1
		},
		increaseMonth(){
			if(this.month==12){
				this.year += 1
			}
			this.addition++
			let pure = this.month_counting_base+this.addition;
			if(pure%12==0){
				this.month = 12
			} else {
				this.month = pure%12
			}
			let first_date = new Date(this.year, this.month-1, 1)

			this.decalage = first_date.getDay()-1
			if(this.decalage==-1) this.decalage = 6

			this.max = new Date(this.year, this.month, 0).getDate();
		},
	},
	mounted(){
		this.month = new Date().getMonth()+1;
		this.year = new Date().getFullYear();
		this.month_counting_base = this.month;
		this.max = new Date(this.year, this.month, 0).getDate()
		this.decalage = new Date(this.year, this.month-1, 1).getDay()-1
	}
}
</script>
<style scoped>
.taken{
	background: gray!important;
	color: white!important;
	text-decoration: line-through;
}
.main{
	width: 100%;
	margin: 20px 0; 
}
.head{
	display: flex;
	margin-bottom: 10px;
}
.head *{
	font-weight: 700;
}
.grid{
	display: grid;
	grid-template-columns: repeat(7, 1fr);
    overflow: auto;
}
.month{
	flex-grow: 1;
	text-align: center;
	font-size: 2em;
	color: var(--primary);
}
.valid{
	color: var(--primary);
}
.box{
	flex-grow: 1;
	margin: 2px;
	font-weight: 700;
	text-align: center;
	padding-top: 8px;
	padding-bottom: 8px;
}
.valid:hover{
	background-color: var(--primary);
	color: var(--white);
}
.col{
	background-color: var(--primary);
	color: var(--white);
}
</style>