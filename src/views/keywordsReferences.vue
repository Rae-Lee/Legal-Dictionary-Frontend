<template>
  <div>
    <div>
  <!-- Post preview-->
   <keywordTitle :keyword="keyword" :initial-favorite="isFavorite" v-if="keyword.name"/>
    <div v-if="errMessage">{{ errMessage }}</div>
    <referenceCard :references="references" v-if="!errMessage"/>
  </div>
  <pagination :totalPage="totalPage" :currentPage="currentPage"/>
 </div>
</template>
<script>
import keywordTitle from '../components/keywordTitle.vue'
import referenceCard from '../components/reference-card.vue'
import pagination from '../components/pagination.vue'
import keywordAPI from './../apis/keywords'
import { errHandler } from '../utils/helpers'
export default {
  components: {
    keywordTitle,
    referenceCard,
    pagination
  },
  data () {
    return {
      references: [],
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
        const resReferences = await keywordAPI.getKeywordReferences({ page, id })
        const resKeywords = await keywordAPI.getKeyword({ id })
        const resFavorite = await keywordAPI.getFavorite({ id })
        if (resReferences.data.status !== 200) {
          errHandler(resReferences.data, this.$router, this.errMessage)
          return
        }
        this.references = resReferences.data.data.references
        this.currentPage = Number(resReferences.data.pagination.currentPage)
        this.totalPage = Number(resReferences.data.pagination.totalPage)
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
</style>
