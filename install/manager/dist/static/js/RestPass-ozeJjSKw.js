import{_ as i,J as _,q as r,o as f,j as c,A as o,m as e,v as h}from"./index-4T4wOeym.js";const V={props:{user:{type:Object,default:()=>({name:"",email:""})}},data(){return{oldPass:"",pass:"",pass2:""}},created(){},methods:{submit(){if(!this.pass||this.pass!==this.pass2){this.$message.error({message:"请确认两次密码是否一致!"});return}let n={old_pass:this.oldPass,pass:this.pass};_.post("/api/admin/rest_pass",n).then(s=>{this.$message.success("密码修改成功"),this.oldPass=this.pass=this.pass2=""}).catch(s=>{})}}};function b(n,s,w,x,t,d){const p=r("el-input"),a=r("el-form-item"),m=r("el-button"),u=r("el-form");return f(),c(u,{"label-width":"100px"},{default:o(()=>[e(a,{label:"当前密码"},{default:o(()=>[e(p,{modelValue:t.oldPass,"onUpdate:modelValue":s[0]||(s[0]=l=>t.oldPass=l),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),e(a,{label:"新密码"},{default:o(()=>[e(p,{type:"password",modelValue:t.pass,"onUpdate:modelValue":s[1]||(s[1]=l=>t.pass=l),modelModifiers:{trim:!0},"show-password":""},null,8,["modelValue"])]),_:1}),e(a,{label:"确认新密码"},{default:o(()=>[e(p,{type:"password",modelValue:t.pass2,"onUpdate:modelValue":s[2]||(s[2]=l=>t.pass2=l),modelModifiers:{trim:!0},"show-password":""},null,8,["modelValue"])]),_:1}),e(a,null,{default:o(()=>[e(m,{type:"primary",onClick:d.submit},{default:o(()=>[h("提交")]),_:1},8,["onClick"])]),_:1})]),_:1})}const y=i(V,[["render",b]]);export{y as default};
