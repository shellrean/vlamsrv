<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					Status ujian
				</div>
				<div class="card-body">
					<div class="form-group">
						<div class="row">
							<div class="col-2">
								<label>Status</label>
							</div>
							<div class="col-8">
								<span class="badge badge-danger rounded-0 py-1" v-if="status == 1">Belum mulai</span>
								<span class="badge badge-primary rounded-0 py-1" v-if="status == 2">Sedang dikerjakan</span>
								<span class="badge badge-success rounded-0 py-1" v-if="status == 3">Selesai</span>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="row">
							<div class="col-2">
								<label>Kelompok</label>
							</div>
							<div class="col-6">
								<select class="form-control form-control-sm rounded-0" v-model="aktif.kelompok">
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="row">
							<div class="col-2">
								<label>Daftar ujian</label>
							</div>
							<div class="col-6">
								<select class="form-control form-control-sm rounded-0" v-model="aktif.jadwal">
									<option>Pilih</option>
									<option v-for="ujian in ujians.data" v-text="ujian.banksoal.kode_banksoal" :value="ujian.id"></option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="row">
							<div class="col-2">
								<label>Token</label>
							</div>
							<div class="col-6">
								<input type="text" readonly name="" class="form-control form-control-sm rounded-0" :value="aktif.token+' | 15 Menit | '+( fulled.status_token != 1 ? '(Belum release)' : '(Release)' )">
								<input type="hidden" :value="aktif.token">
							</div>
							<div class="col-3">
								<b-button variant="dark" size="sm" squared @click="ubahToken" v-show="fulled.status_token != 1">Rilis token </b-button>
							</div>
						</div>
					</div>
					<div class="form-group">
						<b-button variant="dark" size="sm" squared @click="postStatus"> Simpan semua</b-button>
					</div>
				</div>
				<div class="card-footer">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
	name: 'UjianStatus',
	components: {
		vSelect
	},
	data() {
		return {
			timeout: 0,
			dikerjakan: false,
			selesai: false,
			status: 1
		}
	},
	created() {
		this.getUjianAktif()
		this.getUjians()
	},
	computed: {
		...mapState(['error']),
		...mapState('ujian', {
			aktif: state => state.ujianAktif,
			ujians: state => state.ujians,
			fulled: state => state.aktif
		})
	},
	methods: {
		...mapActions('ujian', ['getUjians','addUjian','setStatus','changeToken','getUjianAktif','pilihKelompok','pilihTest','rilistToken','changeToken','simpanStatus']),
		postStatus() {
			this.simpanStatus()
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Ujian aktif disimpan.'
		        })
			})
			.catch(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Error',
		            type: 'error',
		            text: 'Masih ada peserta yang berstatus online.'
		        })
			})
		},
		ubahKelompok() {
			this.pilihKelompok()
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Sesi disimpan.'
		        })
			})
			.catch(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Error',
		            type: 'error',
		            text: 'Masih ada peserta yang berstatus online.'
		        })
			})
		},
		ubahTes() {
			this.pilihTest()
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Ujian disimpan.'
		        })
			})
			.catch(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Error',
		            type: 'error',
		            text: 'Masih ada peserta yang berstatus online.'
		        })
			})
		},
		ubahToken() {
			this.rilistToken()
			.then(() => {
				this.$notify({
					group: 'foo',
					title: 'Sukses',
					type: 'success',
					text: 'Token berhasil dirilis'
				})
			})
		}
	},
	watch: {
		timeout() {
			this.changeToken()
		},
		fulled() {
			const date = new Date(this.fulled.jadwal.tanggal+' '+this.fulled.jadwal.mulai)
			const date2 = new Date(this.fulled.jadwal.tanggal+' '+this.fulled.jadwal.berakhir)
			const now = new Date()
			if(now > date && now < date2) {
				this.status = 2
			} 
			else if(now > date2) {
				this.status = 3
			}
		}
	},
	mounted() {
		setInterval(() => { this.timeout ++ }, 15 * 60000);
	}
}
</script>