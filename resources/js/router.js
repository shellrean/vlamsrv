import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import VueCookies from 'vue-cookies';

import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

import Sinkron from './pages/sinkron/Sinkron.vue'
import DataHapus from './pages/sinkron/Hapus.vue'

import PesertaIndex from './pages/peserta/Index.vue'
import PesertaData from './pages/peserta/Peserta.vue'
import PesertaReset from './pages/peserta/ResetPeserta.vue'

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
			path: '/download',
			name: 'download',
			component: Sinkron,
			meta: { requiresAuth: true, title: 'Sync' }
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
				},
				{
					path: 'reset',
					name: 'peserta.reset',
					component: PesertaReset,
					meta: { title: 'Reset peserta ujian' }
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
		},
		{
			path: '/data/hapus',
			component: DataHapus,
			name: 'hapus',
			meta: { requiresAuth: true, title: 'Hapus data lokal' },
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