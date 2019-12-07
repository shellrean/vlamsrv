<template>
	<div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
            	<div class="card">
            		<div class="card-header">
            			<b-button size="sm" squared variant="light">Mulai sync</b-button> <b-button size="sm" squared variant="primary">Refresh status</b-button>
            		</div>
            		<div class="card-body">
            			<div class="form-group">
            				<label>Data 1</label>
            				<b-progress :value="sinkron.peserta" variant="info" show-progress class="mt-2"></b-progress>
            			</div>
            			<div class="form-group">
            				<label>Data 2</label>
            				<b-progress :value="sinkron.matpel" variant="info" show-progress class="mt-2"></b-progress>
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
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
	name: 'Sinkron',
	computed: {
		...mapGetters(['isAuth','isLoading']),
	},
	data() {
      return {
        animate: true,
        sinkron: {
        	peserta: 100,
        	matpel: 100,
        	banksoal: 100,
        	soal: 100,
        	pilihan: 100,
        	gambar: 100,
        	sync: false
        }
      }
    },
	methods: {
		...mapActions('pusat', ['getSinkronServer']),
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