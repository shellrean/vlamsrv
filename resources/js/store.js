import Vue from 'vue'
import Vuex from 'vuex'

import auth from './stores/auth.js'
import pusat from './stores/pusat.js'
import banksoal from './stores/banksoal.js'
import ujian from './stores/ujian.js'
import peserta from './stores/peserta.js'
import user from './stores/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		pusat,
		ujian,
		peserta,
		user
	},
	state: {
		token: localStorage.getItem('token'),
		errors: [],
		isLoading: false
	},
	getters: {
		isAuth: state => {
			return state.token != 'null' && state.token != null
		},
		isLoading: state => {
			return state.isLoading
		}
	},
	mutations: {
		SET_TOKEN(state, payload) {
			state.token = payload
		},
		SET_ERRORS(state, payload) {
			state.errors = payload
		},
		CLEAR_ERRORS(state) {
			state.errors = []
		},
		SET_LOADING(state, payload) {
			state.isLoading = payload
		}
	}
})

export default store