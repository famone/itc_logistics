
import axios from 'axios'

const serv = {
	namespaced: true,
	state: {
		cities: []
  	},
	mutations: {
		SET_CITY(state, payload){
			state.cities = payload
		}
	},
	actions: {
         loadCity({commit}){
         	axios
         	.get('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia')
         	.then(response =>{
         		commit("SET_CITY", response.data)
         	})
         }
	},
	getters: {
		getCities(state){
			return state.cities
		}
	}
}

export default serv


