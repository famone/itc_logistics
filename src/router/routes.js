import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Notfound from '../pages/Notfound.vue'

const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '*',
			component: Notfound
		}
	]

export default routes;