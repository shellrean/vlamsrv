<template>
	<header class="c-header c-header-light c-header-fixed c-header-with-subheader">
    <button class="c-header-toggler c-class-toggler d-lg-none mr-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
      <span class="c-header-toggler-icon"></span>
    </button>
    <a class="c-header-brand d-sm-none" href="#">
      <img class="c-header-brand" src="/img/brand/coreui-base.svg" width="97" height="46" alt="CoreUI Logo">
    </a>
    <button class="c-header-toggler c-class-toggler ml-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
      <span class="c-header-toggler-icon"></span>
    </button>
        <ul class="c-header-nav d-md-down-none">
          <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Dashboard</a></li>
          <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Users</a></li>
          <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Settings</a></li>
        </ul>
        <ul class="c-header-nav ml-auto mr-4">
          <li class="c-header-nav-item dropdown"><a class="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              <div class="c-avatar"><img class="c-avatar-img" src="/img/avatars/avatar.png" alt="user@email.com"></div>
            </a>
            <div class="dropdown-menu dropdown-menu-right pt-0">
              <div class="dropdown-header bg-light py-2"><strong>Account</strong></div>
              <a class="dropdown-item" href="#">
                <font-awesome-icon icon="user-lock" /> &nbsp;Lock Account
              </a>
              <a class="dropdown-item" href="#" @click="logout">
                <font-awesome-icon icon="sign-out-alt" />&nbsp; Logout
              </a>
            </div>
          </li>
        </ul> 
        <div class="c-subheader px-3">
          <breadcrumb></breadcrumb>
        </div>
      </header>
</template>
<script>
  import Breadcrumb from './Breadcrumb.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      'breadcrumb' : Breadcrumb
    },
    computed: {
      ...mapState('user', {
        authenticated: state => state.authenticated
      })
    },
    methods: {
      logout() { 
        return new Promise((resolve, reject) => {
            localStorage.removeItem('token')
            resolve()
        }).then(() => {
            this.$store.state.token = localStorage.getItem('token')
            this.$router.push('/login')
        })
      }
    }
  }
</script>