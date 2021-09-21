<template>
<div class="main">
	<div class="head">
		<button @click="decreaseMonth"><<</button>
		<div class="month">{{month_name}}</div>
		<button @click="increaseMonth">>></button>
	</div>
	<div class="grid" ref="calendar">
		<div class="box col">Lundi</div>
		<div class="box col">Mardi</div>
		<div class="box col">Mercr</div>
		<div class="box col">Jeudi</div>
		<div class="box col">Vendr</div>
		<div class="box col">Samed</div>
		<div class="box col">Diman</div>
		<div class="box" v-for="i in max+decalage"
			:class="{
						'valid':inRange(i),
						'taken':inTaken(i-decalage, month, year),
						'invalid':inExpired(i-decalage, month, year)
					}"
			@click="e => showContext(e, i-decalage, month, year)">
			<span v-if="inRange(i)">
				{{ i - decalage }}
			</span>
		</div>
	</div>
	<div v-if="isOwner" style="margin-top:20px">
		<div v-for="alloc in allocations">
			<div v-if="alloc.etat == 0" style="display: inline;">
				<button style="background:green" @click="validateRequest(alloc.id)">
					<fa icon="check"/>
				</button>
				<button @click="deleteRequest(alloc.id)">
					<fa icon="times"/>
				</button>
			</div>
			<b>{{ alloc.date }}</b>
			<span> {{ alloc.nom_client }} </span>
			<b>{{ alloc.tel_client }}</b>
			<h5 style="display: inline;"> ({{ alloc.str_etat }})</h5>
		</div>
	</div>
	<!-- <ContextMenu :x="x" :y="y" :date="selected_date"
	:style="{'display':reserv_visible?'block':'none'}"
	@close="reserv_visible=false"/> -->
	<DialogBook :date="selected_date" @close="reserv_visible=false"
		:style="{'display':reserv_visible?'block':'none'}"/>
</div>
</template>
<script>
// import ContextMenu from "./calendar_context"
import DialogBook from "./dialog_book"
export default{
	props:[],
	components:{DialogBook},
	data(){
		return {
			decalage:0, max:28, month:1,
			addition:0, year:2021, day:0,
			month_counting_base:1,
			selected_date:undefined,
			x:500, y:500, reserv_visible:false,
			salle:null, allocations_cache:[]
		}
	},
	computed:{
		taken(){
			let salle = this.$store.state.current_salle;
			return !!salle?this.$store.state.current_salle.taken.map(x => x.date):[]
		},
		month_name(){
			let month_=new Date(this.year, this.month-1, 1);
			return month_.toLocaleString('fr', { month: 'long' }) +" "+ this.year;
		},
		allocations:{
			get(){
				if(!this.salle) return this.allocations_cache
				let month = this.month <= 9 ? '0'+this.month : this.month
				let month_str = `${this.year}-${month}`
				return !!this.salle.allocation?this.salle.allocation.filter(
					x => x.date.includes(month_str)
				):[]
			},
			set(new_val){
				this.allocations_cache = new_val;
			}
		},
		isOwner(){
			if(!!this.$store.state.user && !!this.$store.state.current_salle)
				return this.$store.state.user.id == this.$store.state.current_salle.owner.id
			return false;
		}
	},
	watch:{
		month(new_val){
			if(!this.salle) return;
			let month = this.month <= 9 ? '0'+this.month : this.month
			let month_str = `${this.year}-${month}`
			this.allocations = this.salle.allocation.filter(x => x.date.includes(month_str))
		},
		"$store.state.current_salle"(new_val){
			if(!new_val) return;
			this.salle = new_val;
		}
	},
	methods:{
		showContext(e, day, month, year){
			if(this.inTaken(day, month, year) || day<0) return;
			this.reserv_visible = false;
			this.x = e.clientX;
			this.y = e.clientY;
			this.selected_date = `${year}-${month}-${day}`
			this.reserv_visible = true;
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
		inExpired(day, month, year){
			month = month <= 9 ? '0'+month : month
			day = day <= 9 ? '0'+day : day
			let date = `${year}-${month}-${day}`
			return new Date(date) < new Date()
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
		deleteRequest(id){
			axios.delete(this.url+`/allocation/${id}/`, this.headers)
			.then((response) => {
			  alert("la demande a été annulée");
			  let allocations = this.$store.state.current_salle.allocation;
			  let allocation = allocations.filter(x => x.id == id)
			  allocations.splice(allocations.indexOf(allocation),1)
			}).catch((error) => {
			  console.error(error);
			})
		},
		validateRequest(id){
			axios.get(this.url+`/allocation/${id}/validate/`, this.headers)
			.then((response) => {
			  alert("la demande a été approuvée");
			  let allocations = this.$store.state.current_salle.allocation;
			  let allocation;
			  for(let i=0; i<allocations.length; i++){
			  	allocation = allocations[i];
			  	if(allocation.id == response.data.id){
			  		this.$store.state.current_salle.allocation[i] = response.data;
			  		continue;
			  	}
			  	if(allocation.date == response.data.date){
			  		this.$store.state.current_salle.allocation.splice(i, 1)
			  	}
			  }
			}).catch((error) => {
			  console.error(error);
			})
		}
	},
	mounted(){
		this.month = new Date().getMonth()+1;
		this.year = new Date().getFullYear();
		this.month_counting_base = this.month;
		this.max = new Date(this.year, this.month, 0).getDate()
		this.decalage = new Date(this.year, this.month-1, 1).getDay()-1

		if(window.location.href.includes("calendar")){
			window.setTimeout(() =>{
				let calendar = this.$refs["calendar"];
				let top = calendar.offsetTop;
				window.scrollTo({top: top, behavior: 'smooth'});
			}, 1000)
		}
	}
}
</script>
<style scoped>
.taken{
	color: gray!important;
	text-decoration: line-through;
	cursor: not-allowed!important;
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
.invalid{
	background: gray!important;
	color: white!important;
	text-decoration: line-through;
	color: var(--primary);
	cursor: pointer;
}
.valid{
	color: var(--primary);
	cursor: pointer;
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