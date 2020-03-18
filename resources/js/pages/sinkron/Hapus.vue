<template>
	<div class="c-body">
        <loading :active.sync="isLoading" 
        :is-full-page="true"></loading>
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
            	<div class="card">
            		<div class="card-header">
                        Hapus data lokal
            		</div>
                    <div class="card-body">
                        <b-button squared size="sm" variant="info" @click="hapusData">Hapus</b-button> <br>
                        <b-progress :value="hapus" variant="info" show-progress animated class="mt-2"></b-progress>
                    </div>
                    <div class="card-footer">

                    </div>
            	</div>
            </div>
          </div>
        </main>
    </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    name: 'Hapus',
    components: {
        Loading
    },
    computed: {
        ...mapGetters(['isLoading']),
        ...mapState('pusat', {
            hapus: state => state.hapus
        })
    },
    methods: {
        ...mapActions('pusat',['hapusDataLocal']),
        hapusData() {
            this.$swal({
                title: 'Hapus data local',
                text: 'Hapus seluruh data local',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#dcdcdc',
                confirmButtonText: 'Iya, Lanjutkan!'
            }).then((result) => {
                if (result.value) {
                    this.hapusDataLocal()
                    .then(() => {
                        this.$notify({
                            group: 'foo',
                            title: 'Sukses',
                            type: 'success',
                            text: 'Data lokal berhasil dihapus.'
                        })
                    })
                }
            })
        }
    }
}
</script>