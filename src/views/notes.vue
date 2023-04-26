<template>
<div>
  <div class="container" v-if="errMessage"><h1 class="text-center err" v-if="errMessage">{{ errMessage }}</h1></div>
<div v-if="!errMessage && !isProcessing">
  <div v-for="note in notes" :key="note.id">
    <div class="px-10 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-10 col-xl-10 " >
              <div class="post-preview d-flex justify-content-between">
          <div class="post-preview d-flex ">
          <span class="post-title"><router-link :to="{name:'keywords articles',params:{id:note.element_id}}" class="post">{{ note.elementName }}</router-link></span>
          <a  @click="addLike(note.element_id)" :disabled="isProcessing">
           <i class="fa-regular fa-heart heart" v-show="!note.isFavorite"  ></i>
         </a>
         <a   @click="deleteLike(note.element_id)" :disabled="isProcessing" >
          <i class="fa-solid fa-heart heart" v-show="note.isFavorite"></i>
         </a>
          </div>
            <div class="close">
             <button type="button" class="btn-close" aria-label="Close" @click="deleteNote(note)" :disabled="isDeleting"></button>
             </div>
          </div>
          </div>
           </div>
        </div>
   <!-- note start -->
      <div class="card frame my-3" >
          <div class=" d-flex card-body justify-content-between">
            <div class="content d-flex ">
              <div class="author-img">
                <i class="fa-regular fa-circle-user photo"></i>
              </div>
              <div class="author-content pl-4 ps-4">
                <h5 class="mb-3 field card-subtitle">{{ note.createdAt | fromNow }}</h5>
                <h4 class="mb-3 card-text" v-show="currentNote.id !== note.id">{{ note.content }} </h4>
                <textarea rows="5" class="mb-3 card-text new-note" type="text" required autofocus v-model="currentNote.content" v-show="currentNote.id === note.id" placeholder="寫下筆記"></textarea>
              </div>
            </div>
          </div>
          <div class="edit">
               <button type="button" class="edit-button btn btn-outline-secondary mx-2" aria-label="save" @click="saveNote(note)" :disabled="isEditing" v-show="currentNote.id === note.id">儲存</button>
              <button type="button" class="edit-button btn btn-outline-secondary" aria-label="edit" @click="editNote(note)" v-show="currentNote.id !== note.id">編輯</button>
          </div>
            </div>
        <!-- paragraph end -->
         <!-- Divider-->
            <hr class="my-4 horizon" />
        </div>
  <pagination :currentPage="currentPage" :totalPage="totalPage"/>
</div>
  </div>
</template>
<script>
import pagination from '../components/pagination.vue'
import moment from 'moment'
import userAPI from './../apis/users.js'
import noteAPI from './../apis/notes.js'
import { errHandler } from '../utils/helpers'
export default {
  components: {
    pagination
  },
  data () {
    return {
      notes: [],
      currentNote: {},
      currentPage: 1,
      totalPage: -1,
      errMessage: '',
      isProcessing: false,
      isEditing: false,
      isDeleting: false
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
        const res = await userAPI.getNotes({ page, id })
        const { data } = res
        if (data.status !== 200) {
          if (data.status === 404) {
            this.errMessage = data.message
            return
          }
          errHandler(data, this.$router)
          return
        }
        this.notes = data.data.notes
        this.currentPage = Number(data.pagination.currentPage)
        this.totalPage = Number(data.pagination.totalPage)
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
        this.notes = this.notes.map(n => {
          if (n.element_id === id) {
            return {
              ...n,
              isFavorite: true
            }
          } else {
            return n
          }
        })
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
        this.notes = this.notes.map(n => {
          if (n.element_id === id) {
            return {
              ...n,
              isFavorite: false
            }
          } else {
            return n
          }
        })
        this.isProcessing = false
        return
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    async deleteNote (note) {
      try {
        const id = note.id
        this.isDeleting = true
        const res = await noteAPI.deleteNotes({ id })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          this.isDeleting = false
          return
        }
        this.notes = this.notes.filter(n => n.id !== id)
        this.isDeleting = false
      } catch (err) {
        this.isDeleting = false
        errHandler({ status: 500 })
      }
    },
    async saveNote (note) {
      try {
        const { id, content } = this.currentNote
        // 前端驗證
        if (!content) {
          errHandler({ status: 400, message: ['筆記內容不得空白!'] })
          return
        }
        // 呼叫後端
        this.isEditing = true
        const res = await noteAPI.editNotes({ id, content })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          this.isEditing = false
          return
        }
        this.notes = this.notes.map(n => {
          if (n.id === id) {
            return {
              ...n,
              content
            }
          } else {
            return n
          }
        })
        this.isEditing = false
        this.currentNote = {}
      } catch (err) {
        this.isEditing = false
        errHandler({ status: 500 })
      }
    },
    editNote (note) {
      this.currentNote = { ...note }
    }
  },
  filters: {
    fromNow (datetime) {
      if (!datetime) {
        return '-'
      }
      return moment(datetime).fromNow()
    }
  }
}
</script>
<style>
.post {
  text-decoration: none;
  padding: 10px;
  color: #535353;
}

.post-preview {
  text-decoration: none;
}

.post-title {
  text-decoration: none;
  color: #535353;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left:150px;
  font-size: 36px;
  font-weight: bold;
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
  margin-left: 50px;
  margin-top:40px;
  width: 20px;
  height: 20px
}
.new-note{
  padding-top:4px;
  font-size: 20px;
  width:700px;
  border:none;
}
.notes{
  margin: 0 auto;
}
.frame {
  width: 950px;
  margin: 0 auto;
  border-color: #789;
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px;
  padding:8px 8px;
  }
  .rank-title {
  color: #A48500;
  font-size: 20px;
  font-weight: bold;
}
.rank {
  color: #A48500;
}

.text-capitalize {
  text-decoration: none;
  color: #535353;
}

.paragraph {
  font-size: large;
  white-space: pre-line;
}

.field {
  color: #A48500;
  font-size: 15px;
  font-weight: bold;
}

.h {
  width: 1020px;
}
abbr{
 color:#A48500;
}
.photo{
  font-size:30px;
  color:#789;
  font-weight:100;
}
.close{
  margin-right:100px;
}
.save-button{
  background-color: white;
  border-color:#789;
}
.edit{
  display:flex;
  justify-content:end;
  margin-bottom:8px;
  padding-right:8px;
}
.horizon{
  width:950px;
  margin:0 auto;
}
.err{
  color:#535353;
}
</style>
