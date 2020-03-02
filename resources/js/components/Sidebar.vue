<template>
	   <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div class="c-sidebar-brand"><img class="c-sidebar-brand-full" src="/img/brand/dki.png" height="46" alt="Vlam srv Logo"><img class="c-sidebar-brand-minimized" src="/img/brand/dki.png" height="46" alt="CoreUI Logo"></div>
      <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" to="/">
            <i class="c-sidebar-nav-icon cil-speedometer"></i>
            Beranda
          </router-link>
        </li>
        <li class="c-sidebar-nav-title">Menu utama</li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :class="[currentPage.includes('download') ? activeClass : '']" :to="{ name: 'download' }">
            <i class="c-sidebar-nav-icon cil-cloud-download"></i>
             Status download
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :class="[currentPage.includes('peserta.data') ? activeClass : '']" :to="{ name: 'peserta.data' }">
            <i class="c-sidebar-nav-icon cil-people"></i> 
            Daftar peserta
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :class="[currentPage.includes('ujian.status') ? activeClass : '']" :to="{ name: 'ujian.status' }">
            <i class="c-sidebar-nav-icon cil-clipboard"></i>
            Status ujian
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :class="[currentPage.includes('ujian.peserta') ? activeClass : '']" :to="{ name: 'ujian.peserta' }">
            <i class="c-sidebar-nav-icon cil-task"></i>
            Status peserta
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :class="[currentPage.includes('peserta.reset') ? activeClass : '']" :to="{ name: 'peserta.reset' }">
            <i class="c-sidebar-nav-icon cil-sync"></i>
            Reset login peserta
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :class="[currentPage.includes('hapus') ? activeClass : '']" :to="{ name: 'hapus' }">
            <i class="c-sidebar-nav-icon cil-trash"></i>
            Hapus data lokal
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <a class="c-sidebar-nav-link" href="#" @click="logout">
            <i class="c-sidebar-nav-icon cil-account-logout"></i> 
            Logout
          </a>
        </li>
      </ul>
      <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
      return {
        activeClass: 'c-active'
      }
    },
    methods: {  
      ...mapActions('auth',['loggedOut']),
      logout() { 
        return new Promise((resolve, reject) => {
            this.loggedOut()
            localStorage.removeItem('token')
            resolve()
        }).then(() => {
            this.$store.state.token = localStorage.getItem('token')
            this.$router.push('/login')
        })
      }
    },
    computed: {
      currentPage() {
        return this.$route.name
      }
    }
}
</script>
<style>
.c-sidebar-nav-icon {
  margin-top: 0px;
}
</style>