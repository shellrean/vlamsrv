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
	banksoal: {
		progress: 0,
		step: 1,
		status: 0
	},
	soal: {
		progress: 0,
		step: 1,
		status: 0
	},
	jawaban: {
		progress: 0,
		step: 1,
		status: 0
	},
	gambar: {
		progress: 0,
		step: 1,
		status: 0
	},
	jadwal: {
		progress: 0,
		step: 1,
		status: 0
	},
	countData: '',
	hapus: 0
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
	UPLOAD_PROGRESS_BAR_BANKSOAL(state, payload) {
		state.banksoal.progress = payload
	},
	UPLOAD_PROGRESS_BAR_SOAL(state, payload) {
		state.soal.progress = payload
	},
	UPLOAD_PROGRESS_BAR_JAWABAN(state, payload) {
		state.jawaban.progress = payload
	},
	UPLOAD_PROGRESS_BAR_GAMBAR(state, payload) {
		state.gambar.progress = payload
	},
	UPLOAD_PROGRESS_BAR_JADWAL(state, payload) {
		state.jadwal.progress = payload
	},
	STEP_UPLOAD_BAR_PESERTA(state, payload) {
		state.peserta.step = payload
	},
	STEP_UPLOAD_BAR_MATPEL(state, payload) {
		state.matpel.step = payload
	},
	STEP_UPLOAD_BAR_BANKSOAL(state, payload) {
		state.banksoal.step = payload
	},
	STEP_UPLOAD_BAR_SOAL(state, payload) {
		state.soal.step = payload
	},
	STEP_UPLOAD_BAR_JAWABAN(state, payload) {
		state.jawaban.step = payload
	},
	STEP_UPLOAD_BAR_GAMBAR(state, payload) {
		state.gambar.step = payload
	},
	STEP_UPLOAD_BAR_JADWAL(state, payload) {
		state.jadwal.step = payload
	},
	HAPUS_DATA_PROGRESS(state, payload) {
		state.hapus = payload
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
			.catch((err) => {
				reject(err)
			})
		})
	},
	registerServer({ commit }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/pusat/register-server`, payload)
			.then((response) => {
				commit('SET_LOADING',false, { root: true })
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
				let config = {
				  onUploadProgress: progressEvent => {
				  	if(payload == 'peserta') {
				    	commit('UPLOAD_PROGRESS_BAR_PESERTA',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))
				  	}
				  	else if(payload == 'matpel') {
				  		commit('UPLOAD_PROGRESS_BAR_MATPEL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))
				  	}
				  	else if(payload == 'banksoal') {
				  		commit('UPLOAD_PROGRESS_BAR_BANKSOAL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))	
				  	}
				  	else if(payload == 'soal') {
				  		commit('UPLOAD_PROGRESS_BAR_SOAL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))	
				  	}
				  	else if(payload == 'jawaban_soal') {
				  		commit('UPLOAD_PROGRESS_BAR_JAWABAN',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))	
				  	}
				  	else if(payload == 'file') {
				  		commit('UPLOAD_PROGRESS_BAR_GAMBAR',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))	
				  	}
				  	else if(payload == 'jadwal') {
				  		commit('UPLOAD_PROGRESS_BAR_JADWAL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 50 )))	
				  	}
				  }
				}
				$center.post('pusat/cbt-sync', {
					'server_name' : state.identify.kode_server,
					'req'		: payload
				},config)
				.then((response) => {
					if(payload == 'peserta') {
						commit('STEP_UPLOAD_BAR_PESERTA',2)
					}
					else if(payload == 'matpel') {
						commit('STEP_UPLOAD_BAR_MATPEL',2)
					}
					else if(payload == 'banksoal') {
						commit('STEP_UPLOAD_BAR_BANKSOAL',2)
					}
					else if(payload == 'soal') {
						commit('STEP_UPLOAD_BAR_SOAL',2)
					}
					else if(payload == 'jawaban_soal') {
						commit('STEP_UPLOAD_BAR_JAWABAN',2)
					}
					else if(payload == 'file') {
						commit('STEP_UPLOAD_BAR_GAMBAR',2)
					}
					else if(payload == 'jadwal') {
						commit('STEP_UPLOAD_BAR_JADWAL',2)
					}
					let config = {
					  onUploadProgress: progressEvent => {
					    if(payload == 'peserta') {
				    		commit('UPLOAD_PROGRESS_BAR_PESERTA',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  	else if(payload == 'matpel') {
					  		commit('UPLOAD_PROGRESS_BAR_MATPEL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  	else if(payload == 'banksoal') {
					  		commit('UPLOAD_PROGRESS_BAR_BANKSOAL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  	else if(payload == 'soal') {
					  		commit('UPLOAD_PROGRESS_BAR_SOAL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  	else if(payload == 'jawaban_soal') {
					  		commit('UPLOAD_PROGRESS_BAR_JAWABAN',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  	else if(payload == 'file') {
					  		commit('UPLOAD_PROGRESS_BAR_GAMBAR',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
					  	}
					  	else if(payload == 'jadwal') {
					  		commit('UPLOAD_PROGRESS_BAR_JADWAL',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
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
						else if(payload == 'banksoal') {
							commit('STEP_UPLOAD_BAR_BANKSOAL',3)
						}
						else if(payload == 'soal') {
							commit('STEP_UPLOAD_BAR_SOAL',3)
						}
						else if(payload == 'jawaban_soal') {
							commit('STEP_UPLOAD_BAR_JAWABAN',3)
						}
						else if(payload == 'file') {
							commit('STEP_UPLOAD_BAR_GAMBAR',3)
						}
						else if(payload == 'jadwal') {
							commit('STEP_UPLOAD_BAR_JADWAL',3)
						}
						resolve()
					})
					.catch((err) => {
						reject();
					})
				})
			// 	.catch((err) => {
			// 		reject();
			// 	})			
			// })
			// .catch((err) => {
			// 	reject();
			// })
		})

	},
	hapusDataLocal({ commit }, payload) {
		return new Promise((resolve, reject) => {
			let config = {
				onUploadProgress: progressEvent => {
					commit('HAPUS_DATA_PROGRESS',parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
				}
			}
			$axios.post('/pusat/hapus-data',payload,config)
			.then((response) => {
				commit('HAPUS_DATA_PROGRESS',100);
				resolve(response.data)
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