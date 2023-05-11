<template>
    <!-- ======= Navbar ======= -->
    <nav class="navbar  navbar-expand-lg  navbar-light custom-navbar" v-if="getRouteName !== 'login' && getRouteName !== 'register' && getRouteName !== 'adminLogin'">
      <div class="navigation">
        <div class="element container-fluid">
          <div v-if="!role" class="px-5">
            <h5>
           <img src="../assets/LOGO.png" alt="logo" width="50" height="50">
           法律用語辭典</h5>
           </div>
          <router-link to="/" class="brand nav-brand" v-if="role === 'user'" >
            <img src="../assets/LOGO.png" alt="logo" width="50" height="50">法律用語辭典
          </router-link>
          <router-link to="/admin" class="brand nav-brand" v-if="role === 'admin'" >
              <img src="../assets/LOGO.png" alt="logo" width="50" height="50">法律用語辭典
            </router-link>
          <div class="navElement">
             <router-link to="/login" class="layout-buttom" v-if="!isAuthenticated">登入
                    </router-link>
            <ul class="nav" v-if="isAuthenticated">
              <li class="nav-item">
                 <router-link class="nav-link" :to="{name: 'profile', params: {id: currentUser.id}}">{{ currentUser.name }}，你好</router-link>
               </li>
             <li class="nav-item px-3">
                 <a class="layout-buttom" @click="logout" >登出
                 </a>
             </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['currentUser', 'role', 'isAuthenticated']),
    getRouteName () {
      return this.$route.name
    }
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/login')
    }
  }
}

</script>
<style>
.navigation {
  background: #fff;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 0px;
   }
.element{
  display: flex;
  padding-top:40px;
  padding-left: 0px;
}
.layout-buttom {
  display: inline-block;
  background: #6dabe4;
  color: #fff;
  border-bottom: none;
  width: auto;
  padding: 15px 15px;
  border-radius: 25%;
  cursor: pointer;
  text-decoration: none;
}
  .layout-buttom:hover {
    background: #4292dc; }
img{
  padding-right:8px;
}
.brand{
  color: #535353;
  line-height: 1.66;
  font-family: Poppins;
  font-size: 25px;
  text-decoration-line: none;
  letter-spacing:2px;
  margin-left:80px;
}
.form-submit {
  background: #6dabe4;
  color: #fff;
  }
  .form-submit:hover {
    background: #4292dc;
    color:#fff;
  }
  .navElement{
      margin-left:1000px
  }
  .nav-link{
    color:#A48500;
    font-size: 15px;
  }
</style>
