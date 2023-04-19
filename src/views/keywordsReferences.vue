<template>
  <div>
  <!-- Post preview-->
  <div class="post-preview dashboard">
    <h2 class="post-title"><router-link to="/" class="post"><i class="fa-solid fa-angle-left angle"></i></router-link>{{
      keyword.name }}<i class="fa-regular fa-heart heart" v-show="!keyword.isFavorite"></i><i class="fa-solid fa-heart" v-show="keyword.isFavorite"></i></h2>
    <hr class="horizon">
    <div id="filters" class="filters">
      <router-link to="{name:'keywords/articles', params:{id:keyword.id}}" class="px-3 switch">相關法條</router-link>
      <router-link to="{name:'keywords/references', params:{id:keyword.id}}" class="px-3 switch">相關裁判</router-link>
      <router-link to="{name:'keywords/notes', params:{id:keyword.id}}" class="px-3 switch">我的筆記</router-link>
    </div>
    <referenceCard :references="references"/>
  </div>
  <pagination :totalPage="totalPage" :currentPage="currentPage"/>
 </div>
</template>
<script>
import referenceCard from '../components/reference-card.vue'
import pagination from '../components/pagination.vue'
const dummyData = {
  keyword: {
    id: 306,
    name: '毒品',
    updatedAt: '2022-12-15T08:16:09.573Z',
    createdAt: '2022-12-15T08:16:09.573Z',
    isFavorite: true
  },
  'references': [
    {
      'id': 41,
      'name': '最高法院 93 年度 台上 字第 1651 號刑事判決',
      'quote': '其主觀上須有營利之意圖，且客觀上有販賣之行為，即足構成，至於實際上是否已經獲利，則非所問。',
      'field_id': 2,
      'created_at': '2023-04-11T03:51:47.000Z',
      'updated_at': '2023-04-11T03:51:47.000Z',
      'Field': {
        'name': '刑事判決'
      },
      'count': 54
    },
    {
      'id': 8,
      'name': '最高法院 100 年度 台上 字第 4498 號刑事判決',
      'quote': '以設計引誘之方式，使其暴露犯罪事證，而加以逮捕或偵辦而言，此<abbr rel="M" id="%e4%b9%83" class="termhover">乃</abbr>純屬偵查犯罪技巧之範疇，並未違反憲法對於基本<abbr rel="M" id="%e4%ba%ba%e6%ac%8a" class="termhover">人權</abbr>之保障，且於公共利益之維護有其必要性。警方為求破案，授意執勤員警佯裝購毒而與毒販聯繫，經毒販允諾，依約<abbr rel="M" id="%e6%94%9c%e5%b8%b6" class="termhover">攜帶</abbr>毒品交付予佯裝購毒之人，<abbr rel="M" id="%e6%97%8b" class="termhover">旋</abbr>為埋伏員警當場查獲者，於此<abbr rel="M" id="%e8%aa%98%e6%8d%95%e5%81%b5%e6%9f%a5" class="termhover">誘捕偵查</abbr>案件，販毒者雖有販毒之故意，且依約攜帶毒品前往交付，並已<abbr rel="M" id="%e8%91%97%e6%89%8b" class="termhover">著手</abbr>實施販毒之行為，然因係受警員引誘偽稱欲購買毒品，警員原無買受毒品之意思，其虛與買賣毒品，意在辦案，以求人贓俱獲，伺機逮捕，實際上不能真正完成買賣毒品之行為，而應僅論以販賣毒品未遂罪。',
      'field_id': 2,
      'created_at': '2023-04-11T03:51:47.000Z',
      'updated_at': '2023-04-11T03:51:47.000Z',
      'Field': {
        'name': '刑事判決'
      },
      'count': 36
    }
  ],
  currentPage: 1,
  totalPage: 4
}
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
        isFavorite: true
      },
      currentPage: -1,
      totalPage: -1
    }
  },
  created () {
    const { id: keywordId } = this.$route.params
    this.fetchData(keywordId)
  },
  methods: {
    fetchData (keywordId) {
      console.log(keywordId)
      this.keyword = { ...this.keyword, ...dummyData.keyword }
      this.references = dummyData.references
      this.currentPage = dummyData.currentPage
      this.totalPage = dummyData.totalPage
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
