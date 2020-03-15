import $axios from '../api.js'

const state = () => ({
	ujians: [],
	pesertas: [],
	page: 1,
	hasilUjian: [],
	ujianAktif: {
		kelompok: '',
		jadwal: '',
		token: '',
		status_token: ''
	},
	aktif: '',
	sesis: ''
})

const mutations = {
	ASSIGN_DATA(state, payload) {
		state.ujians = payload
	},
	ASSIGN_SESI_DATA(state, payload ){
		state.sesis = payload
	},
	SET_PAGE(state, payload) {
		state.ujians = payload
	},
	ASSIGN_PESERTA_UJIAN(state, payload) {
		state.pesertas = payload
	},
	ASSIGN_HASIL_UJIAN(state, payload) {
		state.hasilUjian = payload
	},
	ASSIGN_DATA_PESERTA(state, payload) {
		state.pesertas = payload
	},
	ASSIGN_UJIAN_AKTIF(state, payload) {
		state.ujianAktif = {
			kelompok: payload.kelompok,
			jadwal: payload.ujian_id,
			token: payload.token,
			status_token: payload.status_token
		}
	}
}

const actions = {
	getUjians({ commit, state }, payload) {
		let search = typeof payload != 'undefined' ? payload: ''
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian?page=${state.page}&q=${search}`)
			.then((response) => {
				commit('ASSIGN_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	getSesi({ commit, state }, payload ){
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/sesi`)
			.then((response) => {
				commit('ASSIGN_SESI_DATA', response.data)
				resolve(response.data)
			})
		})
	},
	getAllPeserta({ commit, state}, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/get-peserta/${payload}`)
			.then((response) => {
				commit('ASSIGN_DATA_PESERTA', response.data)
				resolve(response.data)
			})
		})
	},
	addUjian({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian`, payload) 
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				if (error.response.status == 422) {
					commit('SET_ERRORS', error.response.data.errors, { root: true })
				}
			})
		})
	},
	setStatus({ state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/set-status`, payload)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	},
	changeToken({ dispatch, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/change-token`, payload)
			.then((response) => {
				dispatch('getUjianAktif').then(() => response())
			})
		})
	},
	getPesertas({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/get-peserta/${payload}`)
			.then((response) => {
				commit('ASSIGN_PESERTA_UJIAN', response.data)
				resolve(response.data)
			})
			.catch((error) => {

			})
		})
	},
	getHasilPeserta({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/hasil/${payload}`)
			.then((response) => {
				commit('ASSIGN_HASIL_UJIAN', response.data)
				resolve(response.data)
			})
		})
	},
	getUjianAktif({ commit, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.get(`/ujian/aktif`, payload)
			.then((response) => {
				commit('ASSIGN_UJIAN_AKTIF', response.data.data)
				resolve(response.data)
			})
		})
	},
	pilihKelompok({ dispatch, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/kelompok`, { kelompok: state.ujianAktif.kelompok})
			.then((response) => {
				if(response.data.status == 'OK') {
					dispatch('getUjianAktif').then(() => resolve())
				}
				else {
					dispatch('getUjianAktif')
					reject(response.data)
				}
			})
		})
	},
	pilihTest({ dispatch, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/ubah-test`, { jadwal: state.ujianAktif.jadwal })
			.then((response) => {
				if(response.data.status == 'OK') {
					dispatch('getUjianAktif').then(() => resolve())
				}
				else {
					dispatch('getUjianAktif')
					reject(response.data)
				}
			})
		})
	},
	simpanStatus({ state, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			const data = {
				jadwal: state.ujianAktif.jadwal,
				kelompok: state.ujianAktif.kelompok
			}
			$axios.post(`/ujian/simpan-status`, data)
			.then((response) => {
				if(response.data.status == 'OK') {
					dispatch('getUjianAktif').then(() => resolve())
				}
				else {
					dispatch('getUjianAktif')
					reject(response.data)
				}
			})
		})
	},
	rilistToken({ dispatch, state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/rilis-token`, { token: state.ujianAktif.token })
			.then((response) => {
				dispatch('getUjianAktif').then(() => resolve())
			})
		})
	},
	uploadNilai({ dispatch, state, commit }, payload) {
		commit('SET_LOADING',true, { root: true })
		return new Promise((resolve, reject) => {
			$axios.get(`/pusat/upload-hasil`)
			.then((response) => {
				commit('SET_LOADING',false, { root: true })
				dispatch('getAllPeserta').then(() => resolve())
			})
			.catch((err) => {
				commit('SET_LOADING',false, { root: true })
				reject(err)
			})
		})
	},
	selesaiUjianPeserta({commit}, payload) {
		return new Promise(( resolve, reject) => {
			$axios.post(`/ujian/selesai`, payload)
			.then((response) => {
				resolve(response)
				dispatch('getAllPeserta').then(() => resolve())
			})
			.catch((err) => {
				reject(err)
			})
		})
	},
	resetUjianPeserta({dispatch}, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/ujian/reset`, payload)
			.then((response) => {
				resolve(response)
				dispatch('getAllPeserta').then(() => resolve())
			})
			.catch((err) => {
				reject(err)
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