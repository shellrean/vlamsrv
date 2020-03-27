import Vue from 'vue'
import router from './router.js'
import store from './store.js'
const App = () =>  import('./App.vue')

import Notifications from 'vue-notification'
import BootstrapVue from 'bootstrap-vue'

import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(Notifications)
Vue.use(BootstrapVue)

const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	}
})
