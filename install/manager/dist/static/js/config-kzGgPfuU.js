import{_ as b,J as _,q as t,o as v,c as g,b as s,m as e,A as o,v as h}from"./index-ogFUISIS.js";const x={name:"ctf",data(){return{remote_vulnerability_repository:"",vulnerability_timeout:180}},created(){this.getConfig()},methods:{getConfig(){_.get("/api/admin/config").then(i=>{this.remote_vulnerability_repository=i.data.remote_vulnerability_repository,this.vulnerability_timeout=i.data.vulnerability_timeout||180})},setConfig(){let i={remote_vulnerability_repository:this.remote_vulnerability_repository,vulnerability_timeout:this.vulnerability_timeout};_.post("/api/admin/config",i).then(l=>{this.$message({type:"success",message:"保存成功"}),this.getConfig()})}}},C={class:"page-container"},V={class:"widget"},w=s("div",{class:"tool-bar"},"漏洞配置",-1),k={style:{padding:"20px"}},B={style:{"text-align":"left","margin-top":"20px"}};function N(i,l,U,q,n,u){const m=t("el-input-number"),r=t("el-form-item"),p=t("el-input"),c=t("el-form"),d=t("el-button"),y=t("el-col"),f=t("el-row");return v(),g("div",C,[s("div",V,[w,e(f,null,{default:o(()=>[e(y,{span:6},{default:o(()=>[s("div",k,[e(c,{inline:"","label-width":"120"},{default:o(()=>[e(r,{label:"环境时长(秒)"},{default:o(()=>[e(m,{modelValue:n.vulnerability_timeout,"onUpdate:modelValue":l[0]||(l[0]=a=>n.vulnerability_timeout=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"漏洞仓库"},{default:o(()=>[e(p,{style:{width:"400px"},modelValue:n.remote_vulnerability_repository,"onUpdate:modelValue":l[1]||(l[1]=a=>n.remote_vulnerability_repository=a)},null,8,["modelValue"])]),_:1})]),_:1}),s("div",B,[e(d,{onClick:u.setConfig,type:"primary",style:{padding:"8px 12px"}},{default:o(()=>[h("保存")]),_:1},8,["onClick"])])])]),_:1})]),_:1})])])}const E=b(x,[["render",N]]);export{E as default};