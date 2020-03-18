<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					Status ujian
				</div>
				<div class="card-body">
					<div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Status ujian</h4>
                            <div class="small text-muted">Atur sesi dan banksoal aktif dan rilis token agar token dapat digunakan</div>
                        </div>
                    </div>
                    <br>
                    <template>
                    	<div class="text-center text-light my-2" v-show="isLoading">
						  <b-spinner small type="grow"></b-spinner> Checking data ujian...
		                </div>
                    </template>
                    <template >
					<div class="form-group" v-show="!isLoading">
						<div class="row">
							<div class="col-2">
								<label>Kelompok</label>
							</div>
							<div class="col-6">
								<select class="form-control form-control-sm rounded-0" v-model="aktif.kelompok">
									<option v-for="sesi in sesis.data" :value="sesi.sesi">{{ sesi.sesi }}</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group" v-show="!isLoading">
						<div class="row">
							<div class="col-2">
								<label>Daftar ujian</label>
							</div>
							<div class="col-6">
								<select class="form-control form-control-sm rounded-0" v-model="aktif.jadwal">
									<option>Pilih</option>
									<option v-for="ujian in ujians.data" :value="ujian.id">
										<span v-if="!ujian.alias != ''" v-for="(banksol, index) in ujian.banksoal">{{ ' [ '+banksol.kode_banksoal+' ] ' }} </span>
										<span v-if="ujian.alias != ''">{{ ujian.alias }}</span>
									</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group" v-show="!isLoading">
						<div class="row">
							<div class="col-2">
								<label>Token</label>
							</div>
							<div class="col-6">
								<input type="text" readonly name="" class="form-control form-control-sm rounded-0" :value="((aktif.status_token == 1) ? aktif.token : '-') +' | 15 Menit | '+( aktif.status_token == 0 ? '(Belum release)' : '(Release)' )">
								<input type="hidden" :value="aktif.token">
							</div>
							<div class="col-3">
								<b-button variant="dark" size="sm" squared @click="ubahToken" v-show="aktif.status_token == 0">Rilis token </b-button>
							</div>
						</div>
					</div>
					<div class="form-group" v-show="!isLoading">
						<b-button variant="dark" size="sm" squared @click="postStatus"> Simpan semua</b-button>
					</div>
					</template>
				</div>
				<div class="card-footer">
					<h1 v-show="aktif.status_token == 1" class="bg-info" style="max-width: 220px; text-align: center;">{{ aktif.token }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'

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
		this.getSesi()
	},
	computed: {
		...mapGetters(['isLoading']),
		...mapState(['error']),
		...mapState('ujian', {
			aktif: state => state.ujianAktif,
			ujians: state => state.ujians,
			fulled: state => state.aktif,
			sesis: state => state.sesis
		})
	},
	methods: {
		...mapActions('ujian', ['getUjians','getSesi','addUjian','setStatus','changeToken','getUjianAktif','pilihKelompok','pilihTest','rilistToken','changeToken','simpanStatus']),
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
		}
	},
	mounted() {
		setInterval(() => { this.timeout ++ }, 15 * 60000);
	}
}
</script>