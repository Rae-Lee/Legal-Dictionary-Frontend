(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3032b254"],{"754a":function(e,s,i){"use strict";i("b965")},b3b1:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e._self._c;return s("section",{staticClass:"signup"},[s("div",{staticClass:"container"},[e.errMessage?s("div",[e.errMessage?s("h1",{staticClass:"text-center err"},[e._v(e._s(e.errMessage))]):e._e()]):e._e(),e.errMessage?e._e():s("div",{staticClass:"signup-content"},[s("div",{staticClass:"signup-form"},[s("h2",{staticClass:"form-title"},[e._v("個人資料")]),s("form",{staticClass:"register-form",attrs:{method:"POST",id:"register-form"},on:{submit:function(s){return s.preventDefault(),s.stopPropagation(),e.handleSubmit(e.user.id)}}},[s("div",{staticClass:"form-group"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.visibility,expression:"!visibility"}],staticClass:"profile"},[e._v("帳號："+e._s(e.user.account))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.account,expression:"currentUser.account"},{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],attrs:{type:"text",name:"account",id:"account",placeholder:"帳號",required:"",autofocus:""},domProps:{value:e.currentUser.account},on:{input:function(s){s.target.composing||e.$set(e.currentUser,"account",s.target.value)}}})]),s("div",{staticClass:"form-group"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.visibility,expression:"!visibility"}],staticClass:"profile"},[e._v("暱稱："+e._s(e.user.name))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.name,expression:"currentUser.name"},{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],attrs:{type:"text",name:"name",id:"name",placeholder:"暱稱",required:""},domProps:{value:e.currentUser.name},on:{input:function(s){s.target.composing||e.$set(e.currentUser,"name",s.target.value)}}})]),s("div",{staticClass:"form-group"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.visibility,expression:"!visibility"}],staticClass:"profile"},[e._v("信箱："+e._s(e.user.email))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.email,expression:"currentUser.email"},{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],attrs:{type:"email",name:"email",id:"email",placeholder:"信箱",required:""},domProps:{value:e.currentUser.email},on:{input:function(s){s.target.composing||e.$set(e.currentUser,"email",s.target.value)}}})]),s("div",{staticClass:"form-group"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.visibility,expression:"!visibility"}],staticClass:"profile"},[e._v("密碼： *********")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.password,expression:"currentUser.password"},{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],attrs:{type:"password",name:"password",id:"password",placeholder:"密碼",required:""},domProps:{value:e.currentUser.password},on:{input:function(s){s.target.composing||e.$set(e.currentUser,"password",s.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentUser.checkPassword,expression:"currentUser.checkPassword"},{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],attrs:{type:"password",name:"checkPassword",id:"checkPassword",placeholder:"再輸入一次密碼",required:""},domProps:{value:e.currentUser.checkPassword},on:{input:function(s){s.target.composing||e.$set(e.currentUser,"checkPassword",s.target.value)}}})]),s("div",{staticClass:"form-group form-button d-flex"},[s("input",{directives:[{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],staticClass:"form-submit",attrs:{type:"submit",name:"signup",id:"signup",value:"儲存",disabled:e.isProcessing}}),s("button",{directives:[{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],staticClass:"save form-submit mx-3",on:{click:e.handleCancel}},[e._v("取消")])])])]),s("div",{staticClass:"signup-image"},[e._m(0),s("input",{staticClass:"form-submit mx-3 save",attrs:{type:"submit",name:"signup",id:"signup",value:"編輯"},on:{click:e.handleEdit}})])])])])},r=[function(){var e=this,s=e._self._c;return s("figure",[s("img",{attrs:{src:i("81e4"),alt:"sing up image"}})])}],a=i("4cce"),n=i("2fa3"),o={data(){return{user:{id:-1,account:"",name:"",email:"",role:"user"},currentUser:{account:"",name:"",email:"",password:"",checkPassword:""},visibility:!1,errMessage:"",isProcessing:!1}},methods:{async handleSubmit(e){try{let{account:s,name:i,email:t,password:r,checkPassword:o}=this.currentUser;if(!s||!i||!t||!r||!o)return void Object(n["b"])({status:400,message:["所有欄位皆為必填！"]});if(r!==o)return void Object(n["b"])({status:400,message:["密碼與確認密碼不相符!"]});this.isProcessing=!0;const c=await a["a"].editProfile({id:e,account:s,name:i,email:t,password:r,checkPassword:o}),{data:u}=c;if(200!==u.status)return 404===u.status?void(this.errMessage=u.message):(r="",o="",this.isProcessing=!1,void Object(n["b"])(u,this.$router));this.visibility=!1,this.isProcessing=!1,this.user=u.data,Object(n["c"])(u),s="",i="",t="",r="",o=""}catch(s){this.isProcessing=!1,Object(n["b"])({status:500})}},handleEdit(){this.visibility=!0,this.currentUser={...this.currentUser,...this.user}},handleCancel(){this.visibility=!1,this.currentUser.account="",this.currentUser.name="",this.currentUser.email="",this.currentUser.password="",this.currentUser.checkPassword=""},async fetchUser({id:e}){try{const s=await a["a"].getProfile({id:e}),{data:i}=s;if(200!==i.status)return 404===i.status?void(this.errMessage=i.message):void Object(n["b"])(i,this.$router);this.user={...this.user,...i.data}}catch(s){Object(n["b"])({status:500})}}},created(){const{id:e}=this.$route.params;console.log({id:e}),this.fetchUser({id:e})}},c=o,u=(i("754a"),i("2877")),l=Object(u["a"])(c,t,r,!1,null,null,null);s["default"]=l.exports},b965:function(e,s,i){}}]);
//# sourceMappingURL=chunk-3032b254.caed1a4e.js.map