import $axios from '../api.js'

const state = () => ({

})

const mutations = {

}

const actions = {
	getSinkronServer({ state }, payload) {
		return new Promise((resolve, reject) => {
			$axios.post(`/pusat/sinkron`)
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