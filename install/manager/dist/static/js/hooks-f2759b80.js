import{e as r,af as f,aB as i,aC as s,aD as u}from"./index-570ffed7.js";function I(e,t){const o=/^IF-/;if(o.test(e)){const n=e.split(o)[1],c=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),a=n.slice(n.indexOf(" ")+1,n.length);return r({name:"FontIcon",render(){return f(i,{icon:c,iconType:a,...t})}})}else return typeof e=="function"||typeof(e==null?void 0:e.render)=="function"?e:typeof e=="object"?r({name:"OfflineIcon",render(){return f(s,{icon:e,...t})}}):r({name:"Icon",render(){const n=e&&e.includes(":")?u:s;return f(n,{icon:e,...t})}})}export{I as u};
