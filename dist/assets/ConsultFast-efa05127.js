import{_ as m}from"./CpIcon-ef85b36d.js";import{_ as f}from"./CpNavBar-7cf3a7ed.js";import{d as v,z as g,s as C,a as k,b as x,c as t,f as n,e as s,w as r,i as I,p as h,k as b,h as w,_ as y}from"./index-1f5bf9e6.js";import{I as S}from"./index-30acc300.js";import"./use-placeholder-d6a25d3e.js";const B="/assets/consult-fast-d1432ec9.png",a=e=>(h("data-v-b57085e9"),e=e(),b(),e),F={class:"consult-fast-page"},N=a(()=>s("div",{class:"fast-logo"},[s("img",{class:"img",src:B,alt:""}),s("p",{class:"text"},[s("span",null,"20s"),w(" 快速匹配专业医生")])],-1)),T={class:"fast-type"},V=a(()=>s("div",{class:"info"},[s("p",null,"三甲图文问诊"),s("p",null,"三甲主治及以上级别医生")],-1)),$=a(()=>s("div",{class:"info"},[s("p",null,"普通图文问诊"),s("p",null,"二甲主治及以上级别医生")],-1)),R=v({__name:"ConsultFast",setup(e){const c=g(),u=I();return(z,o)=>{const d=f,l=m,_=S,p=C("router-link");return k(),x("div",F,[t(d,{title:"极速问诊","right-text":"问诊记录",onClickRight:o[0]||(o[0]=i=>n(u).push("/user/consult"))}),N,s("div",T,[t(p,{to:"/consult/dep",onClick:o[1]||(o[1]=i=>n(c).setIllnessType(1)),class:"item"},{default:r(()=>[t(l,{class:"pic",name:"consult-doctor"}),V,t(_,{name:"arrow"})]),_:1}),t(p,{to:"/consult/dep",onClick:o[2]||(o[2]=i=>n(c).setIllnessType(0)),class:"item"},{default:r(()=>[t(l,{class:"pic",name:"consult-message"}),$,t(_,{name:"arrow"})]),_:1})])])}}});const G=y(R,[["__scopeId","data-v-b57085e9"]]);export{G as default};
