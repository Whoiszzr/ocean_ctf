import v from"./Timeline-ZAWT-44O.js";import x from"./Account-UxDlS1b-.js";import g from"./RestPass--9gmNuaW.js";import V from"./UserCard-c1bSPvDh.js";import{_ as w,az as I,q as t,o as S,c as T,b as o,m as e,A as s,t as u,ai as U,aj as A}from"./index-QZ57AMr5.js";const B={name:"Profile",components:{RestPass:g,UserCard:V,Timeline:v,Account:x},data(){return{user:{username:"",role_name:""},activeTab:"sec"}},created(){this.getUser()},methods:{getUser(){I.get("/api/admin/userinfo").then(n=>{this.user=n})}}},d=n=>(U("data-v-e61bc00c"),n=n(),A(),n),C={class:"page-container"},k=d(()=>o("div",{slot:"header",class:"clearfix"},[o("span",null,"About Me")],-1)),N={class:"user-profile"},P=d(()=>o("div",{class:"box-center"},null,-1)),j={class:"box-center"},q={class:"user-name text-center"},y={class:"user-role text-center text-muted"};function z(n,c,D,E,a,M){const p=t("el-avatar"),r=t("el-card"),l=t("el-col"),i=t("account"),_=t("el-tab-pane"),m=t("rest-pass"),f=t("el-tabs"),b=t("el-row");return S(),T("div",C,[o("div",null,[e(b,{gutter:20},{default:s(()=>[e(l,{span:6,xs:24},{default:s(()=>[e(r,null,{default:s(()=>[k,o("div",N,[P,o("div",j,[e(p,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),o("div",q,u(a.user.username),1),o("div",y,u(a.user.role_name),1)])])]),_:1})]),_:1}),e(l,{span:18,xs:24},{default:s(()=>[e(r,null,{default:s(()=>[e(f,{modelValue:a.activeTab,"onUpdate:modelValue":c[0]||(c[0]=h=>a.activeTab=h)},{default:s(()=>[e(_,{label:"账户信息",name:"account"},{default:s(()=>[e(i,{user:a.user},null,8,["user"])]),_:1}),e(_,{label:"安全",name:"sec"},{default:s(()=>[e(m,{user:a.user},null,8,["user"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})])])}const K=w(B,[["render",z],["__scopeId","data-v-e61bc00c"]]);export{K as default};