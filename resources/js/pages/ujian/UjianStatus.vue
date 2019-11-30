<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					<button @click="$bvModal.show('modal-scoped')" class="btn btn-sm btn-primary rounded-0">Tambah jadwal</button>
				</div>
				<div class="card-body">
					<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="ujians.data" show-empty>
						<template v-slot:table-busy>
                            <div class="text-center text-warning my-2">
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                            </div>
                        </template>
						<template v-slot:cell(lama)="row">
							{{ parseInt(row.item.lama)/60+ " Menit" }}
						</template>
						<template v-slot:cell(status)="row">
							<b-form-checkbox size="lg" v-model="row.item.status_ujian" @change="seterStatus(row.item.id,row.item.status_ujian)" value="1">Aktif</b-form-checkbox>
						</template>
						<template v-slot:cell(action)="row">
							<router-link :to="{ name: 'ujian.peserta', params: { ujian_id: row.item.id } }" class="btn btn-sm btn-success rounded-0">
								<font-awesome-icon icon="list" />
							</router-link>
						</template>
                    </b-table>
                    <div class="row">
                        <div class="col-md-6">
                            <p v-if="ujians.data"><i class="fa fa-bars"></i> {{ ujians.data.length }} item dari {{ ujians.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                    v-model="page"
                                    :total-rows="ujians.meta.total"
                                    :per-page="ujians.meta.per_page"
                                    aria-controls="products"
                                    v-if="ujians.data && ujians.data.length > 0"
                                    ></b-pagination>
                            </div>
                        </div>
                    </div>
				</div>
				<div class="card-footer">
				</div>
			</div>
		</div>
		 <b-modal id="modal-scoped" size="lg" hide-backdrop>
		    <template v-slot:modal-header="{ close }">
		      <h5>Setting ujian</h5>
		    </template>
		    <div class="form-group">
		    	<label>Banksoal</label>
		    	<select class="form-control" :class="{ 'is-invalid' : errors.banksoal_id }" v-model="data.banksoal_id">
		    		<option v-for="banksoal in banksoals" :value="banksoal.id">{{ banksoal.kode_banksoal}} - {{ banksoal.matpel.nama }}</option>
		    	</select>
		    	<div class="invalid-feedback" v-if="errors.banksoal_id">{{ errors.banksoal_id[0] }}</div>
		    </div>
		    <div class="form-group">
		    	<label>Tanggal ujian</label>
		    	<datetime v-model="data.tanggal" input-class="form-control" :class="{ 'is-invalid' : errors.tanggal }"></datetime>
		    	<div class="invalid-feedback" v-if="errors.tanggal">{{ errors.tanggal[0] }}</div>
		    </div>
		    <div class="row">
		    	<div class="col-md-4">
		    		<div class="form-group">
				    	<label>Jam mulai</label>
				    	<datetime v-model="data.mulai" input-class="form-control" :class="{ 'is-invalid' : errors.mulai }" type="time"></datetime>
				    	<div class="invalid-feedback" v-if="errors.mulai">{{ errors.mulai[0] }}</div>
				    </div>
		    	</div>
		    	<div class="col-md-4">
					<div class="form-group">
				    	<label>Jam ditutup</label>
				    	<datetime v-model="data.berakhir" input-class="form-control" :class="{ 'is-invalid' : errors.berakhir }" type="time"></datetime>
				    	<div class="invalid-feedback" v-if="errors.berakhir">{{ errors.berakhir[0] }}</div>
				    </div>
		    	</div>
		    	<div class="col-md-4">
					<div class="form-gorup">
				    	<label>Durasi</label>
				    	<input type="number" class="form-control" :class="{ 'is-invalid' : errors.lama }" name="" placeholder="Menit" v-model="data.lama">
				    	<div class="invalid-feedback" v-if="errors.lama">{{ errors.lama[0] }}</div>
				    </div>
		    	</div>
		    </div>
		    <template v-slot:modal-footer="{ cancel }">
		      <b-button size="sm" variant="success" squared @click="postUjian">
		        Submit
		      </b-button>
		      <b-button size="sm" variant="secondary" squared @click="cancel()">
		        Cancel
		      </b-button>
		    </template>
		</b-modal>
	</div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

export default {
	name: 'DataUjian',
	components: {
	    datetime: Datetime
	},
	created() {
		this.getUjians()
		this.getBanksoals()
	},
	data() {
		return {
			fields: [
				{ key: 'banksoal.kode_banksoal', label: 'Kode banksoal' },
				{ key: 'tanggal', label: 'Tanggal' },
				{ key: 'mulai', label: 'Waktu mulai' },
				{ key: 'lama', label: 'Durasi' },
				{ key: 'token', label: 'Token' },
				{ key: 'status', label: 'Status ujian' },
				{ key: 'action', label: 'Aksi' }
			],
			search: '',
			data: {
				mulai: '',
				berakhir: '',
				lama: '',
				tanggal: '',
				banksoal_id: '',
			},
			isActive: '',
			isBusy: true,
			timeout: 0
		}
	},
	computed: {
		...mapState(['errors']),
		...mapState('ujian', {
			ujians: state => state.ujians
		}),
		...mapState('banksoal', {
			banksoals: state => state.banksoals.data
		}),
		page: {
			get() {
				return this.$store.state.ujian.page
			},
			set(val) {
				this.$store.commit('ujian/SET_PAGE', val)
			}
		}
	},
	methods: {
		...mapActions('ujian', ['getUjians','addUjian','setStatus','changeToken']),
		...mapActions('banksoal', ['getBanksoals']),
		...mapMutations(['CLEAR_ERROR', 'SET_LOADING'])
	},
	watch: {
		page() {
			this.getUjians()
		},
		search() {
			this.getUjians(this.search)
		},
		ujians() {
			this.isBusy = false
		},
		timeout() {
			const filter = this.ujians.data.filter((ujian) => {
				return ujian.status_ujian == 1
			})

			filter.forEach((item) => {
				this.changeToken({ id: item.id})
			})

			this.getUjians()
		}
	},
	mounted() {
		setInterval(() => { this.timeout ++ }, 15 * 60000);
	}
}
</script>