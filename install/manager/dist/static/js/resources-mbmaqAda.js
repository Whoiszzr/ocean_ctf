import{_ as A,J as r,q as l,M as D,o as p,c as f,j as _,w as S,b as m,m as t,A as a,v as c,N as H,F as x,i as I,t as q,aj as N,ak as E}from"./index-c6YpnN_1.js";import F from"./resourceItem-fROqIfo0.js";import"./mavon-editor-afyf__kG.js";/* empty css              */const j={name:"resources",components:{resourceItem:F},data(){return{qType:[],listQuery:{page:1,page_size:10,subject:null,search:null},loading:!1,chiData:{},showAddQuestion:!1,total:0,listData:[],rid:null,captureName:null}},created(){this.getList(),this.getOptions()},methods:{getOptions(){r.get("/api/admin/ctf/question/type").then(e=>{this.qType=e.data})},getList(){this.loading=!0,r.get("/api/admin/vulnerability",this.listQuery).then(e=>{this.listData=e.data,this.loading=!1,this.total=e.total}).catch(e=>{})},handleSizeChange(e){this.listQuery.page_size=e,this.getList()},handleCurrentChange(e){this.listQuery.page=e,this.getList()},handleSyncRemoteVulnerabilityRepo(){r.post("/api/admin/vulnerability/sync_vulnerability",{}).then(e=>{this.$message.success("任务提交成功"),this.getList()})},handleUpload(){const e=document.createElement("input");e.type="file",e.addEventListener("change",this.handleFileUpload),e.click()},handleFileUpload(e){const s=e.target.files[0],g=new FormData;g.append("file",s),r.post("/api/admin/vulnerability/import",g).then(v=>{this.$message.success("导入成功"),this.getList()})},handleCreate(){this.$router.replace({name:"vulnerability.edit_resource"})},buildHandle(e){r.post(`/api/admin/docker/resource/${e.id}/build`).then(s=>{this.$message.success("任务已提交"),this.getList()})},editHandle(e){this.$router.replace({name:"vulnerability.edit_resource",query:{id:e.id}})},runHandle(e){r.post(`/api/admin/vulnerability/${e.id}/run`).then(s=>{this.$message({message:"启动成功",type:"success"}),this.getList()})},deleteHandle(e){r.delete(`/api/admin/vulnerability/${e.id}`).then(s=>{this.$message({message:"删除成功",type:"success"}),this.getList()})},handleAdd(e){this.showAddQuestion=!1,e&&this.getList()},switchActive(e,s){r.put(`/api/admin/ctf/question/${s.id}`,{active:e}).then(g=>{this.$message({message:"修改成功",type:"success",duration:2e3})})}}},B=e=>(N("data-v-7d78b48d"),e=e(),E(),e),R={class:"page-container"},U={class:"widget"},T=B(()=>m("div",{class:"tool-bar"},"漏洞资源",-1)),O={class:"search-group"},J={class:"widget-content"},M={class:"page-r"};function G(e,s,g,v,i,n){const C=l("resourceItem"),b=l("el-input"),y=l("el-form-item"),d=l("el-button"),k=l("el-tooltip"),w=l("el-form"),u=l("el-table-column"),L=l("el-tag"),Q=l("el-table"),z=l("el-pagination"),V=D("loading");return p(),f("div",R,[i.showAddQuestion?(p(),_(C,{key:0,data:i.chiData,show:i.showAddQuestion,onAction:n.handleAdd},null,8,["data","show","onAction"])):S("",!0),m("div",U,[T,m("div",O,[t(w,{inline:""},{default:a(()=>[t(y,null,{default:a(()=>[t(b,{modelValue:i.listQuery.search,"onUpdate:modelValue":s[0]||(s[0]=o=>i.listQuery.search=o),placeholder:"名称、app、CVE"},null,8,["modelValue"])]),_:1}),t(y,null,{default:a(()=>[t(d,{type:"primary",onClick:n.getList},{default:a(()=>[c("查询")]),_:1},8,["onClick"]),t(d,{type:"primary",onClick:n.handleCreate},{default:a(()=>[c("添加")]),_:1},8,["onClick"]),t(d,{type:"primary",onClick:n.handleSyncRemoteVulnerabilityRepo},{default:a(()=>[t(k,{content:"同步远程仓库漏洞环境"},{default:a(()=>[c("同步")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]),m("div",J,[H((p(),_(Q,{fit:"","highlight-current-row":"",stripe:"",data:i.listData},{default:a(()=>[t(u,{align:"center",label:"标题",prop:"name",width:"220"}),t(u,{align:"center",label:"组件",prop:"app",width:"220"}),t(u,{align:"center",label:"镜像",prop:"image"}),t(u,{align:"center",label:"状态",prop:"status_name",width:"180"}),t(u,{align:"center",label:"CVE",prop:"cve",width:"220"},{default:a(o=>[(p(!0),f(x,null,I(o.row.cve,h=>(p(),_(L,{style:{margin:"0 2px"},key:h},{default:a(()=>[c(q(h),1)]),_:2},1024))),128))]),_:1}),t(u,{align:"center",label:"添加日期",prop:"date_created","show-overflow-tooltip":""}),t(u,{align:"center",label:"操作",width:"240"},{default:a(o=>[o.row.status===0?(p(),_(d,{key:0,type:"primary",onClick:h=>n.buildHandle(o.row),link:""},{default:a(()=>[c("编译")]),_:2},1032,["onClick"])):(p(),_(d,{key:1,type:"primary",onClick:h=>n.runHandle(o.row),link:""},{default:a(()=>[c("启动")]),_:2},1032,["onClick"])),t(d,{type:"primary",onClick:h=>n.editHandle(o.row),link:""},{default:a(()=>[c("编辑")]),_:2},1032,["onClick"]),t(d,{type:"danger",onClick:h=>n.deleteHandle(o.row),link:""},{default:a(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[V,i.loading]]),m("div",M,[t(z,{"current-page":i.listQuery.page,"page-size":i.listQuery.page_size,"page-sizes":[10,20,30,50],total:i.total,background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])])])}const Y=A(j,[["render",G],["__scopeId","data-v-7d78b48d"]]);export{Y as default};
