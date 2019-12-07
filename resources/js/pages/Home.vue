<template>
	<div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
            	<div class="card">
            		<div class="card-body">
				        <div class="row" v-if="status">
				        	<div class="col-sm-6 col-md-4" v-if="status.status == 1">
				        		<h5 class="text-info">AKTIF</h5>
								<div class="alert alert-info rounded-0">CBTsync siap digunakan</div>
								<b-alert show squared variant="secondary">SERVER-ID&nbsp;&nbsp;<span class="badge badge-info py-2 rounded-0">{{ identify.kode_server }} </span></b-alert>
							</div>
							<div class="col-sm-6 col-md-4" v-if="status == 'unregistered'">
								<h5 class="text-warning">STAND BY</h5>
								<b-alert show squared variant="warning">ID Server tidak sesuai dengan data server pusat</b-alert>
								<b-alert show squared variant="secondary">SERVER-ID&nbsp;&nbsp;<span class="badge badge-warning py-2 rounded-0">{{ identify.kode_server}}</span></b-alert>
							</div>
							<div class="col-sm-6 col-md-4" v-if="status == 'block'">
				        		<h5 class="text-primary">STAND BY</h5>
								<b-alert show squared variant="primary">SN sudah terdaftar di server pusat</b-alert>
								<b-alert show squared variant="secondary">SERVER-ID&nbsp;&nbsp;<span class="badge badge-primary py-2 rounded-0">{{ identify.kode_server}}</span></b-alert>
							</div>
							<div class="col-sm-6 col-md-4" v-if="status == 'unconnect'">
				        		<h5 class="text-danger">OFFLINE</h5>
								<b-alert show squared variant="danger">CBTsync tidak terkoneksi ke server pusat</b-alert>
								<b-alert show squared variant="secondary">SERVER-ID&nbsp;&nbsp;<span class="badge badge-primary py-2 rounded-0">{{ identify.kode_server}}</span></b-alert>
							</div>
							<div class="col-sm-6 col-md-4" v-if="status.status == 0">
				        		<h5 class="text-danger">OFFLINE</h5>
								<b-alert show squared variant="danger">Server Non-Aktif pada server pusat</b-alert>
								<b-alert show squared variant="secondary">SERVER-ID&nbsp;&nbsp;<span class="badge badge-primary py-2 rounded-0">{{ identify.kode_server}}</span></b-alert>
							</div>
				        </div>
				    </div>
				</div>
            </div>
          </div>
        </main>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
	created() {
		this.getServerIdentify()
		this.getServerConnect()
	},
	computed: {
		...mapState('pusat', {
			identify: state => state.identify.data,
			status: state => state.status.data
		})
	},
	methods: {
		...mapActions('pusat', ['getServerIdentify','getServerConnect'])
	},
	data() {
		return {

		}
	}
}
</script>