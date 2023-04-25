<template>
<div class="post-preview dashboard">
  <div>
  <h2 class="post-title" >
    <router-link to="/" class="post" >
      <i class="fa-solid fa-angle-left angle post" ></i>
    </router-link>{{ keyword.name }}
    <a  @click="addFavorite(keyword.id)" :disabled="isProcessing">
    <i class="fa-regular fa-heart heart" v-show="!isFavorite"  ></i>
    </a>
    <a   @click="deleteFavorite(keyword.id)" :disabled="isProcessing" >
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

export default {
  props: {
    keyword: {
      type: Object,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    },
    isProcessing: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    async addFavorite (id) {
      this.$emit('addFavorite', id)
    },
    async deleteFavorite (id) {
      this.$emit('deleteFavorite', id)
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
.post :hover{
  color:#A48500;
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
.heart :hover{
  color: #A48500;
}
</style>
