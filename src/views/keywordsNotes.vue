<template>
  <div>
    <div>
    <!-- Post preview-->
       <keywordTitle :keyword="keyword" :initial-favorite="isFavorite" v-if="keyword.name"/>
      <p v-if="errMessage" class="white">{{ errMessage }}</p>
      <noteCard :notes="notes" @delete-notes="deleteNotes" @add-notes="addNotes" @save-notes="saveNotes" v-if="!errMessage"/>
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
export default {
  components: {
    keywordTitle,
    noteCard,
    pagination
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
      isFavorite: false,
      errMessage: ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = this.$route.params
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
          errHandler(resNotes.data, this.$router, this.errMessage)
          return
        }
        if (resKeywords.data.status !== 200) {
          errHandler(resKeywords.data, this.$router, this.errMessage)
          return
        }
        if (resFavorite.data.status !== 200) {
          errHandler(resFavorite.data, this.$router, this.errMessage)
          return
        }
        this.notes = resNotes.data.data.notes
        this.currentPage = Number(resNotes.data.pagination.currentPage)
        this.totalPage = Number(resNotes.data.pagination.totalPage)
        this.keyword = { ...this.keyword, ...resKeywords.data.data }
        this.isFavorite = resFavorite.data.data.isFavorite
      } catch (err) {
        errHandler({ status: 500 })
      }
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
.white {
  background-color: white;
  color:#789;
}
</style>
