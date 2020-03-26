import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

const Login = () => import('./pages/Login.vue')
const Home = () => import('./pages/Home.vue')

const Sinkron = () => import('./pages/sinkron/Sinkron.vue')
const DataHapus = () => import('./pages/sinkron/Hapus.vue')
 
const PesertaIndex = () => import('./pages/peserta/Index.vue')
const PesertaData = () => import('./pages/peserta/Peserta.vue')
const PesertaReset = () => import('./pages/peserta/ResetPeserta.vue')

const UjianIndex = () => import('./pages/ujian/Index.vue')
const UjianStatus = () => import('./pages/ujian/UjianStatus.vue')
const UjianPeserta = () => import('./pages/ujian/UjianPeserta.vue')

const LoginUjian = () => import('./pages/siswa/LoginUjian.vue')
const IndexUjian = () => import('./pages/siswa/Index.vue')
const UjianKonfirm = () => import('./pages/siswa/UjianKonfirm.vue')
const UjianPrepare = () => import('./pages/siswa/UjianPrepare.vue')
const Kerjakan = () => import('./pages/siswa/Kerjakan.vue')
const UjianSelesai = () => import('./pages/siswa/UjianSelesai.vue')

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginUjian,
		},
		{
			path: '/ujian',
			component: IndexUjian,
			meta: { requiresAuth: true },
			children: [
				{
					path: 'konfirm',
					name: 'ujian.konfirm',
					component: UjianKonfirm
				},
				{
					path: 'prepare',
					name: 'ujian.prepare',
					component: UjianPrepare
				},
				{
					path: 'while/:banksoal/:jadwal_id',
					name: 'ujian.while',
					component: Kerjakan
				},
				{
					path: 'selesai',
					name: 'ujian.selesai',
					component: UjianSelesai
				}
			]
		},
		{
			path: '/server/login',
			name: 'server.login',
			component: Login
		},
		{
			path: '/server',
			name: 'server.home',
			component: Home,
			meta: { requiresAuth: true }
		},
		{
			path: '/server/download',
			name: 'download',
			component: Sinkron,
			meta: { requiresAuth: true, title: 'Sync' }
		},
		{
			path: '/server/peserta',
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
			path: '/server/ujian',
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
			path: '/server/data/hapus',
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