<template>
<div class="post-preview dashboard">
  <div>
  <h2 class="post-title">
    <a  @click="$router.back()" class="post">
      <i class="fa-solid fa-angle-left angle post" ></i>
    </a>{{ keyword.name }}
    <a @click="addFavorite(keyword.id)">
    <i class="fa-regular fa-heart heart" v-show="!isFavorite" ></i>
    </a>
    <a @click="deleteFavorite(keyword.id)">
    <i class="fa-solid fa-heart heart" v-show="isFavorite"></i>
    </a>
  </h2>
   <hr class="horizon">
        <div id="filters" class="filters">
          <router-link :to="{ name: 'keywords articles', params: { id: keyword.id } }" class="px-3 switch">相關法條</router-link>
          <router-link :to="{ name: 'keywords references', params: { id: keyword.id } }" class="px-3 switch">相關裁判</router-link>
          <router-link :to="{ name: 'keywords notes', params: { id: keyword.id } }" class="px-3 switch">我的筆記</router-link>
       </div>
       </div>
</div>
</template>
<script>
import userAPI from './../apis/users.js'
import { errHandler } from '../utils/helpers'
export default {
  props: {
    keyword: {
      type: Object,
      required: true
    },
    initialFavorite: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFavorite: this.initialFavorite
    }
  },
  methods: {
    async addFavorite (id) {
      try {
        const res = await userAPI.addFavorite({ id })
        const { data } = res
        console.log(data)
        if (data.status !== 200) {
          errHandler(data, this.$router)
          return
        }
        this.isFavorite = true
        return
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    async deleteFavorite (id) {
      try {
        const res = await userAPI.deleteFavorite({ id })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          return
        }
        this.isFavorite = false
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
 color: #535353;
 padding-right: 50px;
 font-size: 20px;
}
.dashboard {
  margin-left: 100px;
  margin-right: 100px;
  text-decoration: none;
  padding: 0px;
  color: #535353;
}

.post {
  color: #535353;
  padding-right: 50px;
  font-size: 20px;
}

.post-preview {
  text-decoration: none;
}

.post-title {
  font-size: 45px;
  text-decoration: none;
  color: #535353;
  margin-top: 20px;
  margin-bottom: 2px;
}

.post-subtitle {
  margin-top: 30px;
  margin-left: 5px;
  margin-bottom: 30px;
  text-decoration: none;
  color: #789;
}

.heart {
  color: #535353;
  margin-left: 40px;
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
}

/* category */
.horizon {
  width: 1350px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.filters {
  text-align: center;
  width: 1310px;
  height: 80px;
  border-top-color: #535353;
  border-bottom-color: #535353;
  text-decoration: none;
}

.filters a:hover,
.filters a:focus,
.filters a:active {
  text-decoration: none;
}

.filters a:hover:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #000;
}

.filters a.active {
  color: #000;
}

.filters a.active:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #000;
}

.switch {
  color: #535351;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding-right: 50px;
}
</style>
