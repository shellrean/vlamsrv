import $axios from '../api.js'

const state = () => ({
	identify: '',
	status: '',
	serial: '',
	install: ''
})

const mutations = {
	SIGN_SERVER_IDENTITITY(state, payload ) {
		state.identify = payload
	},
	CONNECTIVITY(state, payload) {
		state.status = payload
	},
	SERIAL_ADDR(state, payload) {
		state.serial = payload
	},
	STATUS_ASSIGN(state, payload) {
		state.install = payload
	}
}

const actions = {
	getSinkronServer({ state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/pusat/sinkron`)
			.then((response) => {
				resolve(response.data)
			})
		})
	},
	getServerIdentify({ commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/pusat/identify`)
			.then((response) => {
				commit('SIGN_SERVER_IDENTITITY', response.data) 
				resolve(response.data)
			})
		})
	},
	getServerConnect({ commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/pusat/connect`)
			.then((response) => {
				commit('CONNECTIVITY', response.data) 
				resolve(response.data)
			})
		})
	},
	getSerial({ commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/pusat/serial`)
			.then((response) => {
				commit('SERIAL_ADDR', response.data)
				resolve(response.data)
			})
		})
	},
	getStatusInstal({ commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/pusat/status`, payload)
			.then((response) => {
				commit('STATUS_ASSIGN', response.data)
				resolve(response.data)
			})
		})
	},
	registerServer({ commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/pusat/register-server`, payload)
			.then((response) => {
				resolve(response.data)
			})
		})
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}