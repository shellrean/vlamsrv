<template>
	<div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
            	<div class="card">
            		<div class="card-header">
            			<b-button size="sm" squared variant="light" @click="syncData">Mulai sync</b-button> 
            			<b-button size="sm" squared variant="primary" @click="$bvModal.show('modal-selesai')">Refresh status</b-button>
            		</div>
            		<div class="card-body" v-if="identify">
            			<div class="form-group">
            				<label>Data 1</label>
            				<b-progress :value="identify.peserta ? 100 : peserta.progress" variant="info" show-progress class="mt-2"></b-progress>
            				<small v-show="identify.peserta ? 0 : peserta.step == 1">Step 1 of 2- Download data dari pusat</small>
            				<small v-show="identify.peserta ? 0 : peserta.step == 2">Step 2 of 2- Memasukkan adata ke database</small>
            				<small v-show="identify.peserta ? 1 : peserta.step == 3">Complete</small>
            			</div>
            			<div class="form-group">
            				<label>Data 2</label>
            				<b-progress :value="identify.matpel ? 100 : matpel.progress" variant="info" show-progress class="mt-2"></b-progress>
            				<small v-show="identify.matpel ? 0 : matpel.step == 1">Step 1 of 2- Download data dari pusat</small>
            				<small v-show="identify.matpel ? 0 : matpel.step == 2">Step 2 of 2- Memasukkan adata ke database</small>
            				<small v-show="identify.matpel ? 1 : matpel.step == 3">Complete</small>
            			</div>
            			<div class="form-group">
            				<label>Data 3</label>
            				<b-progress :value="sinkron.banksoal" variant="info" show-progress class="mt-2"></b-progress>
            			</div>
            			<div class="form-group">
            				<label>Data 4</label>
            				<b-progress :value="sinkron.soal" variant="info" show-progress  class="mt-2"></b-progress>
            			</div>
            			<div class="form-group">
            				<label>Data 5</label>
            				<b-progress :value="sinkron.pilihan" variant="info" show-progress  class="mt-2"></b-progress>
            			</div>
            			<div class="form-group">
            				<label>Data 6</label>
            				<b-progress :value="sinkron.gambar" variant="info" show-progress  class="mt-2"></b-progress>
            			</div>
            			<!-- <b-button variant="primary" size="sm" :disabled="sync" @click="sinkronData">
            			<b-spinner small type="grow" v-show="isLoading"></b-spinner>
            			Sinkron</b-button> -->
            		</div>
            		<div class="card-footer"></div>
            	</div>
            </div>
          </div>
        </main>
        <b-modal id="modal-selesai" hide-backdrop>
		    <template v-slot:modal-header="{ close }">
		      <h5>Download status</h5>
		    </template>

		    <template v-slot:default="{ hide }">
		    	<table class="table table-borderless" v-if="center">
		    		<tr>
		    			<td><b>Data 1</b></td>
		    			<td v-text="center.peserta"></td>
		    			<td>-</td>
		    			<td>{{ count ? count.peserta : 0 }}</td>
		    		</tr>
		    		<tr>
		    			<td><b>Data 2</b></td>
		    			<td v-text="center.matpel"></td>
		    			<td>-</td>
		    			<td>{{ count ? count.matpel : 0 }}</td>
		    		</tr>
		    		<tr>
		    			<td><b>Data 3</b></td>
		    			<td>85</td>
		    			<td>-</td>
		    			<td>0</td>
		    		</tr>
		    		<tr>
		    			<td><b>Data 4</b></td>
		    			<td>85</td>
		    			<td>-</td>
		    			<td>0</td>
		    		</tr>
		    		<tr>
		    			<td><b>Data 5</b></td>
		    			<td>85</td>
		    			<td>-</td>
		    			<td>0</td>
		    		</tr>
		    		<tr>
		    			<td><b>Data 6</b></td>
		    			<td>85</td>
		    			<td>-</td>
		    			<td>0</td>
		    		</tr>
		    		<tr>
		    			<td><b>Data 7</b></td>
		    			<td>85</td>
		    			<td>-</td>
		    			<td>0</td>
		    		</tr>
		    	</table>
		    </template>

		    <template v-slot:modal-footer="{ cancel }">
		      <b-button size="sm" variant="danger" squared @click="cancel()">
		        Tutup
		      </b-button>
		    </template>
		  </b-modal>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
	name: 'Sinkron',
	created() {
		this.connect()
		this.countData()
		this.getIdentify()
	},
	computed: {
		...mapGetters(['isAuth','isLoading']),
		...mapState('pusat',{
			center : state => state.center.data,
			peserta: state => state.peserta,
			matpel: state => state.matpel,
			count: state => state.countData.data,
			identify: state => state.identify.data
		})
	},
	data() {
      return {
        animate: true,
        sinkron: {
        	peserta: 0,
        	matpel: 0,
        	banksoal: 0,
        	soal: 0,
        	pilihan: 0,
        	gambar: 0,
        	sync: false
        }
      }
    },
	methods: {
		...mapActions('pusat', ['getSinkronServer','testConnection','cbtSync','checkDataLocal','getServerIdentify']),
		getIdentify() {
			this.getServerIdentify()
		},
		countData() {
			this.checkDataLocal()
		},
		connect() {
			this.testConnection()
		},
		syncData() {
			if(this.identify.peserta == 0) {
				this.cbtSync('peserta')
			}
			if(this.identify.matpel == 0) {
				this.cbtSync('matpel')
			}
		},
		sinkronData() {
			this.getSinkronServer({ req: 'peserta' })
			.then(() => {
				this.sinkron.peserta = 100
			})
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Data peserta berhasil didownload.'
		        })
			})

			this.getSinkronServer({ req: 'matpel' })
			.then(() => {
				this.sinkron.matpel = 100
			})
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Data matpel berhasil didownload.'
		        })
			})

			this.getSinkronServer({ req: 'banksoal' })
			.then(() => {
				this.sinkron.banksoal = 100
			})
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Data banksoal berhasil didownload.'
		        })
			})

			this.getSinkronServer({ req: 'soal' })
			.then(() => {
				this.sinkron.soal = 100
			})
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Data soal berhasil didownload.'
		        })
			})

			this.getSinkronServer({ req: 'jawaban_soal' })
			.then(() => {
				this.sinkron.pilihan = 100
			})
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Data pilihan berhasil didownload.'
		        })
			})

			this.getSinkronServer({ req: 'jadwal' })

			this.getSinkronServer({ req: 'file' })
			.then(() => {
				this.sinkron.gambar = 100
			})
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Data gambar berhasil didownload.'
		        })


			})
			this.sync = true
		}
	} 
}
</script>