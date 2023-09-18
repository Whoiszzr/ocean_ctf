import{u as B,l as V,h,E as b,s as x,_ as D,r as y,o as p,c as g,a as e,b as F,w as l,d as A,e as n,f as w,t as U,g as E,p as I,i as R,j as v,k as S,m as q,n as K,q as L}from"./index-a65ff8b6.js";/* empty css                *//* empty css                     *//* empty css                 */const P={name:"register",components:{User:B,Lock:V},data(){return{register:!0,signUploading:!1,loading:!1,loginForm:{username:"",password:""},signUpForm:{username:"",password:"",confirmPassword:""},loginRules:{username:[{required:!0,message:"请输入账号/手机号",type:"string",trigger:"blur"}],password:[{required:!0,message:"请输入密码",type:"string",trigger:"blur"}]},signUpRules:{username:[{required:!0,message:"请输入账号",type:"string",trigger:"blur"}],password:[{required:!0,message:"请输入密码",type:"string",trigger:"blur"}],confirmPassword:[{validator:(i,o,d)=>{o===""?d(new Error("请再次输入密码")):o!==this.signUpForm.password?d(new Error("两次输入密码不一致!")):d()},type:"string",trigger:"blur"}]}}},created(){this.loginLoading=!1,this.signUploading=!1},mounted(){},methods:{SignUp(){h.post("/api/register",this.signUpForm).then(i=>{b.success("注册成功"),this.register=!1})},login(){this.loading=!0,h.post("/api/login",this.loginForm).then(i=>{let o=i.token;x(o),this.$router.replace({path:"/"})}).catch(i=>{console.log(i)}).finally(()=>{this.loading=!1})}}},N=""+new URL("map-bg-136bef09.png",import.meta.url).href;const r=i=>(I("data-v-aa418ee5"),i=i(),R(),i),T={class:"container",id:"app"},j={class:"forms-container"},M={class:"signin-signup"},z=r(()=>e("div",{style:{position:"absolute",right:"0"}},[e("img",{src:N})],-1)),G=r(()=>e("div",{style:{display:"flex","align-items":"center"}},[e("img",{style:{height:"46px","margin-right":"8px"},src:v,alt:""}),e("h2",{class:"title"},"注册")],-1)),H={class:"input-field"},J=r(()=>e("i",{class:"fa-solid fa-user"},null,-1)),O={class:"input-field"},Q=r(()=>e("i",{class:"fa-solid fa-lock"},null,-1)),W={class:"input-field"},X=r(()=>e("i",{class:"fa-solid fa-lock"},null,-1)),Y=r(()=>e("div",{style:{display:"flex","align-items":"center"}},[e("img",{style:{height:"46px","margin-right":"8px"},src:v,alt:""}),e("h2",{class:"title"},"登录")],-1)),Z={class:"input-field"},$={class:"input-field"},ee={class:"panels-container"},se={key:0,class:"panel left-panel"},oe={class:"content"},ne=r(()=>e("h3",null,"新用户 ?",-1)),te=r(()=>e("p",null," 输入您的信息成为我们的客户 ",-1)),le={key:1,class:"panel left-panel"},ie={class:"content"},re=r(()=>e("h3",null,"已有账号 ?",-1)),ue=r(()=>e("p",null," 请登录以享受我们更多的服务 ",-1));function ae(i,o,d,pe,s,c){const u=S,a=q,m=K,_=A,k=y("User"),f=L,C=y("Lock");return p(),g("div",T,[e("div",j,[e("div",M,[z,s.register?(p(),F(_,{key:0,ref:"signUpRef",model:s.signUpForm,rules:s.signUpRules,class:"sign-in-form"},{default:l(()=>[G,e("div",H,[J,n(a,{prop:"name"},{default:l(()=>[n(u,{modelValue:s.signUpForm.username,"onUpdate:modelValue":o[0]||(o[0]=t=>s.signUpForm.username=t),placeholder:"用户名"},null,8,["modelValue"])]),_:1})]),e("div",O,[Q,n(a,{prop:"password"},{default:l(()=>[n(u,{modelValue:s.signUpForm.password,"onUpdate:modelValue":o[1]||(o[1]=t=>s.signUpForm.password=t),type:"password",placeholder:"密码",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1})]),e("div",W,[X,n(a,{prop:"confirmPassword"},{default:l(()=>[n(u,{modelValue:s.signUpForm.confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=t=>s.signUpForm.confirmPassword=t),type:"password",placeholder:"确认密码",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1})]),n(m,{type:"primary",loading:s.signUploading,onClick:c.SignUp,class:"btn form",round:""},{default:l(()=>[w(U(s.signUploading?"注 册 中":"注 册"),1)]),_:1},8,["loading","onClick"])]),_:1},8,["model","rules"])):(p(),F(_,{key:1,ref:"loginRef",model:s.loginForm,rules:s.loginRules,class:"sign-in-form"},{default:l(()=>[Y,e("div",Z,[n(f,{class:"icon-input"},{default:l(()=>[n(k)]),_:1}),n(a,{prop:"name"},{default:l(()=>[n(u,{modelValue:s.loginForm.username,"onUpdate:modelValue":o[3]||(o[3]=t=>s.loginForm.username=t),placeholder:"账号/手机号",onKeyup:E(c.login,["enter"])},null,8,["modelValue","onKeyup"])]),_:1})]),e("div",$,[n(f,{class:"icon-input"},{default:l(()=>[n(C)]),_:1}),n(a,{prop:"password"},{default:l(()=>[n(u,{modelValue:s.loginForm.password,"onUpdate:modelValue":o[4]||(o[4]=t=>s.loginForm.password=t),type:"password",placeholder:"密码",autocomplete:"off","show-password":"",onKeyup:E(c.login,["enter"])},null,8,["modelValue","onKeyup"])]),_:1})]),n(m,{type:"primary",loading:s.loading,onClick:c.login,class:"btn form",round:""},{default:l(()=>[w(U(s.loading?"登 录 中":"登 录"),1)]),_:1},8,["loading","onClick"])]),_:1},8,["model","rules"]))])]),e("div",ee,[s.register?(p(),g("div",le,[e("div",ie,[re,ue,e("button",{onClick:o[6]||(o[6]=t=>this.register=!1),class:"btn transparent",id:"sign-in-btn"}," 登 录 ")])])):(p(),g("div",se,[e("div",oe,[ne,te,e("button",{onClick:o[5]||(o[5]=t=>this.register=!0),class:"btn transparent",id:"sign-up-btn"}," 注 册 ")])]))])])}const _e=D(P,[["render",ae],["__scopeId","data-v-aa418ee5"]]);export{_e as default};
