<template>
	   <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div class="c-sidebar-brand"><img class="c-sidebar-brand-full" src="/img/brand/dki.png" height="46" alt="Vlam srv Logo"><img class="c-sidebar-brand-minimized" src="/img/brand/dki.png" height="46" alt="CoreUI Logo"></div>
      <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" to="/">
            <font-awesome-icon icon="home" class="c-sidebar-nav-icon" />
            Beranda
          </router-link>
        </li>
        <li class="c-sidebar-nav-title">Menu utama</li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :to="{ name: 'download' }">
            <font-awesome-icon icon="cloud-download-alt" class="c-sidebar-nav-icon" /> Status download
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :to="{ name: 'peserta.data' }">
            <font-awesome-icon icon="users" class="c-sidebar-nav-icon" /> Daftar peserta
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :to="{ name: 'ujian.status' }">
            <font-awesome-icon icon="clipboard-list" class="c-sidebar-nav-icon" /> Status ujian
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :to="{ name: 'ujian.peserta' }">
            <font-awesome-icon icon="user" class="c-sidebar-nav-icon" /> Status peserta
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" :to="{ name: 'peserta.reset' }">
            <font-awesome-icon icon="sync" class="c-sidebar-nav-icon" />  Reset login peserta
          </router-link>
        </li>
        <li class="c-sidebar-nav-item">
          <router-link class="c-sidebar-nav-link" to="/">
            <font-awesome-icon icon="sign-out-alt" class="c-sidebar-nav-icon" /> Logout
          </router-link>
        </li>
      </ul>
      <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
    </div>
</template>
<style>
.c-sidebar-nav-icon {
  margin-top: -2px;
}
</style>