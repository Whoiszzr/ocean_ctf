import{_ as g,J as d,q as l,o as h,c as V,b as r,m as e,A as o,v as x}from"./index-4T4wOeym.js";const k={name:"sysInfo",data(){return{form:{port_range:null,ip:null}}},created(){this.getConfig()},methods:{getConfig(){d.get("/api/admin/config").then(s=>{this.form.ip=s.data.ip,this.form.docker_api=s.data.docker_api,this.form.port_range=s.data.port_range})},setConfig(){d.post("/api/admin/config",this.form).then(s=>{this.$message({message:"保存成功",type:"success"}),this.getConfig()})}}},C={class:"page-container"},b={class:"widget"},y=r("div",{class:"tool-bar"},"系统配置",-1),v={style:{padding:"20px"}},w={style:{"text-align":"center","margin-top":"20px"}};function I(s,t,B,N,n,_){const i=l("el-input"),p=l("el-form-item"),m=l("el-form"),c=l("el-button"),f=l("el-col"),u=l("el-row");return h(),V("div",C,[r("div",b,[y,e(u,null,{default:o(()=>[e(f,{span:8},{default:o(()=>[r("div",v,[e(m,{"label-width":"120"},{default:o(()=>[e(p,{label:"出口IP"},{default:o(()=>[e(i,{modelValue:n.form.ip,"onUpdate:modelValue":t[0]||(t[0]=a=>n.form.ip=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"Docker API"},{default:o(()=>[e(i,{modelValue:n.form.docker_api,"onUpdate:modelValue":t[1]||(t[1]=a=>n.form.docker_api=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"开放端口范围"},{default:o(()=>[e(i,{modelValue:n.form.port_range,"onUpdate:modelValue":t[2]||(t[2]=a=>n.form.port_range=a)},null,8,["modelValue"])]),_:1})]),_:1}),r("div",w,[e(c,{onClick:_.setConfig,type:"primary",style:{padding:"8px 12px"}},{default:o(()=>[x("保存")]),_:1},8,["onClick"])])])]),_:1})]),_:1})])])}const A=g(k,[["render",I]]);export{A as default};
