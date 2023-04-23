<template>
<div class="row mb-5 navbar mt-5">
  <div class="col-md-12">
  <div class="block-27">
                <ul>
                  <li>
                    <span v-if="!previousPage">&lt;</span>
                    <router-link :to="{name: $router.history.current.name, query: { page: previousPage }}"  class="link" v-if="previousPage">&lt;</router-link>
                  </li>
                  <li  v-for="page in listPage" :key="page" :class="{ active: currentPage === page }"><router-link :to="{name: $router.history.current.name, query: { page }}" class="link">{{ page }}</router-link></li>
                 <li  :class="{ disabled: currentPage === totalPage.length }" role="button" class="disabled">
                  <span v-if="!nextPage">&gt;</span>
                  <router-link :to="{name: $router.history.current.name, query: { page: nextPage }} " class="link" v-if="nextPage">&gt;</router-link>
                </li>
                </ul>
              </div>
   </div>
  </div>

</template>
<script>
const pageArray = (totalPage, currentPage) => {
  const array = []
  const group = Math.ceil(currentPage / 5)
  const endPage = 5 * group <= totalPage ? 5 * group : totalPage
  for (let data = 5 * (group - 1) + 1; data <= endPage; data++) {
    array.push(data)
  }
  return array
}
const pageCount = {
  listPage (totalPage, currentPage) { return pageArray(totalPage, currentPage) },
  previousPage (currentPage) { return (currentPage - 1) !== 0 ? currentPage - 1 : '' },
  nextPage (currentPage, totalPage) { return currentPage !== totalPage ? currentPage + 1 : '' }
}
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    listPage () {
      return pageCount.listPage(this.totalPage, this.currentPage)
    },
    previousPage () {
      return pageCount.previousPage(this.currentPage)
    },
    nextPage () {
      return pageCount.nextPage(this.currentPage, this.totalPage)
    }
  },
  created () {
    console.log(this.previousPage)
  }
}
</script>

<style>
.block-27 ul {
  text-align:center;
  padding: 0;
  margin: 0; }
  .block-27 ul li {
    display: inline-block;
    margin-bottom: 4px;
    font-weight: 400; }
    .block-27 ul li a, .block-27 ul li span {
      color: gray;
      text-align: center;
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      border: 1px solid #e6e6e6; }
    .block-27 ul li.active a, .block-27 ul li.active span {
      background: #4ba1fa;
      color: #fff;
      border: 1px solid transparent; }
.link{
  text-decoration: none;
}
</style>
