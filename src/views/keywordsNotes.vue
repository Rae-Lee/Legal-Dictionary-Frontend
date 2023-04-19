<template>
  <div>
    <!-- Post preview-->
    <div class="post-preview dashboard">
      <h2 class="post-title"><router-link to="/" class="post"><i class="fa-solid fa-angle-left angle"></i></router-link>{{
        keyword.name }}<i class="fa-regular fa-heart heart" v-show="!keyword.isFavorite"></i><i class="fa-solid fa-heart" v-show="keyword.isFavorite"></i></h2>
      <hr class="horizon">
      <div id="filters" class="filters">
        <router-link to="{name:'keywords/articles', params:{id:keyword.id}}s" class="px-3 switch">相關法條</router-link>
        <router-link to="{name:'keywords/references', params:{id:keyword.id}}" class="px-3 switch">相關裁判</router-link>
        <router-link to="{name:'keywords/notes', params:{id:keyword.id}}" class="px-3 switch">我的筆記</router-link>
      </div>
      <noteCard :notes="notes" :keyword-id="keyword.id" @delete-notes="deleteNotes" @add-notes="addNotes" @save-notes="saveNotes"/>
    </div>
    <pagination :totalPage="totalPage" :currentPage="currentPage" />
  </div>
</template>
<script>
import noteCard from '../components/note-card.vue'
import pagination from '../components/pagination.vue'
const dummyData = {
  keyword: {
    id: 306,
    name: '毒品',
    updatedAt: '2022-12-15T08:16:09.573Z',
    createdAt: '2022-12-15T08:16:09.573Z',
    isFavorite: true
  },
  notes: [
    {
      'id': 39,
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu interdum urna. Fusce a efficitur est. Duis egestas orci ut quam ornare, eget blandit mi vulputate. Duis congue velit at odio ornare, nec mattis eros tincidunt. In commodo aliquet viverra. Suspendisse tempor gravida fermentum. Praesent sagittis ligula eget aliquet vehicula. Integer ultricies dui turpis, eget sodales massa ullamcorper viverra. Praesent maximus justo placerat aliquam vulputate. Nulla et arcu faucibus, pharetra ante vitae, tincidunt justo. Aenean tellus augue, venenatis a diam eu, posuere consectetur ante.',
      'userId': 2,
      'elementId': 13,
      'user': {
        name: 'User1'
      },
      'relativeTime': '5 天前'
    },
    {
      'id': 40,
      'content': 'Non ipsam inventore laborum voluptas id recusandae.',
      'userId': 2,
      'elementId': 13,
      'user': {
        name: 'User1'
      },
      'relativeTime': '4 天前'
    }
  ],
  currentPage: 1,
  totalPage: 4
}
const dummyUser = {
  id: 2,
  account: 'user1',
  name: 'User1',
  email: 'user1@example.com',
  role: 'user'
}
export default {
  components: {
    noteCard,
    pagination
  },
  data () {
    return {
      notes: [],
      keyword: {
        id: -1,
        name: '',
        isFavorite: true
      },
      user: {},
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
      this.notes = dummyData.notes
      this.currentPage = dummyData.currentPage
      this.totalPage = dummyData.totalPage
      this.user = dummyUser
    },
    deleteNotes (noteId) {
      this.notes = this.notes.filter(n => n.id !== noteId)
    },
    addNotes (payload) {
      const { id, elementId, content } = payload
      this.notes.push({
        id,
        elementId,
        userId: this.user.id,
        content,
        createdAt: new Date()
      })
    },
    saveNotes (currentNote) {
      for (let n of this.notes) {
        if (n.id === currentNote.id) {
          n.content = currentNote.content
        }
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
