import{e as c,x as s,l as p,c as u,o as _}from"./index-570ffed7.js";const f=c({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=s(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,l)=>(_(),u("div"))}});export{f as default};
