<template>
  <div>
   <!-- Main Content-->
    <div class="container px-8 px-lg-5">
      <div class="row gx-8 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ">
            <h1 class="text-center" v-if="errMessage">{{ errMessage }}</h1>
            <div v-if="!errMessage">
            <favoriteCard v-for="keyword in keywords" :key="keyword.Element.id" :initial-keyword="keyword.Element" @deleteFavorite="deleteLikes"/>
            </div>
          </div>
      </div>
     </div>
   <pagination :currentPage="currentPage" :totalPage="totalPage" />
  </div>
</template>
<script>
import favoriteCard from '../components/favorite-card.vue'
import pagination from '../components/pagination.vue'
import userAPI from './../apis/users.js'
import { errHandler } from '../utils/helpers'
export default {
  components: {
    favoriteCard,
    pagination
  },
  data () {
    return {
      keywords: [],
      currentPage: 1,
      totalPage: -1,
      errHandler: ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = this.$route.params
    const { page = '' } = to.query
    this.fetchData({ page, id })
    next()
  },
  created () {
    const { id } = this.$route.params
    const { page = '' } = this.$route.query
    this.fetchData({ page, id })
  },
  methods: {
    async fetchData ({ page, id }) {
      try {
        const res = await userAPI.getFavorites({ page, id })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router, this.errMessage)
          return
        }
        this.keywords = data.data.likes
        this.currentPage = Number(data.pagination.currentPage)
        this.totalPage = Number(data.pagination.totalPage)
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    deleteLikes (id) {
      this.keywords = this.keywords.filter(keyword => keyword.id !== id)
    }
  }
}
</script>
