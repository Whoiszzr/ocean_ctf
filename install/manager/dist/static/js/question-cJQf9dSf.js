import{_ as x,az as _,q as s,L as D,o as r,c as w,m as t,A as a,F as L,i as j,j as g,v as d,b as u,M as I,ai as S,aj as B}from"./index-QZ57AMr5.js";import H from"./questionItem-tJm63ooE.js";const N={name:"Question",components:{questionItem:H},data(){return{qType:[],listQuery:{page:1,page_size:10,subject:null,search:null},loading:!1,chiData:{},showAddQuestion:!1,total:0,listData:[],rid:null,captureName:null}},created(){this.getList(),this.getOptions()},methods:{getOptions(){_.get("/api/admin/ctf/question/type").then(e=>{this.qType=e.data})},getList(){this.loading=!0,_.get("/api/admin/ctf/question",this.listQuery).then(e=>{this.listData=e.results,this.loading=!1,this.total=e.total}).catch(e=>{})},handleSizeChange(e){this.listQuery.page_size=e,this.getList()},handleCurrentChange(e){this.listQuery.page=e,this.getList()},handleCreate(){this.chiData={capture:this.rid},this.showAddQuestion=!0},editHandle(e){this.chiData=e,this.showAddQuestion=!0},deleteHandle(e){_.delete(`/api/admin/ctf/question/${e.id}`).then(c=>{this.$message({message:"删除成功",type:"success"}),this.getList()})},handleAdd(e){this.showAddQuestion=!1,e&&this.getList()},switchActive(e,c){_.put(`/api/admin/ctf/question/${c.id}`,{active:e}).then(b=>{this.$message({message:"修改成功",type:"success",duration:2e3})})}}},T=e=>(S("data-v-d74dd071"),e=e(),B(),e),U={class:"main"},F={class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"},O={class:"flex justify-between w-full h-[60px] p-4"},E=T(()=>u("p",{class:"font-bold truncate"},"题目列表",-1)),M={class:"flex items-center justify-around"},G={class:"page-r"};function J(e,c,b,K,n,o){const y=s("questionItem"),v=s("el-option"),C=s("el-select"),m=s("el-form-item"),k=s("el-input"),h=s("el-button"),Q=s("el-form"),i=s("el-table-column"),V=s("el-switch"),f=s("el-tag"),q=s("el-table"),z=s("el-pagination"),A=D("loading");return r(),w("div",U,[t(y,{data:n.chiData,show:n.showAddQuestion,onAction:o.handleAdd},null,8,["data","show","onAction"]),t(Q,{class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]",inline:!0},{default:a(()=>[t(m,{class:"el-form-item",label:"分类"},{default:a(()=>[t(C,{modelValue:n.listQuery.subject,"onUpdate:modelValue":c[0]||(c[0]=l=>n.listQuery.subject=l),class:"select",clearable:""},{default:a(()=>[(r(!0),w(L,null,j(n.qType,l=>(r(),g(v,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,null,{default:a(()=>[t(k,{modelValue:n.listQuery.search,"onUpdate:modelValue":c[1]||(c[1]=l=>n.listQuery.search=l),placeholder:"题目名称"},null,8,["modelValue"])]),_:1}),t(m,null,{default:a(()=>[t(h,{type:"primary",onClick:o.getList},{default:a(()=>[d("查询")]),_:1},8,["onClick"])]),_:1})]),_:1}),u("div",F,[u("div",O,[E,u("div",M,[t(h,{type:"primary",onClick:o.handleCreate},{default:a(()=>[d("添加")]),_:1},8,["onClick"])])]),u("div",null,[I((r(),g(q,{fit:"","highlight-current-row":"",stripe:"",data:n.listData},{default:a(()=>[t(i,{align:"center",label:"ID",prop:"id",width:"80"}),t(i,{align:"center",label:"标题",prop:"name",width:"220"}),t(i,{align:"center",label:"类别",prop:"type",width:"180"}),t(i,{align:"center",label:"是否启用",prop:"name",width:"80"},{default:a(l=>[t(V,{modelValue:l.row.active,"onUpdate:modelValue":p=>l.row.active=p,onChange:p=>o.switchActive(p,l.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(i,{align:"center",label:"是否动态",width:"80"},{default:a(l=>[l.row.active_flag?(r(),g(f,{key:0,effect:"dark"},{default:a(()=>[d("是")]),_:1})):(r(),g(f,{key:1,effect:"dark",type:"warning"},{default:a(()=>[d("否")]),_:1}))]),_:1}),t(i,{align:"center",label:"积分",prop:"score",width:"80"}),t(i,{align:"center",label:"环境",prop:"resource_name",width:"180"}),t(i,{align:"center",label:"描述",prop:"desc","show-overflow-tooltip":""}),t(i,{align:"center",label:"操作",width:"160"},{default:a(l=>[t(h,{link:"",type:"primary",onClick:p=>o.editHandle(l.row)},{default:a(()=>[d("编辑")]),_:2},1032,["onClick"]),t(h,{link:"",type:"danger",onClick:p=>o.deleteHandle(l.row)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[A,n.loading]]),u("div",G,[t(z,{"current-page":n.listQuery.page,"page-size":n.listQuery.page_size,"page-sizes":[10,20,30,50],total:n.total,background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:o.handleSizeChange,onCurrentChange:o.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])])])}const W=x(N,[["render",J],["__scopeId","data-v-d74dd071"]]);export{W as default};