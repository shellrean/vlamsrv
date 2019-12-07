<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					Reset peserta
					<div class="float-right">
                        <input type="text" class="form-control" placeholder="Cari nama..." v-model="search">
                    </div>
				</div>
				<div class="card-body">
					<b-table striped hover bordered small :fields="fields" :items="pesertas.data" :busy="isBusy" show-empty>
						<template v-slot:cell(reset)="row">
							<b-button size="sm" variant="danger" squared @click="resetPeserta(row.item.id)"><font-awesome-icon icon="sync" /></b-button>
						</template>
					</b-table>
					<div class="row">
                        <div class="col-md-6">
                            <p v-if="pesertas.data"><i class="fa fa-bars"></i> {{ pesertas.data.length }} item dari {{ pesertas.meta.total }} total data</p>
                        </div>
                        <div class="col-md-6">
                            <div class="float-right">
                                <b-pagination
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
				{ key: 'no_ujian', label: 'No ujian', sortable: true },
				{ key: 'nama', label: 'Nama peserta', sortable: true },
				{ key: 'reset', label: 'Reset'}
			],
			search: '',
			isBusy: true
		}
	},
	computed: {
		...mapState('peserta', {
			pesertas: state => state.pesertas
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
		...mapActions('peserta', ['getPesertas','removePeserta','resetLoginPeserta']),
		resetPeserta(id) {
			this.$swal({
				title: 'Reset peserta',
				text: 'Peserta akan logout secara otomatis',
				type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Lanjutkan!'
			}).then((result) => {
                if (result.value) {
                    this.resetLoginPeserta({ id: id })
                }
            })
		}
	},
	watch: {
		page() {
			this.getPesertas()
		},
		search() {
			this.getPesertas(this.search)
		},
		pesertas() {
			this.isBusy = false
		}
	}
}
</script>