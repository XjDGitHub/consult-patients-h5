import{k as n,l as c,m as u,n as i}from"./consult-8ddc6603.js";import{O as d,s as f}from"./index-750a2ba0.js";import{b as w}from"./order-d77b653c.js";import{b as l,s as o}from"./request-2770c0b0.js";import{r as t,v as y}from"./index-1f5bf9e6.js";const C=a=>{const e=t(!1);return{loading:e,follow:async r=>{e.value=!0;try{await u(r.id,a),r.likeFlag=r.likeFlag===1?0:1}finally{e.value=!1}}}},P=()=>({showPrescription:async e=>{if(e){const s=await i(e);f([s.data.url])}}}),F=()=>{const a=t(!1);return{loding:a,cancelConsultOrder:async s=>{try{a.value=!0,await n(s.id),s.status=d.ConsultCancel,s.statusValue="已取消",l("取消成功")}catch{o("取消失败")}finally{a.value=!1}}}},k=a=>{const e=t(!1);return{deleteLoading:e,deleteConsultOrder:async r=>{try{e.value=!0,await c(r.id),l("删除成功"),a&&a()}catch{o("删除失败")}finally{e.value=!1}}}},D=a=>{const e=t(!1),s=t();return y(async()=>{e.value=!0;try{const r=await w(a);s.value=r.data}finally{e.value=!1}}),{loding:e,order:s}};export{P as a,F as b,k as c,D as d,C as u};
