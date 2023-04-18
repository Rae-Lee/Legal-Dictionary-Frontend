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
      <button  type="button" class="card-link edit-button btn btn-outline-secondary" @click="deleteUser(user)">刪除</button>
     </div>
  </div>
 </div>
  <!-- card end -->
</div>
</div>
</template>
<script>
const dummyData = {
  'users': [
    {
      'account': 'user1',
      'email': 'user1@example.com',
      'noteCounts': 2,
      'favoriteCounts': 2
    },
    {
      'account': 'user2',
      'email': 'user2@example.com',
      'noteCounts': 0,
      'favoriteCounts': 1
    }
  ]
}
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
    fetchData () {
      this.users = dummyData.users
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
