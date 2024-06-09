<template>
  <div class="parent">
    <h3>Quelle est la date de votre evenement?</h3>
    <DatePicker class="calendrier" v-model="today" style="width: 100%!important"/>
    <button class="btn">
      Reserver
    </button>
  </div>
</template>
<script>
import 'v-calendar/style.css';
import '@/style.css';
import { DatePicker } from 'v-calendar';

export default{
	components:{ DatePicker },
  props: [],
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.parent{
	background-color: white;
	border-radius: 5px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 30px;
}
</style>