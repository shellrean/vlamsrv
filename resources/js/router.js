import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import VueCookies from 'vue-cookies';

import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

import Sinkron from './pages/sinkron/Sinkron.vue'

import PesertaIndex from './pages/peserta/Index.vue'
import PesertaData from './pages/peserta/Peserta.vue'

import UjianIndex from './pages/ujian/Index.vue'
import UjianStatus from './pages/ujian/UjianStatus.vue'
import UjianPeserta from './pages/ujian/UjianPeserta.vue'

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
		},
		{
			path: '/sinkron',
			name: 'sinkron',
			component: Sinkron,
			meta: { requiresAuth: true }
		},
		{
			path: '/peserta',
			component: PesertaIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					name: 'peserta.data',
					component: PesertaData,
					meta: { title: 'Daftar peserta ujian'}
				}
			]
		},
		{
			path: '/ujian',
			component: UjianIndex,
			meta: { requiresAuth: true },
			children: [
				{
					path: 'status',
					name: 'ujian.status',
					component: UjianStatus,
					meta: { title: 'Status ujian'}
				},
				{
					path: 'peserta',
					name: 'ujian.peserta',
					component: UjianPeserta,
					meta: { title: 'Status peserta'}
				}
			]
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