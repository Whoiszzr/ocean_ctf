import{_ as o,az as a}from"./index-570ffed7.js";const u={name:"addUser",props:{data:{type:Object,default(){return{}}}},data(){let e;return e=this.data.id===void 0,{rules:{username:[{required:!0,target:"blur",min:3}],password:[{required:e,target:"blur"}],confirm_password:[{required:e,target:"blur",validator:(i,s,t)=>{s!==this.data.password&&t(new Error("两次密码不一致"))}}]},show:!0}},created(){this.data===void 0&&(this.data={})},methods:{updateData(){if(this.data.id){let e=this.data;a.put(`/api/admin/user/${e.id}`,e).then(r=>{this.$emit("success")}).catch(r=>{})}else{let e=this.data;if(!e.username){this.$message({message:"请输入用户名",type:"error"});return}if(!e.password){this.$message({message:"请输入密码",type:"error"});return}if(!e.confirm_password){this.$message({message:"请输入确认密码",type:"error"});return}if(e.password!==e.confirm_password){this.$message({message:"两次输入密码不一致",type:"error"});return}a.post("/api/admin/user",e).then(r=>{this.$emit("success")}).catch(r=>{})}}}};function n(e,r,d,i,s,t){return null}const m=o(u,[["render",n]]);export{m as default};
