(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e0754c"],{"8b3d":function(t,a,i){},a639:function(t,a,i){"use strict";i("8b3d")},d564:function(t,a,i){"use strict";i.r(a);i("7f7f");var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"widget"},[t._m(0),t._v(" "),a("div",[a("table",{staticClass:"endpoint-info"},[a("tbody",[a("tr",[a("td",[t._v("名称")]),t._v(" "),a("td",[t._v(t._s(t.data.info.name))])]),t._v(" "),a("tr",[a("td",[t._v("主机信息")]),t._v(" "),a("td",{staticClass:"small text-muted"},[a("span",[t._v("CPU "+t._s(t.data.info.cpu)+"     ")]),t._v(" "),a("span",{staticStyle:{"margin-left":"1em"}},[t._v("Mem "+t._s(t.data.info.memory)+"GB")]),t._v(" "),a("span",{staticStyle:{"margin-left":"1em"}},[t._v(" "+t._s(t.data.info.system)+" - Standalone"+t._s(t.data.info.version))])])]),t._v(" "),a("tr",[a("td",[t._v("IP")]),t._v(" "),a("td",{staticClass:"small text-muted"},[t._v(t._s(t.data.ip))])]),t._v(" "),a("tr",[a("td",[t._v("连接地址")]),t._v(" "),a("td",{staticClass:"small text-muted"},[t._v(t._s(t.data.docker_api))])])])])])]),t._v(" "),a("div",{staticClass:"widget",staticStyle:{"margin-top":"30px"}},[t._m(1),t._v(" "),a("div",{staticClass:"docker"},[a("el-row",[a("el-col",{attrs:{md:12,xs:24}},[a("div",{staticClass:"box",on:{click:function(a){return t.$router.push({path:"/docker/container/",query:{id:t.pk}})}}},[a("div",{staticStyle:{height:"65px",width:"65px","background-color":"#2361ae!important","vertical-align":"middle","text-align":"center","border-radius":"32px"}},[a("i",{staticClass:"iconfont icon-volumes",staticStyle:{color:"#f0f0f0","font-size":"35px","line-height":"65px"}})]),t._v(" "),a("div",{staticClass:"state"},[a("div",{staticClass:"state-item"},[t._v(t._s(t.data.info.containers))]),t._v(" "),a("div",{staticClass:"comment"},[t._v("Container")])])])]),t._v(" "),a("el-col",{attrs:{md:12,xs:24}},[a("div",{staticClass:"box",on:{click:function(a){return t.$router.push({path:"/docker/image/",query:{id:t.pk}})}}},[a("div",{staticStyle:{height:"65px",width:"65px","background-color":"#2361ae!important","vertical-align":"middle","text-align":"center","border-radius":"32px"}},[a("i",{staticClass:"iconfont icon-jingxiang",staticStyle:{color:"#f0f0f0","font-size":"35px","line-height":"65px"}})]),t._v(" "),a("div",{staticClass:"state"},[a("div",{staticClass:"state-item"},[t._v(t._s(t.data.info.images))]),t._v(" "),a("div",{staticClass:"comment"},[t._v("Image")])])])])],1)],1)])])},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"tool-bar"},[a("span",[t._v("Endpoint Info")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"tool-bar"},[a("span",[t._v("Docker Info")])])}],n=i("e876"),o={name:"hostDetail",data:function(){return{data:{info:{memory:0,containers:null,cpu:null}},pk:null,listQuery:{page:1,page_size:10},total:0,endpoints:[]}},created:function(){this.pk=this.$route.query.id,this.fetchData()},methods:{fetchData:function(){var t=this;n["a"].get("/api/admin/docker/info").then((function(a){t.data=a.data}))},handleSizeChange:function(){this.getEndPoints()},handleCurrentChange:function(){this.getEndPoints()}}},c=o,d=(i("a639"),i("2877")),l=Object(d["a"])(c,s,e,!1,null,"ef9d1d6c",null);a["default"]=l.exports}}]);