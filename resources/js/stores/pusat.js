import $axios from '../api.js'
import $center from '../center.js'

const state = () => ({
	identify: '',
	status: '',
	serial: '',
	install: '',
	center: '',
	peserta: {
		progress: 0,
		step: 1,
		status: 0
	},
	matpel: {
		progress: 0,
		step: 1,
		status: 0
	},
	countData: ''
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
	},
	DATA_PUSAT_ASSIGN(state, payload) {
		state.center = payload
	},
	DATA_LOCAL_ASSIGN_COUNT(state, payload) {
		state.countData = payload
	},
	CBT_SYNC_ASSIGN(state, payload) {
		state.sync.peserta = payload.data
	},
	UPLOAD_PROGRESS_BAR_PESERTA(state, payload) {
		state.peserta.progress = payload
	},
	UPLOAD_PROGRESS_BAR_MATPEL(state, payload) {
		state.matpel.progress = payload
	},
	STEP_UPLOAD_BAR_PESERTA(state, payload) {
		state.peserta.step = payload
	},
	STEP_UPLOAD_BAR_MATPEL(state, payload) {
		state.matpel.step = payload
	}
}

const actions = {
	getSinkronServer({ state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/pusat/sinkron`,payload)
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
			let config = {
			  onUploadProgress: progressEvent => {
			    let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
			  }
			}
			$axios.post(`/pusat/status`, payload, config)
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
	},
	testConnection({ dispatch, state, commit }, payload) {
		return new Promise((resolve, reject) => {
			dispatch('getServerIdentify')
			.then((res) => {
				let config = {
				  onUploadProgress: progressEvent => {
				    let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
				  }
				}
				$center.post('pusat/test-sync', {
					'server_name' : res.data.kode_server
				})
				.then((response) => {
					commit('DATA_PUSAT_ASSIGN', response.data)
					resolve(response.data)
				})			
			})
		})
	},
	cbtSync({ dispatch, state, commit }, payload) {
		return new Promise((resolve, reject) => {
			dispatch('getServerIdentify')
			.then((res) => {
				let config = {
				  onUploadProgress: progressEvent => {
				  	if(payload == 'peserta') {
				    	commit('UPLOAD_PROGRESS_BAR_PESERTA',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))
				  	}
				  	else if(payload == 'matpel') {
				  		commit('UPLOAD_PROGRESS_BAR_MATPEL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))
				  	}
				  }
				}
				$center.post('pusat/cbt-sync', {
					'server_name' : res.data.kode_server,
					'req'		: payload
				},config)
				.then((response) => {
					if(payload == 'peserta') {
						commit('STEP_UPLOAD_BAR_PESERTA',2)
					}
					else if(payload == 'matpel') {
						commit('STEP_UPLOAD_BAR_MATPEL',2)
					}
					let config = {
					  onUploadProgress: progressEvent => {
					    if(payload == 'peserta') {
				    		commit('UPLOAD_PROGRESS_BAR_PESERTA',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  	else if(payload == 'matpel') {
					  		commit('UPLOAD_PROGRESS_BAR_MATPEL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  }
					}
					$axios.post('/pusat/sinkron',response.data,config)
					.then((response) => {
						if(payload == 'peserta') {
							commit('STEP_UPLOAD_BAR_PESERTA',3)
						}
						else if(payload == 'matpel') {
							commit('STEP_UPLOAD_BAR_MATPEL',3)
						}
					})
				})			
			})
		})
	},

	checkDataLocal({ dispatch, state, commit}, payload) {
		return new Promise((resolve, reject) => {
			$axios.get('/pusat/check-data')
			.then((response) => {
				commit('DATA_LOCAL_ASSIGN_COUNT',response.data)
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