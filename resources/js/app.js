import Vue from 'vue'
import router from './router.js'
import store from './store.js'
import App from './App.vue'
import Awesome from './awesome.js'

import CoreuiVue from '@coreui/coreui'
import Notifications from 'vue-notification'
import VueSweetalert2 from 'vue-sweetalert2'
import BootstrapVue from 'bootstrap-vue'

import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(CoreuiVue)
Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	}
})