(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220deb48"],{"0bbb":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container px-8 px-lg-5"},[t("div",{staticClass:"row gx-8 gx-lg-5 justify-content-center"},[t("div",{staticClass:"col-md-10 col-lg-10 col-xl-10"},[e.errMessage?t("div",[e.errMessage?t("h1",{staticClass:"text-center err"},[e._v(e._s(e.errMessage))]):e._e()]):e._e(),e.errMessage||e.isProcessing?e._e():t("div",[t("favoriteCard",{attrs:{keywords:e.keywords},on:{deleteFavorite:e.deleteLikes}})],1)])])]),t("pagination",{attrs:{currentPage:e.currentPage,totalPage:e.totalPage}})],1)},r=[],i=function(){var e=this,t=e._self._c;return t("div",e._l(e.keywords,(function(s){return t("div",{key:s.Element.id},[t("div",{staticClass:"post-preview"},[t("div",{staticClass:"post-preview d-flex"},[t("span",{staticClass:"post-title"},[t("router-link",{staticClass:"post",attrs:{to:{name:"keywords articles",params:{id:s.Element.id}}}},[e._v(e._s(s.Element.name))])],1),t("a",{on:{click:function(t){return e.deleteFavorite(s.Element.id)}}},[t("i",{staticClass:"fa-solid fa-heart heart"})])]),t("hr",{staticClass:"my-4"})])])})),0)},n=[],o={props:{keywords:{type:Array,required:!0}},methods:{async deleteFavorite(e){this.$emit("deleteFavorite",e)}}},c=o,l=(s("c364"),s("2877")),u=Object(l["a"])(c,i,n,!1,null,null,null),d=u.exports,g=s("6407"),p=s("4cce"),v=s("2fa3"),h={components:{favoriteCard:d,pagination:g["a"]},data(){return{keywords:[],currentPage:1,totalPage:-1,errMessage:"",isProcessing:!0}},beforeRouteUpdate(e,t,s){const{id:a}=this.$route.params,{page:r=""}=e.query;this.fetchData({page:r,id:a}),s()},created(){const{id:e}=this.$route.params,{page:t=""}=this.$route.query;this.fetchData({page:t,id:e})},methods:{async fetchData({page:e,id:t}){try{const s=await p["a"].getFavorites({page:e,id:t}),{data:a}=s;if(200!==a.status)return 404===a.status?void(this.errMessage=a.message):void Object(v["b"])(a,this.$router,this.errMessage);this.keywords=a.data.likes,this.currentPage=Number(a.pagination.currentPage),this.totalPage=Number(a.pagination.totalPage),this.isProcessing=!1}catch(s){Object(v["b"])({status:500})}},async deleteLikes(e){try{this.isProcessing=!0;const t=await p["a"].deleteFavorite({id:e}),{data:s}=t;return 200!==s.status?(this.isProcessing=!1,void Object(v["b"])(s,this.$router)):(this.keywords=this.keywords.filter(t=>t.Element.id!==e),void(this.isProcessing=!1))}catch(t){this.isProcessing=!1,Object(v["b"])({status:500})}}}},P=h,f=(s("f653"),Object(l["a"])(P,a,r,!1,null,null,null));t["default"]=f.exports},"0c2f":function(e,t,s){},6407:function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row mb-5 navbar mt-5"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"block-27"},[t("ul",[t("li",[e.previousPage?e._e():t("span",[e._v("<")]),e.previousPage?t("router-link",{staticClass:"link",attrs:{to:{name:e.$router.history.current.name,query:{page:e.previousPage}}}},[e._v("<")]):e._e()],1),e._l(e.listPage,(function(s){return t("li",{key:s,class:{active:e.currentPage===s}},[t("router-link",{staticClass:"link",attrs:{to:{name:e.$router.history.current.name,query:{page:s}}}},[e._v(e._s(s))])],1)})),t("li",{staticClass:"disabled",class:{disabled:e.currentPage===e.totalPage.length},attrs:{role:"button"}},[e.nextPage?e._e():t("span",[e._v(">")]),e.nextPage?t("router-link",{staticClass:"link",attrs:{to:{name:e.$router.history.current.name,query:{page:e.nextPage}}}},[e._v(">")]):e._e()],1)],2)])])])},r=[];s("14d9");const i=(e,t)=>{const s=[],a=Math.ceil(t/5),r=5*a<=e?5*a:e;for(let i=5*(a-1)+1;i<=r;i++)s.push(i);return s},n={listPage(e,t){return i(e,t)},previousPage(e){return e-1!==0?e-1:""},nextPage(e,t){return e!==t?e+1:""}};var o={props:{currentPage:{type:Number,default:1},totalPage:{type:Number,required:!0}},computed:{listPage(){return n.listPage(this.totalPage,this.currentPage)},previousPage(){return n.previousPage(this.currentPage)},nextPage(){return n.nextPage(this.currentPage,this.totalPage)}},created(){console.log(this.previousPage)}},c=o,l=(s("915e"),s("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null);t["a"]=u.exports},"915e":function(e,t,s){"use strict";s("0c2f")},"9bce":function(e,t,s){},b9df:function(e,t,s){},c364:function(e,t,s){"use strict";s("b9df")},f653:function(e,t,s){"use strict";s("9bce")}}]);
//# sourceMappingURL=chunk-220deb48.bb52cd9b.js.map