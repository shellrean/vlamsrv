<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					Daftar peserta
					<div class="float-right">
                        <input type="text" class="form-control" placeholder="Cari nama..." v-model="search">
                    </div>
				</div>
				<div class="card-body">
					<div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Data peserta</h4>
                            <div class="small text-muted">Lihat data peserta make sure data peserta sesuai</div>
                        </div>
                    </div>
                    <br>
					<b-table id="table-transition-example" striped hover bordered small :fields="fields" :items="pesertas.data" :busy="isBusy" show-empty :tbody-transition-props="transProps">
						<template v-slot:table-busy>
                            <div class="text-center text-dark my-2">
							  <b-spinner small type="grow"></b-spinner> Loading ...
			                </div>
                        </template>
						<template v-slot:cell(no)="row">
							{{ from+ row.index }}
						</template>
					</b-table>
					<div class="row">
                        <div class="col-md-6">
                            <p v-if="pesertas.data"><i class="fa fa-bars"></i> {{ pesertas.data.length }} item dari {{ pesertas.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
                                	size="sm"
                                    v-model="page"
                                    :total-rows="pesertas.meta.total"
                                    :per-page="pesertas.meta.per_page"
                                    aria-controls="products"
                                    v-if="pesertas.data && pesertas.data.length > 0"
                                    ></b-pagination>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
	name: 'DataPeserat',
	created() {
		this.getPesertas()
	},
	data() {
		return {
			fields: [
				{ key: 'no', label: 'No' },
				{ key: 'no_ujian', label: 'No ujian', sortable: true },
				{ key: 'nama', label: 'Nama peserta', sortable: true }
			],
			search: '',
			isBusy: true,
			transProps: {
	          name: 'flip-list'
	        },
		}
	},
	computed: {
		...mapState('peserta', {
			pesertas: state => state.pesertas,
			from : state => state.from
		}),
		page: {
			get() {
				return this.$store.state.peserta.page
			},
			set(val) {
				this.$store.commit('peserta/SET_PAGE', val)
			}
		}
	},
	methods: {
		...mapActions('peserta', ['getPesertas','removePeserta'])
	},
	watch: {
		page() {
			this.isBusy = true
			this.getPesertas()
		},
		search() {
			this.isBusy = true
			this.getPesertas(this.search)
		},
		pesertas() {
			this.isBusy = false
		}
	}
}
</script>
<style lang="scss">
	table#table-transition-example .flip-list-move {
	  transition: transform 1s;
	}
</style>