<template>
  <h2 class="post-title">
    <a  @click="$router.back()" class="post">
      <i class="fa-solid fa-angle-left angle post" ></i>
    </a>{{ keyword.name }}
    <i class="fa-regular fa-heart heart" v-show="!keyword.isFavorite" @click="addFavorite"></i>
    <i class="fa-solid fa-heart heart" v-show="keyword.isFavorite" @click="deleteFavorite"></i>
  </h2>
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
  },
  methods: {
    addFavorite () {
      
    },
    deleteFavorite () {
      
    }
  }
}
</script>
