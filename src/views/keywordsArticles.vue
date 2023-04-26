<template>
<div>
  <div>
  <!-- Post preview-->
    <keywordTitle :keyword="keyword" :is-favorite="favorite" :is-processing ="isProcessing" v-if="!isProcessing" @addFavorite="addLike" @deleteFavorite="deleteLike"/>
        <div v-if="errMessage"><h1 class="text-center err" v-if="errMessage">{{ errMessage }}</h1></div>
    <lawCard :articles="articles" :currentPage="currentPage" v-if="!errMessage"/>
  </div>
   <pagination :totalPage="totalPage" :currentPage="currentPage" />
   </div>
</template>
<script>
import keywordAPI from './../apis/keywords'
import { errHandler } from '../utils/helpers'
import keywordTitle from '../components/keywordTitle.vue'
import userAPI from './../apis/users.js'
import lawCard from '../components/law-card.vue'
import pagination from '../components/pagination.vue'
export default {
  components: {
    lawCard,
    pagination,
    keywordTitle
  },
  data () {
    return {
      articles: [],
      currentPage: 1,
      totalPage: 1,
      errMessage: '',
      keyword: {
        id: -1,
        name: ''
      },
      favorite: false,
      isProcessing: true
    }
  },
  created () {
    console.log(this.$router)
    const { page = '' } = this.$route.query
    const { id } = this.$route.params
    this.fetchData({ page, id })
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    const { page = '' } = to.query
    this.fetchData({ page, id })
    next()
  },
  methods: {
    async fetchData ({ page, id }) {
      try {
        const resArticles = await keywordAPI.getKeywordArticles({ page, id })
        const resKeywords = await keywordAPI.getKeyword({ id })
        const resFavorite = await keywordAPI.getFavorite({ id })
        if (resArticles.data.status !== 200) {
          if (resArticles.data.status === 404) {
            this.errMessage = resArticles.data.message
          }
          errHandler(resArticles.data, this.$router)
        } else {
          this.articles = resArticles.data.data.articles
          this.currentPage = Number(resArticles.data.pagination.currentPage)
          this.totalPage = Number(resArticles.data.pagination.totalPage)
        }
        if (resKeywords.data.status !== 200) {
          if (resKeywords.data.status === 404) {
            this.errMessage = resKeywords.data.message
          }
          errHandler(resKeywords.data, this.$router)
        } else {
          this.keyword = { ...this.keyword, ...resKeywords.data.data }
        }
        if (resFavorite.data.status !== 200) {
          errHandler(resFavorite.data, this.$router)
        } else {
          this.favorite = resFavorite.data.data.isFavorite
        }
        this.isProcessing = false
      } catch (err) {
        this.isProcessing = false
        errHandler({ status: 500 })
      }
    },
    async addLike (id) {
      try {
        this.isProcessing = true
        const res = await userAPI.addFavorite({ id })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          this.isProcessing = false
          return
        }
        this.favorite = true
        this.isProcessing = false
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    async deleteLike (id) {
      try {
        this.isProcessing = true
        const res = await userAPI.deleteFavorite({ id })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          this.isProcessing = false
          return
        }
        this.favorite = false
        this.isProcessing = false
        return
      } catch (err) {
        errHandler({ status: 500 })
      }
    }
  }
}
</script>
<style >
/* keyword */
</style>
