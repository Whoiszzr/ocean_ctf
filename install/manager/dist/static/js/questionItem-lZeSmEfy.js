import{_ as U,J as d,q as n,o as u,j as f,A as i,m as a,v as _,c as h,F as b,i as v,b as p,t as B}from"./index-4M8rgsfr.js";const D={name:"addQuestion",props:{show:Boolean,data:Object},data(){return{visible:!1,resource_list:[],hostOption:[],imageOption:[],capture:null,fileChange:!1,options:[],attachment:[],form:{attachment:[],resource_id:null,name:null,flag:null,desc:null,score:null,type:null,active:!0,active_flag:!1},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择类别",trigger:"blur"}],desc:[{required:!0,message:"请填写描述信息",trigger:"blur"},{min:3,max:300,message:"长度在 3 到 300 个字符",trigger:"blur"}],flag:[{validator:this.validateFlagOrResource,trigger:"blur"},{min:3,max:64,message:"长度在 3 到 64 个字符",trigger:"blur"}],resource_id:[{validator:this.validateFlagOrResource,trigger:"blur"}]}}},watch:{show(o){this.visible=o},data:{handler(o){o&&(this.form.id=this.data.id,this.form.name=this.data.name,this.form.flag=this.data.flag,this.form.desc=this.data.desc,this.form.active_flag=this.data.active_flag,this.form.type=this.data.type,this.form.active=this.data.active,this.form.score=this.data.score,this.form.resource_id=this.data.resource_id,this.data.attachment&&this.data.attachment.length>0&&(this.attachment=this.form.attachment))},deep:!0}},created(){this.getOptions(),this.getResourceList(),this.data.id&&(this.form.id=this.data.id,this.form.name=this.data.name,this.form.flag=this.data.flag,this.form.desc=this.data.desc,this.form.active_flag=this.data.active_flag,this.form.type=this.data.type,this.form.active=this.data.active,this.form.score=this.data.score,this.form.resource_id=this.data.resource_id,this.data.attachment.length>0&&(this.attachment=this.form.attachment))},methods:{getOptions(){d.get("/api/admin/ctf/question/type").then(o=>{this.options=o.data})},getResourceList(){d.get("/api/admin/docker/resource",{page_size:99999,status:1,type:"CTF"}).then(o=>{this.resource_list=o.data})},cancel(){this.$emit("action",!1)},submit(){this.form.attachment=[];for(let o=0;o<this.attachment.length;o++)this.form.attachment.push(this.attachment[o].uuid);this.$refs.form.validate((o,l)=>{o?this.form.id?d.put(`/api/admin/ctf/question/${this.form.id}`,this.form).then(s=>{this.$emit("action",!0),this.$message({message:"提交成功",type:"success"})}).catch(s=>{}):d.post("/api/admin/ctf/question",this.form).then(s=>{this.$emit("action",!0)}).catch(s=>{}):this.$message({message:"表单验证失败:"+JSON.stringify(l),type:"error"})})},handleFileClick(){document.getElementById("inputFile").click()},changeActiveFlag(o){},removeFile(o){this.fileChange=!0,this.attachment.splice(o,1)},handleFile(){let l=this.$refs.inputer.files[0],s=new FormData;s.append("file",l),d.post("/api/admin/ctf/upload",s,{headers:{"Content-Type":"multipart/form-data"}}).then(y=>{this.fileChange=!0;let{uuid:t,filename:r}=y;this.attachment.push({uuid:t,filename:r})})},validateFlagOrResource(o,l,s){!this.form.flag&&!this.form.resource_id?s(new Error("Flag 和 Resource ID 至少填写一个")):s()}}},R={style:{width:"300px"}},I={class:"file-item"},N=["href"],A=["onClick"];function E(o,l,s,y,t,r){const c=n("el-input"),m=n("el-form-item"),V=n("el-option"),k=n("el-select"),F=n("el-switch"),C=n("el-col"),w=n("el-row"),g=n("el-button"),x=n("el-form"),O=n("el-dialog");return u(),f(O,{"before-close":r.cancel,"show-close":!0,title:t.form.id?"编辑题目":"添加题目",modelValue:t.visible,"onUpdate:modelValue":l[9]||(l[9]=e=>t.visible=e),width:"40%"},{footer:i(()=>[a(g,{onClick:r.cancel},{default:i(()=>[_("取 消")]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:r.submit},{default:i(()=>[_("确 定")]),_:1},8,["onClick"])]),default:i(()=>[a(x,{model:t.form,ref:"form",class:"form","label-width":"80px",rules:t.rules},{default:i(()=>[a(m,{label:"名称",prop:"name"},{default:i(()=>[a(c,{modelValue:t.form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>t.form.name=e)},null,8,["modelValue"])]),_:1}),a(m,{label:"类别",prop:"type"},{default:i(()=>[a(k,{modelValue:t.form.type,"onUpdate:modelValue":l[1]||(l[1]=e=>t.form.type=e),filterable:""},{default:i(()=>[(u(!0),h(b,null,v(t.options,e=>(u(),f(V,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{class:"block-input",label:"是否激活"},{default:i(()=>[a(F,{modelValue:t.form.active,"onUpdate:modelValue":l[2]||(l[2]=e=>t.form.active=e)},null,8,["modelValue"])]),_:1}),a(m,{class:"block-input",label:"动态Flag"},{default:i(()=>[a(F,{modelValue:t.form.active_flag,"onUpdate:modelValue":l[3]||(l[3]=e=>t.form.active_flag=e),onChange:r.changeActiveFlag},null,8,["modelValue","onChange"])]),_:1}),t.form.active_flag?(u(),f(m,{key:0,class:"block-input",label:"环境",prop:"resource_id"},{default:i(()=>[a(k,{modelValue:t.form.resource_id,"onUpdate:modelValue":l[4]||(l[4]=e=>t.form.resource_id=e),clearable:"",filterable:""},{default:i(()=>[(u(!0),h(b,null,v(t.resource_list,e=>(u(),f(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):(u(),f(m,{key:1,class:"block-input",label:"Flag",prop:"flag"},{default:i(()=>[a(w,null,{default:i(()=>[a(C,{span:20},{default:i(()=>[a(c,{modelValue:t.form.flag,"onUpdate:modelValue":l[5]||(l[5]=e=>t.form.flag=e)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})),a(m,{label:"描述",prop:"desc"},{default:i(()=>[a(c,{modelValue:t.form.desc,"onUpdate:modelValue":l[6]||(l[6]=e=>t.form.desc=e),type:"textarea"},null,8,["modelValue"])]),_:1}),a(w,null,{default:i(()=>[a(C,{span:8},{default:i(()=>[a(m,{label:"积分",required:""},{default:i(()=>[a(c,{modelValue:t.form.score,"onUpdate:modelValue":l[7]||(l[7]=e=>t.form.score=e),type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(m,{label:"附件"},{default:i(()=>[p("input",{id:"inputFile",ref:"inputer",style:{display:"none"},type:"file",onChange:l[8]||(l[8]=(...e)=>r.handleFile&&r.handleFile(...e))},null,544),a(g,{type:"primary",onClick:r.handleFileClick},{default:i(()=>[_("上传")]),_:1},8,["onClick"]),p("div",R,[(u(!0),h(b,null,v(t.attachment,(e,q)=>(u(),h("div",I,[p("a",{href:e.filename,target:"_blank"},B(e.filename),9,N),p("i",{class:"el-icon-close",onClick:L=>r.removeFile(q)},null,8,A)]))),256))])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["before-close","title","modelValue"])}const j=U(D,[["render",E],["__scopeId","data-v-24c18daf"]]);export{j as default};