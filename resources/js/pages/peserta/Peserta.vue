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
					<b-table striped hover bordered small :fields="fields" :items="pesertas.data" :busy="isBusy" show-empty>
					</b-table>
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
				{ key: 'no_ujian', label: 'No ujian' },
				{ key: 'nama', label: 'Nama peserta' }
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
		...mapActions('peserta', ['getPesertas','removePeserta'])
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