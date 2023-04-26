<template>
  <div>
    <!-- Post preview-->
    <div class="post-preview dashboard"  >
      <h2 class="post-title"><a @click="$router.back()" class="post"><i class="fa-solid fa-angle-left angle"></i></a>{{
        reference.name }}</h2>
      <hr class="horizon">
      <div v-if="errMessage"><h1 class="text-center err" v-if="errMessage">{{ errMessage }}</h1></div>
      <div class="content" v-if="!errMessage">
        <p v-html="reference.content" class="paragraph-content"></p>
        <div class="foot"></div>
      </div>
  </div>
  </div>
</template>
<script>
import referenceAPI from './../apis/references.js'
import { errHandler } from '../utils/helpers'
export default {
  data () {
    return {
      reference: {},
      errMessage: ''
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchData({ id })
  },
  methods: {
    async fetchData ({ id }) {
      try {
        const res = await referenceAPI.getReferences({ id })
        const { data } = res
        if (data.status !== 200) {
          if (data.status === 404) {
            this.errMessage = data.message
            return
          }
          errHandler(data, this.$router)
          return
        }
        this.reference = data.data
      } catch (err) {
        errHandler({ status: 500 })
      }
    }
  }
}
</script>
<style>
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
  font-size: 30px;
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

.horizon{
  width:1350px;
  margin-top:50px;
  margin-bottom:50px;
}
.paragraph-content{
  white-space: pre-wrap;
  font-size:30px;
  margin:0 auto;
  padding-left: 110px;
}
.content{
  margin-bottom: 1px;
}
.foot{
  height:100px;
}
abbr{
 color:#A48500;
}
</style>
