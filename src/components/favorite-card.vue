<template>
  <div>
  <div v-for="keyword in keywords" :key="keyword.Element.id" >
    <!-- Post preview-->
    <div class="post-preview ">
      <div class="post-preview d-flex">
        <span class="post-title"><router-link :to="{name:'keywords articles', params:{id: keyword.Element.id}}" class="post">{{ keyword.Element.name }}</router-link></span>
          <a @click="deleteFavorite(keyword.Element.id)">
          <i class="fa-solid fa-heart heart" ></i>
          </a>
      </div>
        <!-- Divider-->
      <hr class="my-4" />
    </div>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    keywords: {
      type: Array,
      required: true
    }
  },
  methods: {
    async deleteFavorite (id) {
      this.$emit('deleteFavorite', id)
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
  font-size: 36px;
  font-weight: bold;
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
  height:20px;
  margin-top:40px;
}
.heart :hover{
  color: #A48500;
}
</style>
