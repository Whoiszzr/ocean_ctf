(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154715a6"],{"1b5b":function(t,s,e){"use strict";e("cfb5")},"87ea":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t._self._c;return s("el-row",{staticStyle:{height:"100vh","background-color":"#f3f3f3"},attrs:{align:"middle",type:"flex",justify:"center"}},[s("el-col",[s("div",{staticStyle:{width:"600px","padding-bottom":"80px",margin:"auto"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[s("svg-icon",{staticClass:"title-logo",staticStyle:{"font-size":"40px"},attrs:{"icon-class":"logo"}}),t._v(" "),s("span",{staticClass:"title-txt"},[t._v("Ocean CTF")])],1)]),t._v(" "),s("div",{staticClass:"form",staticStyle:{"text-align":"center"}},[s("el-form",{attrs:{"label-width":"120px","label-position":"left"}},[s("el-form-item",{attrs:{label:"username"}},[s("el-input",{model:{value:t.form.username,callback:function(s){t.$set(t.form,"username",s)},expression:"form.username"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"password"}},[s("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"password"}},[s("el-input",{attrs:{type:"password"},model:{value:t.form.confirm_password,callback:function(s){t.$set(t.form,"confirm_password",s)},expression:"form.confirm_password"}})],1)],1),t._v(" "),t.errorMsg?s("div",{staticStyle:{"text-align":"left",padding:"10px"}},[s("i",{staticClass:"el-icon-error",staticStyle:{color:"#F56C6C"}}),s("span",{staticStyle:{"font-weight":"normal","font-size":"12px"}},[t._v(t._s(t.errorMsg))])]):t._e(),t._v(" "),s("el-button",{staticClass:"btn",attrs:{type:"primary",size:"middle"},on:{click:t.submit}},[t._v("添加")])],1)])])],1)},a=[],r=e("b775"),i={name:"init",data:function(){return{errorMsg:null,form:{username:"",password:"",confirm_password:""}}},methods:{submit:function(){var t=this;this.form.confirm_password===this.form.password?r["a"].post("/api/system/init",this.form).then((function(s){t.$router.push({name:"login"})})).catch((function(s){t.$router.push({name:"login"})})):this.errorMsg="两次密码不一致、请重新输入！"}}},n=i,l=(e("1b5b"),e("2877")),c=Object(l["a"])(n,o,a,!1,null,"1232ebc6",null);s["default"]=c.exports},cfb5:function(t,s,e){}}]);