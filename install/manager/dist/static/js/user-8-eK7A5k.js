import{_ as L,az as g,aA as w,q as i,L as z,o as h,c as b,m as t,A as s,v as u,b as o,M as S,j as y,t as m,ai as D,aj as U}from"./index-PSQyWyEH.js";import Q from"./addUser-hMvMV0fd.js";import{u as j}from"./hooks-D77K1RNz.js";import{d as B}from"./search-DTzpNWF3.js";const q={name:"Account",components:{addUser:Q},data(){return{loading:!1,dialogUser:!0,TeamOptions:[],list:null,total:0,listLoading:!0,listQuery:{search:null,page:1,page_size:10},RolesData:[],currentItemVisible:!1,currentItem:{}}},created(){this.getList()},methods:{Search(){return B},useRenderIcon:j,getList(){this.listLoading=!0,g.get("/api/admin/user",this.listQuery).then(e=>{this.list=e.data,this.total=e.total,this.listLoading=!1})},userDelete(e){g.delete(`/api/admin/user/${e.id}`).then(r=>{this.$message({message:"删除成功",type:"success"}),this.getList()})},handleSizeChange(e){this.listQuery.page_size=e,this.getList()},handleCurrentChange(e){this.listQuery.page=e,this.getList()},handleCreate(){this.currentItem={},this.currentItemVisible=!0},handleUpdate(e){this.currentItem=e,this.currentItemVisible=!0},updateData(){if(this.currentItem.id){let e=this.currentItem;g.put(`/api/admin/user/${e.id}`,e).then(r=>{w.success("更新成功"),this.getList()}).catch(r=>{}).finally(()=>{this.currentItemVisible=!1})}else{let e=this.currentItem;if(!e.username){this.$message({message:"请输入用户名",type:"error"});return}if(!e.password){this.$message({message:"请输入密码",type:"error"});return}if(!e.confirm_password){this.$message({message:"请输入确认密码",type:"error"});return}if(e.password!==e.confirm_password){this.$message({message:"两次输入密码不一致",type:"error"});return}g.post("/api/admin/user",e).then(r=>{w.success("新增成功"),this.getList()}).catch(r=>{}).finally(()=>{this.currentItemVisible=!1})}}}},A=e=>(D("data-v-2d567a8b"),e=e(),U(),e),N={class:"main"},R={class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"},E={class:"flex justify-between w-full h-[60px] p-4"},M=A(()=>o("p",{class:"font-bold truncate"},"用户列表",-1)),T={class:"flex items-center justify-around"},F={key:1},O={class:"pagination-container"};function G(e,r,H,J,a,n){const _=i("el-input"),p=i("el-form-item"),d=i("el-button"),f=i("el-form"),c=i("el-table-column"),I=i("el-tag"),C=i("el-table"),V=i("el-pagination"),k=i("el-dialog"),v=z("loading");return h(),b("div",N,[t(f,{class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]",inline:!0},{default:s(()=>[t(p,{label:"角色名称：",prop:"name"},{default:s(()=>[t(_,{modelValue:a.listQuery.search,"onUpdate:modelValue":r[0]||(r[0]=l=>a.listQuery.search=l),placeholder:"请输入用户名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),t(p,null,{default:s(()=>[t(d,{type:"primary",icon:n.useRenderIcon(n.Search()),loading:a.loading,onClick:n.getList},{default:s(()=>[u(" 搜索 ")]),_:1},8,["icon","loading","onClick"])]),_:1})]),_:1}),o("div",R,[o("div",E,[M,o("div",T,[t(d,{type:"primary",onClick:n.handleCreate},{default:s(()=>[u("添加")]),_:1},8,["onClick"])])]),o("div",null,[S((h(),y(C,{fit:"","highlight-current-row":"",stripe:"",data:a.list,style:{width:"100%"}},{default:s(()=>[t(c,{align:"center",label:"ID",width:"70px",prop:"id"}),t(c,{label:"用户名",width:"150px",align:"center"},{default:s(l=>[l.row.is_captain?(h(),y(I,{key:0,effect:"dark"},{default:s(()=>[u(m(l.row.username),1)]),_:2},1024)):(h(),b("span",F,m(l.row.username),1))]),_:1}),t(c,{width:"180px",align:"center",label:"邮箱"},{default:s(l=>[o("span",null,m(l.row.email),1)]),_:1}),t(c,{align:"center",label:"注册日期"},{default:s(l=>[o("span",null,m(l.row.date_created),1)]),_:1}),t(c,{align:"center",label:"上次登陆",width:"250"},{default:s(l=>[o("span",null,m(l.row.date_modified),1)]),_:1}),t(c,{align:"center",label:"操作",width:"200"},{default:s(l=>[t(d,{type:"primary",link:"",onClick:x=>n.handleUpdate(l.row)},{default:s(()=>[u("编辑")]),_:2},1032,["onClick"]),t(d,{type:"danger",link:"",onClick:x=>n.userDelete(l.row)},{default:s(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[v,a.listLoading]]),o("div",O,[t(V,{background:"",class:"page-r","current-page":a.listQuery.page,"page-sizes":[10,20,30,50],"page-size":a.listQuery.page_size,layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])]),t(k,{title:a.currentItem.id?"编辑用户":"添加用户",modelValue:a.currentItemVisible,"onUpdate:modelValue":r[5]||(r[5]=l=>a.currentItemVisible=l),"close-on-click-modal":!1,center:"",width:"600px"},{footer:s(()=>[t(d,{onClick:r[4]||(r[4]=l=>this.currentItemVisible=!1)},{default:s(()=>[u("取消")]),_:1}),t(d,{type:"primary",onClick:n.updateData},{default:s(()=>[u("提交")]),_:1},8,["onClick"])]),default:s(()=>[t(f,{ref:"dataForm",model:a.currentItem,"label-width":"100px","label-position":"right"},{default:s(()=>[t(p,{label:"用户名",prop:"username"},{default:s(()=>[t(_,{modelValue:a.currentItem.username,"onUpdate:modelValue":r[1]||(r[1]=l=>a.currentItem.username=l)},null,8,["modelValue"])]),_:1}),t(p,{label:"密    码",prop:"password",required:""},{default:s(()=>[t(_,{type:"password",modelValue:a.currentItem.password,"onUpdate:modelValue":r[2]||(r[2]=l=>a.currentItem.password=l),"show-password":""},null,8,["modelValue"])]),_:1}),t(p,{label:"确认密码",prop:"confirm_password",required:""},{default:s(()=>[t(_,{type:"password",modelValue:a.currentItem.confirm_password,"onUpdate:modelValue":r[3]||(r[3]=l=>a.currentItem.confirm_password=l),"show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}const Y=L(q,[["render",G],["__scopeId","data-v-2d567a8b"]]);export{Y as default};
