import Vue from 'vue'
import Vuex from 'vuex'

import auth from './stores/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth
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
			return state.isLoding
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