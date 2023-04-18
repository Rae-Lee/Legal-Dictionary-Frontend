<template>
    <!-- Post preview-->
    <div class="post-preview">
        <h2 class="post-title"><router-link to="{name:'keywords', params:{id: keyword.id}}" class="post">{{ keyword.name }}</router-link><i class="fa-regular fa-heart heart"></i></h2>
        <!-- <h5 class="post-subtitle"><router-link to="/keywords/keyword.id" class="post">{{ keyword.name }}</router-link></h5> -->
        <!-- Divider-->
      <hr class="my-4" />
    </div>
</template>
<script>
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
</style>
