import Vue from 'vue'
import router from './router.js'
import store from './store.js'
const App = () =>  import('./App.vue')

import Notifications from 'vue-notification'
import BootstrapVue from 'bootstrap-vue'

import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(Notifications)
Vue.use(BootstrapVue)

import { mapActions, mapGetters } from 'vuex'

const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	computed: {
		...mapGetters(['isAuth'])
	},
	methods: {
		...mapActions('siswa_user', ['getUserLogin'])
	},
	created() {
		if (this.isAuth) {
			this.getUserLogin()
			.catch((err) => {
				this.$notify({
                  group: 'foo',
                  title: 'Error',
                  type: 'error',
                  text: 'Sepertinya anda terputus dari server (Error: 00FACCO).'
                })
			})
		}
	}
})
