
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


