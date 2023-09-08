import{_ as A,az as u,q as o,J as D,o as p,c as y,j as _,w as V,b as g,m as t,A as a,v as r,K as x,F as H,i as S,t as I,ai as q,aj as E}from"./index-cdc3a115.js";import F from"./resourceItem-7aedbadc.js";import"./index-e4621457.js";const N={name:"resources",components:{resourceItem:F},data(){return{qType:[],listQuery:{page:1,page_size:10,subject:null,search:null},loading:!1,chiData:{},showAddQuestion:!1,total:0,listData:[],rid:null,captureName:null}},created(){this.getList(),this.getOptions()},methods:{getOptions(){u.get("/api/admin/ctf/question/type").then(e=>{this.qType=e.data})},getList(){this.loading=!0,u.get("/api/admin/vuln",this.listQuery).then(e=>{this.listData=e.data,this.loading=!1,this.total=e.total}).catch(e=>{})},handleSizeChange(e){this.listQuery.page_size=e,this.getList()},handleCurrentChange(e){this.listQuery.page=e,this.getList()},handleUpload(){const e=document.createElement("input");e.type="file",e.addEventListener("change",this.handleFileUpload),e.click()},handleFileUpload(e){const s=e.target.files[0],m=new FormData;m.append("file",s),u.post("/api/admin/vuln/import",m).then(v=>{this.$message.success("导入成功"),this.getList()})},handleCreate(){this.$router.replace({name:"vuln.edit_resource"})},buildHandle(e){u.post(`/api/admin/docker/resource/${e.id}/build`).then(s=>{this.$message.success("任务已提交"),this.getList()})},editHandle(e){this.$router.replace({name:"vuln.edit_resource",query:{id:e.id}})},runHandle(e){u.post(`/api/admin/vuln/${e.id}/run`).then(s=>{this.$message({message:"启动成功",type:"success"}),this.getList()})},deleteHandle(e){u.delete(`/api/admin/vuln/${e.id}`).then(s=>{this.$message({message:"删除成功",type:"success"}),this.getList()})},handleAdd(e){this.showAddQuestion=!1,e&&this.getList()},switchActive(e,s){u.put(`/api/admin/ctf/question/${s.id}`,{active:e}).then(m=>{this.$message({message:"修改成功",type:"success",duration:2e3})})}}},U=e=>(q("data-v-6ab34fed"),e=e(),E(),e),j={class:"page-container"},B={class:"widget"},T=U(()=>g("div",{class:"tool-bar"},"资源",-1)),O={class:"search-group"},J={class:"widget-content"},K={class:"page-r"};function G(e,s,m,v,n,l){const C=o("resourceItem"),k=o("el-input"),f=o("el-form-item"),d=o("el-button"),w=o("el-form"),c=o("el-table-column"),b=o("el-tag"),z=o("el-table"),L=o("el-pagination"),Q=D("loading");return p(),y("div",j,[n.showAddQuestion?(p(),_(C,{key:0,data:n.chiData,show:n.showAddQuestion,onAction:l.handleAdd},null,8,["data","show","onAction"])):V("",!0),g("div",B,[T,g("div",O,[t(w,{inline:""},{default:a(()=>[t(f,null,{default:a(()=>[t(k,{modelValue:n.listQuery.search,"onUpdate:modelValue":s[0]||(s[0]=i=>n.listQuery.search=i),placeholder:"名称、app、CVE"},null,8,["modelValue"])]),_:1}),t(f,null,{default:a(()=>[t(d,{type:"primary",onClick:l.getList},{default:a(()=>[r("查询")]),_:1},8,["onClick"])]),_:1}),t(f,null,{default:a(()=>[t(d,{type:"primary",onClick:l.handleCreate},{default:a(()=>[r("添加")]),_:1},8,["onClick"])]),_:1}),t(f,null,{default:a(()=>[t(d,{type:"primary",onClick:l.handleUpload},{default:a(()=>[r("导入")]),_:1},8,["onClick"])]),_:1})]),_:1})]),g("div",J,[x((p(),_(z,{fit:"","highlight-current-row":"",stripe:"",data:n.listData},{default:a(()=>[t(c,{align:"center",label:"标题",prop:"name",width:"220"}),t(c,{align:"center",label:"组件",prop:"app",width:"220"}),t(c,{align:"center",label:"镜像",prop:"image"}),t(c,{align:"center",label:"状态",prop:"status_name",width:"180"}),t(c,{align:"center",label:"CVE",prop:"cve",width:"220"},{default:a(i=>[(p(!0),y(H,null,S(i.row.cve,h=>(p(),_(b,{style:{margin:"0 2px"},key:h},{default:a(()=>[r(I(h),1)]),_:2},1024))),128))]),_:1}),t(c,{align:"center",label:"添加日期",prop:"date_created","show-overflow-tooltip":""}),t(c,{align:"center",label:"操作",width:"240"},{default:a(i=>[i.row.status===0?(p(),_(d,{key:0,type:"primary",onClick:h=>l.buildHandle(i.row),link:""},{default:a(()=>[r("编译")]),_:2},1032,["onClick"])):(p(),_(d,{key:1,type:"primary",onClick:h=>l.runHandle(i.row),link:""},{default:a(()=>[r("启动")]),_:2},1032,["onClick"])),t(d,{type:"primary",onClick:h=>l.editHandle(i.row),link:""},{default:a(()=>[r("编辑")]),_:2},1032,["onClick"]),t(d,{type:"danger",onClick:h=>l.deleteHandle(i.row),link:""},{default:a(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Q,n.loading]]),g("div",K,[t(L,{"current-page":n.listQuery.page,"page-size":n.listQuery.page_size,"page-sizes":[10,20,30,50],total:n.total,background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:l.handleSizeChange,onCurrentChange:l.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])])])}const W=A(N,[["render",G],["__scopeId","data-v-6ab34fed"]]);export{W as default};
