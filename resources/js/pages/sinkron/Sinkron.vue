<template>
	<div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
            	<div class="card">
            		<div class="card-header">
            			Sinkronisasi
            		</div>
            		<div class="card-body">
            			<b-button variant="primary" size="sm" :disabled="isLoading" @click="sinkronData">
            			<b-spinner small type="grow" v-show="isLoading"></b-spinner>
            			Sinkron</b-button>
            		</div>
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
	methods: {
		...mapActions('pusat', ['getSinkronServer']),
		sinkronData() {
			this.getSinkronServer()
			.then(() => {
				this.$notify({
		            group: 'foo',
		            title: 'Sukses',
		            type: 'success',
		            text: 'Soal berhasil ditambah.'
		        }),
		        this.SET_LOADING(false)
			})
		}
	}
}
</script>