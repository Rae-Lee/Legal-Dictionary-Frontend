<template>
  <div>
    <!-- Post preview-->
    <div class="post-preview dashboard"  >
      <h2 class="post-title"><router-link to="/keywords/references" class="post"><i class="fa-solid fa-angle-left angle"></i></router-link>{{
        reference.name }}</h2>
      <hr class="horizon">
      <div class="content">
        <p v-html="reference.content" class="paragraph"></p>
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
      reference: {}
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
          errHandler(data, this.$router, this.errMessage)
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
.paragraph{
  white-space: pre-line;
  margin:0 auto;
  font-size:30px;
  padding-left:200px;
}
.content{
  margin-bottom: 5px;
}
.foot{
  height:100px;
}
abbr{
 color:#A48500;
}
</style>
