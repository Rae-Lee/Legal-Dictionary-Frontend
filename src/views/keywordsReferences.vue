<template>
  <div>
    <div>
  <!-- Post preview-->
   <keywordTitle :keyword="keyword" :is-favorite="favorite" :is-processing ="isProcessing" v-if="!isProcessing" @addFavorite="addLike" @deleteFavorite="deleteLike"/>
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
import userAPI from './../apis/users.js'
export default {
  components: {
    referenceCard,
    pagination,
    keywordTitle
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
      favorite: false,
      isProcessing: true
    }
  },
  created () {
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
        this.favorite = resFavorite.data.data.isFavorite
        this.isProcessing = false
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    async addLike (id) {
      try {
        this.isProcessing = true
        const res = await userAPI.addFavorite({ id })
        const { data } = res
        console.log(data)
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
        this.$emit('deleteFavorite', id)

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
</style>
