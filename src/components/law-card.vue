<template>
<div class="post-author ">
  <div class="rank-title">引用排名 </div>
  <!-- paragraph start -->
  <div v-for=" (article, index) in articles" :key="article.id">
    <div class="post-author d-flex my-5">
        <div class="author-img">
           <h1 class="ps-3 pe-5" :class="{ rank: timeCites(index) === 1 || timeCites(index) === 2 || timeCites(index) === 3 }">{{ timeCites(index) }}</h1>
        </div>
        <div class="author-content pl-4 ps-5">
          <h5 class="mb-3 field" v-if="article.Code.isAbandon">已廢止</h5>
           <h3 class="mb-3">{{article.Code.name}} 第 {{article.article_no}} 條
          </h3>
          <p class="paragraph">{{ article.content }}</p>
        </div>
     </div>
     <hr class="h">
  </div>
  <!-- paragraph end -->
</div>

</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  methods: {
    timeCites (index) {
      return index + (this.currentPage - 1) * 10 + 1
    }
  }
}
</script>
<style>
.rank-title{
  color:#A48500;
  font-size:20px;
  font-weight:bold;
}
.post-author{
  width:1000px;
  margin:0 auto;
}
.rank{
  color:#A48500;
}
.text-capitalize{
  text-decoration: none;
  color:#535353;
}
.paragraph{
  font-size:large;
}
.field{
   color:#A48500;
   font-size:15px;
   font-weight:bold;
}
.h{
  width:1020px;
}
</style>
