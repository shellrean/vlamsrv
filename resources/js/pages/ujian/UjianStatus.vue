<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-header">
					Status ujian
				</div>
				<div class="card-body">
					<b-table striped hover bordered :busy="isBusy" small :fields="fields" :items="ujians.data" show-empty>
						<template v-slot:table-busy>
                            <div class="text-center text-primary my-2">
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                            </div>
                        </template>
                        <template v-slot:cell(index)="data">
                            {{ data.index + 1 }}
                        </template>
						<template v-slot:cell(lama)="row">
							{{ parseInt(row.item.lama)/60+ " Menit" }}
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
					<small><font-awesome-icon icon="info-circle" class="text-info"/> &nbsp; Token berubah interval 15 menit </small>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
	name: 'DataUjian',
	created() {
		this.getUjians()
	},
	data() {
		return {
			fields: [
				{ key: 'index', label: 'No' },
				{ key: 'banksoal.matpel.nama', label: 'Mata pelajaran' },
				{ key: 'mulai', label: 'Waktu mulai' },
				{ key: 'lama', label: 'Durasi' },
				{ key: 'token', label: 'Token' }
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

			if(filter.length != 0) {
				this.getUjians()
			} 
		}
	},
	mounted() {
		setInterval(() => { this.timeout ++ }, 15 * 60000);
	}
}
</script>