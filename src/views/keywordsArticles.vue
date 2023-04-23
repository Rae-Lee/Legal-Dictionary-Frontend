<template>
<div>
  <div>
  <!-- Post preview-->
    <keywordTitle :keyword="keyword" :initial-favorite="isFavorite" v-if="keyword.name"/>
        <div v-if="errMessage">{{ errMessage }}</div>
    <lawCard :articles="articles" :currentPage="currentPage" v-if="!errMessage"/>
  </div>
   <pagination :totalPage="totalPage" :currentPage="currentPage" />
   </div>
</template>
<script>
import keywordTitle from '../components/keywordTitle.vue'
import lawCard from '../components/law-card.vue'
import pagination from '../components/pagination.vue'
import keywordAPI from './../apis/keywords'
import { errHandler } from '../utils/helpers'
export default {
  components: {
    keywordTitle,
    lawCard,
    pagination
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
      isFavorite: false
    }
  },
  created () {
    const { page = '' } = this.$route.query
    const { id } = this.$route.params
    this.fetchData({ page, id })
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = this.$route.params
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
          errHandler(resArticles.data, this.$router, this.errMessage)
          return
        }
        if (resKeywords.data.status !== 200) {
          errHandler(resKeywords.data, this.$router, this.errMessage)
          return
        }
        if (resFavorite.data.status !== 200) {
          errHandler(resFavorite.data, this.$router, this.errMessage)
          return
        }
        this.articles = resArticles.data.data.articles
        this.currentPage = Number(resArticles.data.pagination.currentPage)
        this.totalPage = Number(resArticles.data.pagination.totalPage)
        this.keyword = { ...this.keyword, ...resKeywords.data.data }
        this.isFavorite = resFavorite.data.data.isFavorite
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
