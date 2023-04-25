<template>
<div class="container">
<div class="row">
  <!-- card start -->
  <div class="col-sm-4" v-for="user in users" :key="user.id">
     <div class="card">
      <div class="card-body">
       <h5 class="card-title">{{user.account}}  <span class ="status" v-show="user.deletedAt">已暫停</span></h5>
       <p>{{ user.email }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{user.favoriteCounts}} 個收藏</li>
        <li class="list-group-item">{{user.noteCounts}} 篇筆記</li>
      </ul>
      <div class="card-body d-flex justify-content-center">
      <button  type="button" class="card-link edit-button btn btn-secondary" @click="suspendUser(user)" v-show="!user.deletedAt">暫停</button>
     <button  type="button" class="card-link edit-button btn btn-outline-secondary" @click="unsuspendUser(user)" v-show="user.deletedAt">解除</button>
      </div>
     </div>
  </div>
  <!-- card end -->
</div>
</div>
</template>
<script>
import adminAPI from './../apis/admin.js'
import { errHandler, successHandler } from '../utils/helpers'
import Swal from 'sweetalert2'
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
    async suspendUser (user) {
      try {
        const result = await Swal.fire({
          title: '你是否真的要暫停該用戶?',
          showCancelButton: true,
          confirmButtonText: '暫停',
          cancelButtonText: '取消'
        })
        if (result.value) {
          const id = user.id
          const res = await adminAPI.suspendUser({ id })
          const { data } = res
          if (data.status !== 200) {
            errHandler(data, this.$router)
            return
          }
          this.users = this.users.map(u => {
            if (u.id === id) {
              return {
                ...u,
                deletedAt: new Date()
              }
            } else {
              return u
            }
          })
          successHandler(data)
        }
      } catch (err) { errHandler({ status: 500 }) }
    },
    async unsuspendUser (user) {
      try {
        const id = user.id
        const res = await adminAPI.unsuspendUser({ id })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          return
        }
        this.users = this.users.map(u => {
          if (u.id === id) {
            return {
              ...u,
              deletedAt: null
            }
          } else {
            return u
          }
        })
        successHandler(data)
        return
      } catch (err) { errHandler({ status: 500 }) }
    }
  }
}
</script>
<style>
  button{
  background-color: white;
  border-color:#789;
  }
  .status{
    color:#A48500;
    padding-left:4px;
    font-size: 16px;
  }
</style>
