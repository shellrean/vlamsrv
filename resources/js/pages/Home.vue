<template>
	<div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
		        <div class="row">
		        	<div class="col-sm-6 col-md-4" v-if="status.server_name">
		        		<h5 class="text-info">AKTIF</h5>
						<div class="card text-white bg-info">
							<div class="card-body">
								Sinkronisasi siap dilakukan <br>
								SERVER-ID: <span class="badge badge-light">{{ identify.kode_server }} </span><br> <br>
								<router-link :to="{ name: 'sinkron' }" class="btn btn-light btn-sm">Sinkron</router-link>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4" v-if="status.status == 2">
		        		<h5 class="text-warning">STAND BY</h5>
						<div class="card text-white bg-warning">
							<div class="card-body">
								Server nonaktif di server pusat <br>
								SERVER-ID: <span class="badge badge-light">{{ identify.kode_server }} </span><br> <br>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4" v-if="status.status == 3">
		        		<h5 class="text-danger">TIDAK AKTIF</h5>
						<div class="card text-white bg-danger">
							<div class="card-body">
								Koneksi tidak terhubung ke server pusat <br>
								SERVER-ID: <span class="badge badge-light">{{ identify.kode_server }} </span><br> <br>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4" v-if="status == 'unregistered'">
		        		<h5 class="text-danger">TIDAK AKTIF</h5>
						<div class="card text-white bg-danger">
							<div class="card-body">
								Server name tidak sesuai dengan pusat <br>
								SERVER-ID: <span class="badge badge-light">{{ identify.kode_server }} </span><br> <br>
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