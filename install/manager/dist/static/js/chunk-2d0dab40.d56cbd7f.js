(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dab40"],{"6d73":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("div",{staticClass:"widget"},[n("div",{staticClass:"tool-bar"},[t._v("赛事配置")]),t._v(" "),n("el-row",[n("el-col",{attrs:{span:"6"}},[n("div",{staticStyle:{padding:"20px"}},[n("el-form",{attrs:{simi:"mini",inline:""}},[n("el-form-item",{attrs:{label:"容器时长(秒)"}},[n("el-input-number",{model:{value:t.ctf_container_seconds,callback:function(n){t.ctf_container_seconds=n},expression:"ctf_container_seconds"}})],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"left","margin-top":"20px"}},[n("el-button",{staticStyle:{padding:"8px 12px"},attrs:{type:"primary",size:"middle"},on:{click:t.setConfig}},[t._v("保存")])],1)],1)])],1)],1)])},s=[],c=e("b775"),a={name:"ctf",data:function(){return{ctf_container_seconds:180}},created:function(){this.getConfig()},methods:{getConfig:function(){var t=this;c["a"].get("/api/system/config").then((function(n){t.ctf_container_seconds=n.data.ctf_container_seconds||180}))},setConfig:function(){var t=this,n={ctf_container_seconds:this.ctf_container_seconds};c["a"].post("/api/system/config",n).then((function(n){t.$message({type:"success",message:"保存成功"}),t.getConfig()}))}}},o=a,r=e("2877"),d=Object(r["a"])(o,i,s,!1,null,"c1b38f7e",null);n["default"]=d.exports}}]);