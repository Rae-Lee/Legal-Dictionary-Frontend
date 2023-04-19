<template>
<div>
  <div v-for="note in notes" :key="note.id">
    <div class="px-10 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-10 col-xl-10 ">
              <div class="post-preview d-flex">
          <h2 class="post-title"><router-link to="{name:'keywords',params:{id:note.Element.id}}" class="post">{{ note.Element.name }}</router-link></h2>
          <i class="fa-regular fa-heart heart" v-show="!keyword.isFavorite"></i><i class="fa-solid fa-heart" v-show="keyword.isFavorite"></i>
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
            <div class=" close">
                <button type="button" class="btn-close" aria-label="Close" @click="deleteNote(note)"></button>
            </div>
          </div>
          <div class="edit">
               <button type="button" class="edit-button btn btn-outline-secondary mx-2" aria-label="save" @click="saveNote(note)">儲存</button>
              <button type="button" class="edit-button btn btn-outline-secondary" aria-label="edit" @click="editNote(note)">編輯</button>
          </div>
            </div>
        <!-- paragraph end -->
         <!-- Divider-->
            <hr class="my-4 horizon" />
        </div>
  <pagination :currentPage="currentPage" :totalPage="totalPage"/>
</div>
</template>
<script>
import pagination from '../components/pagination.vue'
import moment from 'moment'
const dummyData = {
  notes:
    [
      {
        'id': 2,
        'userId': 1,
        'elementId': 2,
        'content': '123',
        'createdAt': '2023-03-28T00:00:00.000Z',
        'updatedAt': '2023-03-28T00:00:00.000Z',
        'Element':
        {
          'id': 2,
          'name': '刑度',
          'createdAt': '2023-03-10T04: 20: 30.000Z',
          'updatedAt': '2023-03 -10T04: 20: 30.000Z'
        },
        'relativeTime': '20 days ago'
      },
      {
        'id': 1,
        'userId': 1,
        'elementId': 1,
        'content': '12345',
        'createdAt': '2023-03-27T00:00:00.000Z',
        'updatedAt': '2023-03-27T00:00:00.000Z',
        'Element':
        {
          'id': 1,
          'name': '毒品',
          'createdAt': '2023-03-10T04: 20: 30.000Z',
          'updatedAt': '2023-03 -10T04: 20: 30.000Z'
        },
        'relativeTime': '21 days ago'
      }
    ],
  currentPage: 1,
  totalPage: 4
}
export default {
  components: {
    pagination
  },
  data () {
    return {
      notes: [],
      currentNote: {},
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
        notes,
        currentPage,
        totalPage
      } = dummyData
      this.notes = notes
      this.currentPage = currentPage
      this.totalPage = totalPage
    },
    deleteNotes (note) {
      this.notes = this.notes.filter(n => n.id !== note.id)
    },
    saveNotes () {
      for (let n of this.notes) {
        if (n.id === this.currentNote.id) {
          n.content = this.currentNote.content
        }
      }
      this.currentNote = {}
    },
    editNotes (note) {
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
.horizon{
  width:950px;
  margin:0 auto;
}
</style>
