(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d324d76"],{"0dc2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[t.errMessage?e("div",{staticClass:"container"},[t.errMessage?e("h1",{staticClass:"text-center err"},[t._v(t._s(t.errMessage))]):t._e()]):t._e(),t.errMessage||t.isProcessing?t._e():e("div",[t._l(t.notes,(function(s){return e("div",{key:s.id},[e("div",{staticClass:"px-10 px-lg-5"},[e("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[e("div",{staticClass:"col-md-10 col-lg-10 col-xl-10"},[e("div",{staticClass:"post-preview d-flex justify-content-between"},[e("div",{staticClass:"post-preview d-flex"},[e("span",{staticClass:"post-title"},[e("router-link",{staticClass:"post",attrs:{to:{name:"keywords articles",params:{id:s.element_id}}}},[t._v(t._s(s.elementName))])],1),e("a",{attrs:{disabled:t.isProcessing},on:{click:function(e){return t.addLike(s.element_id)}}},[e("i",{directives:[{name:"show",rawName:"v-show",value:!s.isFavorite,expression:"!note.isFavorite"}],staticClass:"fa-regular fa-heart heart"})]),e("a",{attrs:{disabled:t.isProcessing},on:{click:function(e){return t.deleteLike(s.element_id)}}},[e("i",{directives:[{name:"show",rawName:"v-show",value:s.isFavorite,expression:"note.isFavorite"}],staticClass:"fa-solid fa-heart heart"})])]),e("div",{staticClass:"close"},[e("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close",disabled:t.isDeleting},on:{click:function(e){return t.deleteNote(s)}}})])])])])]),e("div",{staticClass:"card frame my-3"},[e("div",{staticClass:"d-flex card-body justify-content-between"},[e("div",{staticClass:"content d-flex"},[t._m(0,!0),e("div",{staticClass:"author-content pl-4 ps-4"},[e("h5",{staticClass:"mb-3 field card-subtitle"},[t._v(t._s(t._f("fromNow")(s.createdAt)))]),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.currentNote.id!==s.id,expression:"currentNote.id !== note.id"}],staticClass:"mb-3 card-text"},[t._v(t._s(s.content)+" ")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentNote.content,expression:"currentNote.content"},{name:"show",rawName:"v-show",value:t.currentNote.id===s.id,expression:"currentNote.id === note.id"}],staticClass:"mb-3 card-text new-note",attrs:{rows:"5",type:"text",required:"",autofocus:"",placeholder:"寫下筆記"},domProps:{value:t.currentNote.content},on:{input:function(e){e.target.composing||t.$set(t.currentNote,"content",e.target.value)}}})])])]),e("div",{staticClass:"edit"},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.currentNote.id===s.id,expression:"currentNote.id === note.id"}],staticClass:"edit-button btn btn-outline-secondary mx-2",attrs:{type:"button","aria-label":"save",disabled:t.isEditing},on:{click:function(e){return t.saveNote(s)}}},[t._v("儲存")]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.currentNote.id!==s.id,expression:"currentNote.id !== note.id"}],staticClass:"edit-button btn btn-outline-secondary",attrs:{type:"button","aria-label":"edit"},on:{click:function(e){return t.editNote(s)}}},[t._v("編輯")])])]),e("hr",{staticClass:"my-4 horizon"})])})),e("pagination",{attrs:{currentPage:t.currentPage,totalPage:t.totalPage}})],2)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"author-img"},[e("i",{staticClass:"fa-regular fa-circle-user photo"})])}],n=s("6407"),r=s("c1df"),o=s.n(r),c=s("4cce"),d=s("29cf"),l=s("2fa3"),u={components:{pagination:n["a"]},data(){return{notes:[],currentNote:{},currentPage:1,totalPage:-1,errMessage:"",isProcessing:!1,isEditing:!1,isDeleting:!1}},beforeRouteUpdate(t,e,s){const{id:i}=this.$route.params,{page:a=""}=t.query;this.fetchData({page:a,id:i}),s()},created(){const{id:t}=this.$route.params,{page:e=""}=this.$route.query;this.fetchData({page:e,id:t})},methods:{async fetchData({page:t,id:e}){try{const s=await c["a"].getNotes({page:t,id:e}),{data:i}=s;if(200!==i.status)return 404===i.status?void(this.errMessage=i.message):void Object(l["b"])(i,this.$router);this.notes=i.data.notes,this.currentPage=Number(i.pagination.currentPage),this.totalPage=Number(i.pagination.totalPage)}catch(s){Object(l["b"])({status:500})}},async addLike(t){try{this.isProcessing=!0;const e=await c["a"].addFavorite({id:t}),{data:s}=e;if(console.log(s),200!==s.status)return Object(l["b"])(s,this.$router),void(this.isProcessing=!1);this.notes=this.notes.map(e=>e.element_id===t?{...e,isFavorite:!0}:e),this.isProcessing=!1}catch(e){Object(l["b"])({status:500})}},async deleteLike(t){try{this.isProcessing=!0;const e=await c["a"].deleteFavorite({id:t}),{data:s}=e;return 200!==s.status?(Object(l["b"])(s,this.$router),void(this.isProcessing=!1)):(this.notes=this.notes.map(e=>e.element_id===t?{...e,isFavorite:!1}:e),void(this.isProcessing=!1))}catch(e){Object(l["b"])({status:500})}},async deleteNote(t){try{const e=t.id;this.isDeleting=!0;const s=await d["a"].deleteNotes({id:e}),{data:i}=s;if(200!==i.status)return Object(l["b"])(i,this.$router),void(this.isDeleting=!1);this.notes=this.notes.filter(t=>t.id!==e),this.isDeleting=!1}catch(e){this.isDeleting=!1,Object(l["b"])({status:500})}},async saveNote(t){try{const{id:t,content:e}=this.currentNote;if(!e)return void Object(l["b"])({status:400,message:["筆記內容不得空白!"]});this.isEditing=!0;const s=await d["a"].editNotes({id:t,content:e}),{data:i}=s;if(200!==i.status)return Object(l["b"])(i,this.$router),void(this.isEditing=!1);this.notes=this.notes.map(s=>s.id===t?{...s,content:e}:s),this.isEditing=!1,this.currentNote={}}catch(e){this.isEditing=!1,Object(l["b"])({status:500})}},editNote(t){this.currentNote={...t}}},filters:{fromNow(t){return t?o()(t).fromNow():"-"}}},h=u,v=(s("7b78"),s("2877")),g=Object(v["a"])(h,i,a,!1,null,null,null);e["default"]=g.exports},"4cc0":function(t,e,s){},"7b78":function(t,e,s){"use strict";s("4cc0")}}]);
//# sourceMappingURL=chunk-7d324d76.b04f3e87.js.map