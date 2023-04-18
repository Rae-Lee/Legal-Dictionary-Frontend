<template>
    <!-- ======= Navbar ======= -->
    <nav class="navbar  navbar-expand-lg  navbar-light custom-navbar" v-if="token">
      <div class="navigation">
        <div class="element container-fluid">
          <router-link to="/" class="brand nav-brand" v-if="currentUser.role === 'user'" >
            <img src="../assets/LOGO.png" alt="logo" width="50" height="50">法律用語辭典
          </router-link>
          <router-link to="/admin" class="brand nav-brand" v-if="currentUser.role === 'admin'" >
              <img src="../assets/LOGO.png" alt="logo" width="50" height="50">法律用語辭典
            </router-link>
          <div class="navElement">
            <ul class="nav">
              <li class="nav-item">
                 <router-link class="nav-link" to="/profile">Hey, {{ currentUser.name }}</router-link>
               </li>
             <li class="nav-item px-3">
                 <router-link to="/logout" class="layout-buttom" >登出
              </router-link>
             </li>
          </ul>
          </div>

        </div>
      </div>
    </nav>
</template>
<script>
const dummyUser = {
  id: 2,
  account: 'user1',
  name: 'User1',
  email: 'user1@example.com',
  role: 'user'
}
export default {
  data () {
    return {
      currentUser: {
        id: -1,
        account: '',
        name: '',
        email: '',
        role: 'user'
      },
      token: '123'
    }
  },
  methods: {
    fetchUser () {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser
      }
    }
  },
  created () {
    this.fetchUser()
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
