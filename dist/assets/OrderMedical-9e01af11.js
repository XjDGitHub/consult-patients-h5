import{d as g,c as d,X as S,a as t,b as n,F as B,x as I,e as s,t as c,g as b,w,h as N,y as p,p as P,k as T,_ as D}from"./index-1f5bf9e6.js";import{c as F,t as O,m as V,a0 as z,I as E,w as M}from"./index-30acc300.js";const[A,m]=F("tag"),q={size:String,mark:Boolean,show:O,type:V("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var H=g({name:A,props:q,emits:["close"],setup(e,{slots:l,emit:_}){const r=o=>{o.stopPropagation(),_("close",o)},a=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},h=()=>{var o;const{type:v,mark:f,plain:k,round:y,size:i,closeable:C}=e,u={mark:f,plain:k,round:y};i&&(u[i]=i);const x=C&&d(E,{name:"cross",class:[m("close"),z],onClick:r},null);return d("span",{style:a(),class:m([u,v])},[(o=l.default)==null?void 0:o.call(l),x])};return()=>d(S,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?h():null]})}});const K=M(H),L=e=>(P("data-v-3cac009c"),e=e(),T(),e),X={class:"order-medical"},j=L(()=>s("div",{class:"head"},[s("h3",null,"优医药房"),s("small",null,"优医质保 假一赔十")],-1)),G=["src"],J={class:"info"},Q={class:"name"},R={class:"size"},U={class:"price"},W={key:0,class:"desc"},Y=g({__name:"OrderMedical",props:{medicines:{default:()=>[]}},setup(e){return(l,_)=>{const r=K;return t(),n("div",X,[j,(t(!0),n(B,null,I(e.medicines,a=>(t(),n("div",{class:"item van-hairline--top",key:a.id},[s("img",{class:"img",src:a.avatar,alt:""},null,8,G),s("div",J,[s("p",Q,[s("span",null,c(a.name),1),s("span",null,"x"+c(a.quantity),1)]),s("p",R,[a.prescriptionFlag===1?(t(),b(r,{key:0},{default:w(()=>[N("处方药")]),_:1})):p("",!0),s("span",null,c(a.specs),1)]),s("p",U,"￥"+c(a.amount),1)]),a.usageDosag?(t(),n("div",W,c(a.usageDosag),1)):p("",!0)]))),128))])}}});const ee=D(Y,[["__scopeId","data-v-3cac009c"]]);export{ee as O};