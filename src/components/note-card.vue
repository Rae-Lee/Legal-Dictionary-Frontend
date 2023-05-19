<template>
<div class="notes">
  <!-- new note -->
  <div class="card frame my-3">
        <div class=" d-flex card-body justify-content-between">
            <div class="content d-flex">
              <div class="author-img">
                <i class="fa-regular fa-circle-user photo"></i>
              </div>
              <div class="author-content pl-4 ps-4">
                <textarea rows="5" class="mb-3 card-text new-note" type="text" placeholder="寫下筆記" required autofocus v-model="newNote"></textarea>
              </div>
            </div>
            <div class=" close">
                <button type="button" class="save-button btn btn-outline-secondary" aria-label="add" @click="addNote(keyword)" :disabled="isLoading">{{ isLoading ? "處理中..." : "新增" }}</button>
            </div>
          </div>
        </div>
     <!-- note start -->
    <div class="card frame my-3" v-for="note in notes" :key="note.id">
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
          <div class=" close">
              <button type="button" class="btn-close" aria-label="Close" @click="deleteNote(note)" :disabled="isDeleting"></button>
          </div>
        </div>
        <div class="edit">
             <button type="button" class="edit-button btn btn-outline-secondary mx-2" aria-label="save" @click="saveNote(note)" :disabled="isEditing" v-show="currentNote.id === note.id">儲存</button>
            <button type="button" class="edit-button btn btn-outline-secondary" aria-label="edit" @click="editNote(note)" v-show="currentNote.id !== note.id">編輯</button>
        </div>
      </div>
      <!-- note end -->
   </div>
</template>
<script>
import moment from 'moment'
import keywordAPI from './../apis/keywords.js'
import noteAPI from './../apis/notes.js'
import { errHandler } from './../utils/helpers'
export default {
  props: {
    initialNotes: {
      type: Array,
      required: true
    },
    keyword: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      notes: this.initialNotes,
      newNote: '',
      currentNote: {},
      isLoading: false,
      isEditing: false,
      isDeleting: false
    }
  },
  methods: {
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
    async addNote (keywordId) {
      try {
        const content = this.newNote
        // 前端驗證
        if (!content) {
          errHandler({ status: 400, message: ['筆記內容不得空白!'] })
        }
        // 呼叫後端
        this.isLoading = true
        const res = await keywordAPI.addKeywordNotes({ id: keywordId, content })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          this.isLoading = false
          return
        }
        const notes = [ data.data, ...this.notes ]
        this.notes = notes
        console.log(this.notes)
        this.isLoading = false
        this.newNote = ''
      } catch (err) {
        this.isLoading = false
        errHandler({ status: 500 })
      }
    },
    editNote (note) {
      this.currentNote = { ...note }
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
  margin-right:2px;
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
</style>
