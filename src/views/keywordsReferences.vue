<template>
  <div>
  <!-- Post preview-->
  <div class="post-preview dashboard">
    <keyword :initial-keyword="keyword"/>
    <hr class="horizon">
    <div id="filters" class="filters">
      <router-link :to="{name:'keywords articles', params:{id:keyword.id}}" class="px-3 switch">相關法條</router-link>
      <router-link :to="{name:'keywords references', params:{id:keyword.id}}" class="px-3 switch">相關裁判</router-link>
      <router-link :to="{name:'keywords notes', params:{id:keyword.id}}" class="px-3 switch">我的筆記</router-link>
    </div>
    <div v-if="errMessage">{{ errMessage }}</div>
    <referenceCard :references="references" v-if="!errMessage"/>
  </div>
  <pagination :totalPage="totalPage" :currentPage="currentPage"/>
 </div>
</template>
<script>
import keyword from '../components/keyword.vue'
import referenceCard from '../components/reference-card.vue'
import pagination from '../components/pagination.vue'
import keywordAPI from './../apis/keywords'
import { errHandler } from '../utils/helpers'
export default {
  components: {
    referenceCard,
    pagination
  },
  data () {
    return {
      references: [],
      keyword: {
        id: -1,
        name: '',
        isFavorite: false
      },
      currentPage: 1,
      totalPage: 1,
      errMessage: ''
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
        const { data } = resReferences
        if (data.status !== 200) {
          errHandler(data, this.$router, this.errMessage)
          return
        }
        this.keyword = { ...this.keyword, ...resKeywords.data.data }
        this.references = data.data.references
        this.currentPage = Number(data.pagination.currentPage)
        this.totalPage = Number(data.pagination.totalPage)
      } catch (err) {
        errHandler({ status: 500 })
      }
    }
  }
}
</script>
<style >
/* keyword */
.dashboard {
  margin-left: 100px;
  margin-right: 100px;
  text-decoration: none;
  padding: 0px;
  color: #535353;
}

.post {
  color: #535353;
  padding-right: 50px;
  font-size: 20px;
}

.post-preview {
  text-decoration: none;
}

.post-title {
  font-size: 45px;
  text-decoration: none;
  color: #535353;
  margin-top: 20px;
  margin-bottom: 2px;
}

.post-subtitle {
  margin-top: 30px;
  margin-left: 5px;
  margin-bottom: 30px;
  text-decoration: none;
  color: #789;
}

.heart {
  color: #535353;
  margin-left: 40px;
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
}

/* category */
.horizon {
  width: 1350px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.filters {
  text-align: center;
  width: 1310px;
  height: 80px;
  border-top-color: #535353;
  border-bottom-color: #535353;
  text-decoration: none;
}

.filters a:hover,
.filters a:focus,
.filters a:active {
  text-decoration: none;
}

.filters a:hover:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #000;
}

.filters a.active {
  color: #000;
}

.filters a.active:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #000;
}

.switch {
  color: #535351;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding-right: 50px;
}</style>
