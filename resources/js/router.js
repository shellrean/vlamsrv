import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import VueCookies from 'vue-cookies';

import Login from './pages/Login.vue'
import Home from './pages/Home.vue'


Vue.use(Router)
Vue.use(VueCookies);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { requiresAuth: true }
		}
	]
})

router.beforeEach((to, from , next) => {
	store.commit('CLEAR_ERRORS')
	if (to.matched.some(record => record.meta.requiresAuth)) {
		let auth = store.getters.isAuth
		if (!auth) {
			next({ name: 'login' })
		}
		else {
			next()
		}
	}
	else {
		next()
	}
})
export default router