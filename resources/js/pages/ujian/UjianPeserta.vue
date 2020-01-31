<template>
	<div class="row">
		<loading :active.sync="isLoading" 
        :is-full-page="true"></loading>
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<b-button variant="light" squared size="sm" @click="refreshTable">Refresh</b-button>
					<b-button variant="info" squared size="sm" @click="uploadHasil">Upload hasil</b-button>
				</div>
				<div class="card-body">
					<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="pesertas.data" show-empty>
						<template v-slot:cell(upload)="row">
                            <font-awesome-icon icon="hourglass" v-show="row.item.uploaded == 0" class="text-muted"/>
                            <font-awesome-icon icon="clipboard-check" v-show="!row.item.uploaded == 0" class="text-success" />
                        </template>
						<template v-slot:table-busy>
                            <div class="text-center text-primary my-2">
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                            </div>
                        </template>
                        <template v-slot:cell(status)="row">
                            {{ row.item.status }}
							<b-button variant="danger" size="sm" @click="forceClose(row.item.peserta_id)"squared v-show="row.item.status_ujian != 1 && row.item.status_ujian != 2">Force close</b-button>
                        </template>
                        <template v-slot:cell(sisa)="row">
                        	{{ Math.floor(row.item.sisa_waktu/60)+' Menit' }}
                        </template>
					</b-table>
				</div>
				<div class="card-footer">
					<small><font-awesome-icon icon="hourglass" />&nbsp; Belum terupload </small> <br>
					<small><font-awesome-icon icon="clipboard-check" class="text-success" />&nbsp; Sudah terupload </small> <br>
					<small><font-awesome-icon icon="info-circle" class="text-info" />&nbsp; Hanya peserta yang berstatus selesai yang akan diupload </small> <br>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
	name: 'PesertaUjian',
	created() {
		this.getAllPeserta()
	},
	components: {
		Loading
	},
	data() {
		return {
			fields: [
				{ key: 'upload', label: 'Upload' },
				{ key: 'peserta.no_ujian', label: 'No ujian' },
				{ key: 'peserta.nama', label: 'Nama peserta' },
				{ key: 'status', label: 'Status' },
				{ key: 'sisa', label: 'Sisa waktu' }
			],
			isBusy: true
		}
	},
	computed: {
		...mapGetters(['isLoading']),
		...mapState('ujian', {
			pesertas: state => state.pesertas
		})
	},
	methods: {
		...mapActions('ujian', ['getAllPeserta','uploadNilai','selesaiUjianPeserta']),
		refreshTable() {
			this.getAllPeserta()
		},
		uploadHasil() {
			this.uploadNilai()
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Hasil ujian berhasil diupload.'
		        })
			})
			.catch((err) => {
				this.$notify({
		            group: 'foo',
		            title: 'Error',
		            type: 'error',
		            text: 'Gagal mengupload hasil ujian (Error: L.1).'
		        })
			})
		},
		forceClose(id) {
			this.selesaiUjianPeserta({
				peserta_id : id
			})
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Force close berhasil.'
		        })
			})
			.catch(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Error',
		            type: 'error',
		            text: 'Terjadi kesalahan (Error: F.1).'
		        })
			})
		}
	},
	watch: {
		pesertas() {
			this.isBusy = false
		}
	}
}
</script>