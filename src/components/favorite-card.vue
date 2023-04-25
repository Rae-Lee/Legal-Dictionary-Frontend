<template>
    <!-- Post preview-->
    <div class="post-preview ">
      <div class="post-preview d-flex">
        <h2 class="post-title"><router-link :to="{name:'keywords articles', params:{id: keyword.id}}" class="post">{{ keyword.name }}</router-link></h2>
          <a @click="deleteFavorite(keyword.id)">
          <i class="fa-solid fa-heart heart" ></i>
          </a>
      </div>
        <!-- Divider-->
      <hr class="my-4" />
    </div>
</template>
<script>
import userAPI from './../apis/users.js'
import { errHandler } from '../utils/helpers'
export default {
  props: {
    initialKeyword: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      keyword: this.initialKeyword
    }
  },
  methods: {
    async deleteFavorite (id) {
      try {
        const res = await userAPI.deleteFavorite({ id })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          return
        }
        this.$emit('deleteFavorite', id)
        return
      } catch (err) {
        errHandler({ status: 500 })
      }
    }
  }
}
</script>
<style>
.post {
  text-decoration: none;
  padding: 10px;
  color: #535353;
}

.post-preview {
  text-decoration: none;
}

.post-title {
  text-decoration: none;
  color: #535353;
  margin-top: 20px;
  margin-bottom: 10px;
}

.post-subtitle {
  margin-top: 30px;
  margin-left: 5px;
  margin-bottom: 30px;
  text-decoration: none;
  color: #789;
}
.heart{
  color:#535353;
  margin-left:50px;
  width:20px;
  height:20px
}
.heart :hover{
  color: #A48500;
}
</style>
