import{r as e}from"./request-2770c0b0.js";const a=t=>e("/patient/home/knowledge","GET",t),s=t=>e("/home/page/doc","GET",t),r=(t,o)=>e("/like","POST",{id:t,type:o}),l=()=>e("/dep/all","GET"),c=t=>{const o=new FormData;return o.append("file",t),e("/upload","POST",o)},i=t=>e("/patient/consult/order/pre","GET",t),d=t=>e(`/patient/info/${t}`,"GET"),p=t=>e("/patient/consult/order","POST",t),u=t=>e("/patient/consult/pay","POST",t),g=t=>e("/patient/consult/order/detail","GET",{orderId:t}),T=t=>e(`/patient/consult/prescription/${t}`,"GET"),O=t=>e("/patient/order/evaluate","POST",t),P=t=>e("/patient/consult/order/list","GET",t),E=t=>e(`/patient/order/cancel/${t}`,"PUT"),G=t=>e(`/patient/order/${t}`,"DELETE");export{s as a,l as b,i as c,d,p as e,O as f,a as g,g as h,P as i,u as j,E as k,G as l,r as m,T as n,c as u};