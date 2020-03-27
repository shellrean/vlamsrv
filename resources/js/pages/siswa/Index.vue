<template>
	<div class="wrapper overlay-sidebar">
      <div class="content">
        <div class="panel-header bg-primary-gradient">
          <div class="page-inner py-6">
            <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row px-3">
              <div class="logo">
                <img src="/unbk/img/logo-white.png">
                <h2 class="text-white pb-2 fw-bold">ExtraordinaryCBT</h2>
              </div>
              <div class="ml-md-auto py-2 py-md-0">
                <a href="#" class="text-white btn btn-round mr-2">{{ peserta.nama }}</a>
                <a href="#" @click.prevent="logout" class="btn btn-secondary btn-round">
                Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <div class="nav-fixed-bottom">
        <p class="text-center">&copy; ExtraordinaryCBT 2020 by Shellrean & ICT Team</p>
      </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

	export default {
		name: 'IndexUjian',
    created() {
      this.setPesertaDetail()
    },
    data() {
      return {

      } 
    },
    computed: {
      ...mapState('siswa_user', {
        peserta: state => state.pesertaDetail
      }),
      ...mapState('siswa_jadwal', {
        jadwal: state => state.banksoalAktif.data
      }),
    },
    methods: {
      ...mapActions('siswa_jadwal',['ujianAktif']),
      ...mapActions('siswa_user',['setPesertaDetail']),
      ...mapActions('siswa_auth',['logoutPeserta']),
      ...mapActions('siswa_ujian',['getPesertaDataUjian']),
      logout() { 
        return new Promise((resolve, reject) => {
            this.logoutPeserta({ no_ujian : localStorage.getItem('no_ujian') })
            .then(() => {
              localStorage.removeItem('token')
              localStorage.removeItem('no_ujian')
              localStorage.removeItem('nama')
              localStorage.removeItem('id')
              resolve()
            })
            .catch(() => {
              localStorage.removeItem('token')
              localStorage.removeItem('no_ujian')
              localStorage.removeItem('nama')
              localStorage.removeItem('id')
              resolve()
            })
        }).then(() => {
            this.$store.state.token = localStorage.getItem('token')
            this.$router.push('/')
        })
      },
      dataUjianPeserta() {
        this.getPesertaDataUjian({
          jadwal_id   :this.jadwal.jadwal.id,
          peserta_id  : this.peserta.id,
        lama    : this.jadwal.jadwal.lama
        })
      }
    },
    watch: {
      peserta() {
        this.ujianAktif(this.peserta.id)
      },
      jadwal(val) {
         if(typeof(val) != 'undefined') {
            this.dataUjianPeserta()
          }
      }
    }
	}
</script>