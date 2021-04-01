import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import serv from '../store/serv'

export default new Vuex.Store({
	modules: {
		serv
	}
}) 