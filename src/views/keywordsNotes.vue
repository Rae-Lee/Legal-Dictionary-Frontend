<template>
  <div>
    <div>
    <!-- Post preview-->
       <keywordTitle :keyword="keyword" :is-favorite="favorite" :is-processing ="isProcessing" v-if="!isProcessing" @addFavorite="addLike" @deleteFavorite="deleteLike"/>
      <div v-if="errMessage"><h1 class="text-center err" v-if="errMessage">{{ errMessage }}</h1></div>
      <noteCard :initial-notes="notes" :keyword="keyword.id" v-if="!errMessage && !isLoading"/>
    </div>
    <pagination :totalPage="totalPage" :currentPage="currentPage" />
  </div>
</template>
<script>
import keywordTitle from '../components/keywordTitle.vue'
import noteCard from '../components/note-card.vue'
import pagination from '../components/pagination.vue'
import keywordAPI from './../apis/keywords'
import { errHandler } from '../utils/helpers'
import userAPI from './../apis/users.js'
export default {
  components: {
    noteCard,
    pagination,
    keywordTitle
  },
  data () {
    return {
      notes: [],
      user: {},
      currentPage: 1,
      totalPage: 1,
      keyword: {
        id: -1,
        name: ''
      },
      favorite: false,
      errMessage: '',
      isProcessing: true,
      isLoading: true
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    const { page = '' } = to.query
    this.fetchData({ page, id })
    next()
  },
  created () {
    const { page = '' } = this.$route.query
    const { id } = this.$route.params
    this.fetchData({ page, id })
  },
  methods: {
    async fetchData ({ page, id }) {
      try {
        const resNotes = await keywordAPI.getKeywordNotes({ page, id })
        const resKeywords = await keywordAPI.getKeyword({ id })
        const resFavorite = await keywordAPI.getFavorite({ id })
        if (resNotes.data.status !== 200) {
          errHandler(resNotes.data, this.$router, this.$route)
        } else {
          this.notes = resNotes.data.data.notes
          this.currentPage = Number(resNotes.data.pagination.currentPage)
          this.totalPage = Number(resNotes.data.pagination.totalPage)
        }
        if (resKeywords.data.status !== 200) {
          if (resKeywords.data.status === 404) {
            this.errMessage = resKeywords.data.message
          }
          errHandler(resKeywords.data, this.$router, this.$route)
        } else {
          this.keyword = { ...this.keyword, ...resKeywords.data.data }
        }
        if (resFavorite.data.status !== 200) {
          errHandler(resFavorite.data, this.$router, this.$route)
        } else {
          this.favorite = resFavorite.data.data.isFavorite
        }
        this.isProcessing = false
        this.isLoading = false
      } catch (err) {
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
.white {
  background-color: white;
  color:#789;
}
</style>
