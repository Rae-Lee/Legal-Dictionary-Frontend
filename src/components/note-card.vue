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
                <button type="button" class="save-button btn btn-outline-secondary" aria-label="add" @click="addNote">新增</button>
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
              <button type="button" class="btn-close" aria-label="Close" @click="deleteNote(note)"></button>
          </div>
        </div>
        <div class="edit">
             <button type="button" class="edit-button btn btn-outline-secondary mx-2" aria-label="save" @click="saveNote(note)">儲存</button>
            <button type="button" class="edit-button btn btn-outline-secondary" aria-label="edit" @click="editNote(note)">編輯</button>
        </div>
      </div>
      <!-- note end -->
   </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
    keywordId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      note: this.notes,
      newData: '',
      currentNote: {}
    }
  },
  methods: {
    deleteNote (note) {
      this.$emit('delete-notes', note.id)
    },
    addNote () {
      this.$emit('add-notes', {
        id: uuidv4(),
        content: this.newData,
        elementId: this.keywordId
      })
      this.newNote = ''
    },
    editNote (note) {
      this.currentNote = { ...note }
    },
    saveNote (note) {
      this.$emit('save-notes', this.currentNote)
      this.currentNote = {}
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
