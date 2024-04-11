import p from"./Todo-pgrp7QVO.js";import{_,q as T,o as n,c as a,b as s,aM as v,M as c,a7 as h,F as u,i as g,j as x,t as r,v as S,N as k,S as y}from"./index-PSQyWyEH.js";const C="todos",f={all:e=>e,active:e=>e.filter(t=>!t.done),completed:e=>e.filter(t=>t.done)},L=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1},{text:"vue-element-admin",done:!0},{text:"vue",done:!0},{text:"element-ui",done:!0},{text:"axios",done:!0},{text:"webpack",done:!0}],b={components:{Todo:p},data(){return{visibility:"all",filters:f,todos:L}},computed:{allChecked(){return this.todos.every(e=>e.done)},filteredTodos(){return f[this.visibility](this.todos)},remaining(){return this.todos.filter(e=>!e.done).length}},methods:{setLocalStorgae(){window.localStorage.setItem(C,JSON.stringify(this.todos))},addTodo(e){const t=e.target.value;t.trim()&&(this.todos.push({text:t,done:!1}),this.setLocalStorgae()),e.target.value=""},toggleTodo(e){e.done=!e.done,this.setLocalStorgae()},deleteTodo(e){this.todos.splice(this.todos.indexOf(e),1),this.setLocalStorgae()},editTodo({todo:e,value:t}){e.text=t,this.setLocalStorgae()},clearCompleted(){this.todos=this.todos.filter(e=>!e.done),this.setLocalStorgae()},toggleAll({done:e}){this.todos.forEach(t=>{t.done=e,this.setLocalStorgae()})}},filters:{pluralize:(e,t)=>e===1?t:t+"s",capitalize:e=>e.charAt(0).toUpperCase()+e.slice(1)}},w={class:"todoapp"},E={class:"header"},z={class:"main"},A=["checked"],B=s("label",{for:"toggle-all"},null,-1),D={class:"todo-list"},N={class:"footer"},K={class:"todo-count"},M={class:"filters"},O=["onClick"];function F(e,t,V,j,d,o){const m=T("todo");return n(),a("section",w,[s("header",E,[s("input",{class:"new-todo",autocomplete:"off",placeholder:"Todo List",onKeyup:t[0]||(t[0]=v((...i)=>o.addTodo&&o.addTodo(...i),["enter"]))},null,32)]),c(s("section",z,[s("input",{class:"toggle-all",id:"toggle-all",type:"checkbox",checked:o.allChecked,onChange:t[1]||(t[1]=i=>o.toggleAll({done:!o.allChecked}))},null,40,A),B,s("ul",D,[(n(!0),a(u,null,g(o.filteredTodos,(i,l)=>(n(),x(m,{onToggleTodo:o.toggleTodo,onEditTodo:o.editTodo,onDeleteTodo:o.deleteTodo,key:l,todo:i},null,8,["onToggleTodo","onEditTodo","onDeleteTodo","todo"]))),128))])],512),[[h,d.todos.length]]),c(s("footer",N,[s("span",K,[s("strong",null,r(o.remaining),1),S(" "+r(o.remaining|e.pluralize("item"))+" left ",1)]),s("ul",M,[(n(!0),a(u,null,g(d.filters,(i,l)=>(n(),a("li",{key:l},[s("a",{class:k({selected:d.visibility===l}),onClick:y(q=>d.visibility=l,["prevent"])},r(l|e.capitalize),11,O)]))),128))])],512),[[h,d.todos.length]])])}const J=_(b,[["render",F]]);export{J as default};
