<template>
<div class="container">
<div class="row">
  <!-- card start -->
  <div class="col-sm-4" v-for="user in users" :key="user.id">
     <div class="card">
      <div class="card-body">
       <h5 class="card-title">{{user.account}}</h5>
       <p>{{ user.email }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{user.favoriteCounts}} 個收藏</li>
        <li class="list-group-item">{{user.noteCounts}} 篇筆記</li>
      </ul>
      <div class="card-body d-flex justify-content-center">
      <button  type="button" class="card-link edit-button btn btn-outline-secondary" @click="deleteUser(user)" v-show="!user.deletedAt">暫停</button><p v-show="user.deletedAt">已暫停用戶帳號</p>
     </div>
  </div>
 </div>
  <!-- card end -->
</div>
</div>
</template>
<script>
import adminAPI from './../apis/admin.js'
import { errHandler } from '../utils/helpers'
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const res = await adminAPI.getUsers()
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          return
        }
        this.users = data.data.users
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    deleteUser (user) {
      this.users.filter(u => u.id !== user.id)
    }
  }
}
</script>
<style>
  button{
  background-color: white;
  border-color:#789;
  }
</style>
