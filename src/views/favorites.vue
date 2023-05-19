<template>
  <div>
   <!-- Main Content-->
    <div class="container px-8 px-lg-5">
      <div class="row gx-8 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ">
             <div v-if="errMessage"><h1 class="text-center err" v-if="errMessage">{{ errMessage }}</h1></div>
            <div v-if="!errMessage && !isProcessing">
            <favoriteCard :keywords="keywords" @deleteFavorite="deleteLikes" />
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
      errMessage: '',
      isProcessing: true
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
          if (data.status === 404) {
            this.errMessage = data.message
            return
          }
          errHandler(data, this.$router, this.$route)
          return
        }
        this.keywords = data.data.likes
        this.currentPage = Number(data.pagination.currentPage)
        this.totalPage = Number(data.pagination.totalPage)
        this.isProcessing = false
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    async deleteLikes (id) {
      try {
        this.isProcessing = true
        const res = await userAPI.deleteFavorite({ id })
        const { data } = res
        if (data.status !== 200) {
          this.isProcessing = false
          errHandler(data, this.$router)
          return
        }
        this.keywords = this.keywords.filter(keyword => keyword.Element.id !== id)
        this.isProcessing = false
        return
      } catch (err) {
        this.isProcessing = false
        errHandler({ status: 500 })
      }
    }
  }
}
</script>
<style>
.err{
  color: #535353;
}
</style>
