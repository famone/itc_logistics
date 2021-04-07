
import axios from 'axios'

const serv = {
	namespaced: true,
	state: {
		cities: [],
		cityFrom: '',
		cityTo: ''
  	},
	mutations: {
		SET_CITY(state, payload){
			state.cities = payload
		},
		GET_DIRECTIONS(state, payload){
			state.cityFrom = payload.city1
			state.cityTo = payload.city2
		}
	},
	actions: {
         loadCity({commit}){
         	axios
         	.get('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia')
         	.then(response =>{
         		commit("SET_CITY", response.data)
         	})
         },
         getDirection({commit}, payload){
         	commit("GET_DIRECTIONS", payload)
         }
	},
	getters: {
		getCities(state){
			return state.cities
		},
		getCityFrom(state){
			return state.cityFrom
		},
		getCityTo(state){
			return state.cityTo
		}
	}
}

export default serv


