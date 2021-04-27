import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	images:[
		"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
		"https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg",
		"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
		"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
	],
  	salles:[
		{
			"owner":"Konstrictor",
			"nom":"Spring Valley",
			"photo_principal":"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
			"photo_1":"https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg",
			"photo_2":"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
			"photo_3":"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
			"photo_4":"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
			"lieu":"gihosha",
			"no_places":400,
			"taille_parking":30,
			"prix":"1 000 000",
			"is_active":true,
		},
		{
			"owner":"Konstrictor",
			"nom":"IGAA",
			"photo_principal":"https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg",
			"photo_1":"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
			"photo_2":"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
			"photo_3":"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
			"photo_4":"https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg",
			"lieu":"gihosha",
			"no_places":400,
			"taille_parking":30,
			"prix":"1 000 000",
			"is_active":true,
		},
		{
			"owner":"Konstrictor",
			"nom":"OPDE",
			"photo_principal":"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
			"photo_1":"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
			"photo_2":"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
			"photo_3":"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
			"photo_4":"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
			"lieu":"gihosha",
			"no_places":400,
			"taille_parking":30,
			"prix":"1 000 000",
			"is_active":true,
		},
		{
			"owner":"LeGentil Conference Hall",
			"nom":"Spring Valley",
			"photo_principal":"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
			"photo_1":"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
			"photo_2":"https://cdn.pixabay.com/photo/2017/03/31/21/37/room-2192484_960_720.jpg",
			"photo_3":"https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg",
			"photo_4":"https://cdn.pixabay.com/photo/2015/01/09/11/11/seminar-594118_960_720.jpg",
			"lieu":"gihosha",
			"no_places":400,
			"taille_parking":30,
			"prix":"1 000 000",
			"is_active":true,
		}
  	]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
