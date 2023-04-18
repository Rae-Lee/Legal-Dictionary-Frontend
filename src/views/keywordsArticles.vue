<template>
<div>
  <!-- Post preview-->
  <div class="post-preview dashboard">
    <h2 class="post-title"><router-link to="/" class="post"><i class="fa-solid fa-angle-left angle"></i></router-link>{{ keyword.name }}<i
        class="fa-regular fa-heart heart"></i></h2>
        <hr class="horizon">
        <div id="filters" class="filters">
                <router-link to="{name:'keywords/articles', params:{id:keyword.id}}" class="px-3 switch">相關法條</router-link>
                <router-link to="{name:'keywords/references', params:{id:keyword.id}}" class="px-3 switch">相關裁判</router-link>
               <router-link to="{name:'keywords/notes',params:{id:keyword.id}}" class="px-3 switch">我的筆記</router-link>
        </div>
    <lawCard :articles="articles"/>
  </div>
   <pagination :totalPage="totalPage" :currentPage="currentPage"/>
   </div>
</template>
<script>
import lawCard from '../components/law-card.vue'
import pagination from '../components/pagination.vue'
const dummyData = {
  keyword: {
    id: 306,
    name: '毒品',
    updatedAt: '2022-12-15T08:16:09.573Z',
    createdAt: '2022-12-15T08:16:09.573Z',
    isFavorite: true
  },
  articles: [
    {
      'id': 6770,
      'content': '犯第四條至第八條、第十條或第十一條之罪，供出毒品來源，因而查獲其他正犯或共犯者，減輕或免除其刑。\r\n犯第四條至第八條之罪於偵查及歷次審判中均自白者，減輕其刑。\r\n被告因供自己施用而犯第四條之運輸毒品罪，且情節輕微者，得減輕其刑。',
      'article_no': '17',
      'code_id': 109,
      'created_at': '2023-04-10T05:33:43.000Z',
      'updated_at': '2023-04-10T05:33:43.000Z',
      'Code': {
        'name': '毒品危害防制條例',
        'isAbandon': 0
      },
      'count': 87
    },
    {
      'id': 6756,
      'content': '製造、運輸、販賣第一級毒品者，處死刑或無期徒刑；處無期徒刑者，得併科新臺幣三千萬元以下罰金。\r\n製造、運輸、販賣第二級毒品者，處無期徒刑或十年以上有期徒刑，得併科新臺幣一千五百萬元以下罰金。\r\n製造、運輸、販賣第三級毒品者，處七年以上有期徒刑，得併科新臺幣一千萬元以下罰金。\r\n製造、運輸、販賣第四級毒品者，處五年以上十二年以下有期徒刑，得併科新臺幣五百萬元以下罰金。\r\n製造、運輸、販賣專供製造或施用毒品之器具者，處一年以上七年以下有期徒刑，得併科新臺幣一百五十萬元以下罰金。\r\n前五項之未遂犯罰之。',
      'article_no': '4',
      'code_id': 109,
      'created_at': '2023-04-10T05:33:43.000Z',
      'updated_at': '2023-04-10T05:33:43.000Z',
      'Code': {
        'name': '毒品危害防制條例',
        'isAbandon': 0
      },
      'count': 36
    },
    {
      'id': 6760,
      'content': '轉讓第一級毒品者，處一年以上七年以下有期徒刑，得併科新臺幣一百萬元以下罰金。\r\n轉讓第二級毒品者，處六月以上五年以下有期徒刑，得併科新臺幣七十萬元以下罰金。\r\n轉讓第三級毒品者，處三年以下有期徒刑，得併科新臺幣三十萬元以下罰金。\r\n轉讓第四級毒品者，處一年以下有期徒刑，得併科新臺幣十萬元以下罰金。\r\n前四項之未遂犯罰之。\r\n轉讓毒品達一定數量者，加重其刑至二分之一，其標準由行政院定之。',
      'article_no': '8',
      'code_id': 109,
      'created_at': '2023-04-10T05:33:43.000Z',
      'updated_at': '2023-04-10T05:33:43.000Z',
      'Code': {
        'name': '毒品危害防制條例',
        'isAbandon': 0
      },
      'count': 30
    }
  ],
  currentPage: 1,
  totalPage: 4
}
export default {
  components: {
    lawCard,
    pagination
  },
  data () {
    return {
      articles: [],
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
      this.articles = dummyData.articles
      this.currentPage = dummyData.currentPage
      this.totalPage = dummyData.totalPage
    }
  }
}
</script>
<style >
/* keyword */
 .dashboard{
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
.heart{
  color:#535353;
  margin-left:40px;
  width:20px;
  height:20px;
  margin-bottom:3px;
}
/* category */
.horizon{
  width:1350px;
  margin-top:50px;
  margin-bottom:50px;
}
.filters{
text-align:center;
 width:1310px;
 height:80px;
 border-top-color:#535353;
 border-bottom-color:#535353;
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
.switch{
  color:#535351;
  text-decoration: none;
  font-size:20px;
  font-weight:bold;
  padding-right:50px;
}
</style>
