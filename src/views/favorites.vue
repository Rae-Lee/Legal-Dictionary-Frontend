<template>
  <div>
   <!-- Main Content-->
    <div class="container px-8 px-lg-5">
      <div class="row gx-8 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ">
            <favoriteCard v-for="keyword in keywords" :key="keyword.id" :initial-keyword="keyword"/>
          </div>
      </div>
     </div>
   <pagination :currentPage="currentPage" :totalPage="totalPage" />
  </div>
</template>
<script>
import favoriteCard from '../components/favorite-card.vue'
import pagination from '../components/pagination.vue'
const dummyData = {
  keywords:
    [
      {
        id: 306,
        name: '毒品',
        updatedAt: '2022-12-15T08:16:09.573Z',
        createdAt: '2022-12-15T08:16:09.573Z',
        isFavorite: true
      },
      {
        id: 306,
        name: '刑度',
        updatedAt: '2022-12-15T08:16:09.573Z',
        createdAt: '2022-12-15T08:16:09.573Z',
        isFavorite: true
      }
    ],
  currentPage: 1,
  totalPage: 4
}

export default {
  components: {
    favoriteCard,
    pagination
  },
  data () {
    return {
      keywords: [],
      currentPage: 1,
      totalPage: -1
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const {
        keywords,
        currentPage,
        totalPage
      } = dummyData
      this.keywords = keywords
      this.currentPage = currentPage
      this.totalPage = totalPage
    }
  }
}
</script>
