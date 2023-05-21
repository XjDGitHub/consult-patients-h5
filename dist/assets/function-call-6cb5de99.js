import{p as F,c as H,P as R,m as K,d as I}from"./request-2770c0b0.js";import{d as U,r as p,D as L,c as o,q as S,E as q}from"./index-1f5bf9e6.js";import{B as v}from"./index-f227a669.js";import{A as k,a as z}from"./index-d4771de6.js";import{c as M,e as m,n as W,f as j,m as V,t as P,h as G,j as J,k as T,l as Q,o as X,q as Y,r as Z}from"./index-30acc300.js";import{c as $}from"./interceptor-42f26492.js";const[ee,a,f]=M("dialog"),te=m({},F,{title:String,theme:String,width:W,message:[String,Function],callback:Function,allowHtml:Boolean,className:j,transition:V("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),ne=[...H,"transition","closeOnPopstate"];var oe=U({name:ee,props:te,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:l}){const u=p(),i=L({confirm:!1,cancel:!1}),C=t=>r("update:show",t),b=t=>{var n;C(!1),(n=e.callback)==null||n.call(e,t)},y=t=>()=>{e.show&&(r(t),e.beforeClose?(i[t]=!0,$(e.beforeClose,{args:[t],done(){b(t),i[t]=!1},canceled(){i[t]=!1}})):b(t))},B=y("cancel"),g=y("confirm"),x=q(t=>{var n,c;if(t.target!==((c=(n=u.value)==null?void 0:n.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?g:T,Escape:e.showCancelButton?B:T})[t.key](),r("keydown",t)},["enter","esc"]),D=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:a("header",{isolated:!e.message&&!l.default})},[t])},O=t=>{const{message:n,allowHtml:c,messageAlign:s}=e,d=a("message",{"has-title":t,[s]:s}),h=Q(n)?n():n;return c&&typeof h=="string"?o("div",{class:d,innerHTML:h},null):o("div",{class:d},[h])},E=()=>{if(l.default)return o("div",{class:a("content")},[l.default()]);const{title:t,message:n,allowHtml:c}=e;if(n){const s=!!(t||l.title);return o("div",{key:c?1:0,class:a("content",{isolated:!s})},[O(s)])}},A=()=>o("div",{class:[Y,a("footer")]},[e.showCancelButton&&o(v,{size:"large",text:e.cancelButtonText||f("cancel"),class:a("cancel"),style:{color:e.cancelButtonColor},loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(v,{size:"large",text:e.confirmButtonText||f("confirm"),class:[a("confirm"),{[X]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),N=()=>o(z,{class:a("footer")},{default:()=>[e.showCancelButton&&o(k,{type:"warning",text:e.cancelButtonText||f("cancel"),class:a("cancel"),color:e.cancelButtonColor,loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(k,{type:"danger",text:e.confirmButtonText||f("confirm"),class:a("confirm"),color:e.confirmButtonColor,loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),_=()=>l.footer?l.footer():e.theme==="round-button"?N():A();return()=>{const{width:t,title:n,theme:c,message:s,className:d}=e;return o(R,S({ref:u,role:"dialog",class:[a([c]),d],style:{width:J(t)},tabindex:0,"aria-labelledby":n||s,onKeydown:x,"onUpdate:show":C},G(e,ne)),{default:()=>[D(),E(),_()]})}}});let w;const le={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let ae=m({},le);function ce(){({instance:w}=K({setup(){const{state:r,toggle:l}=I();return()=>o(oe,S(r,{"onUpdate:show":l}),null)}}))}function se(e){return Z?new Promise((r,l)=>{w||ce(),w.open(m({},ae,e,{callback:u=>{(u==="confirm"?r:l)(u)}}))}):Promise.resolve()}const Be=e=>se(m({showCancelButton:!0},e));export{se as a,oe as b,Be as s};
