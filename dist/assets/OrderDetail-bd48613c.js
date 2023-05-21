import{_ as h}from"./CpNavBar-7cf3a7ed.js";import{d as O}from"./index-88ea42a3.js";import{d as $,c as a,q as S,f as e,a as r,b as x,e as o,t as c,w as p,F as D,y as d,g as v,h as N,j as T,_ as w}from"./index-1f5bf9e6.js";import{O as A}from"./OrderMedical-9e01af11.js";import{O as n}from"./index-750a2ba0.js";import{b as V,A as F,a as R}from"./index-d4771de6.js";import{c as j,e as E,n as q,f as G,b as K,d as Y,I as M,w as z}from"./index-30acc300.js";import{r as H,u as J}from"./use-route-e787040d.js";import{C as L}from"./index-5432fdfe.js";import{C as Q}from"./index-35da296c.js";import"./use-placeholder-d6a25d3e.js";import"./consult-8ddc6603.js";import"./request-2770c0b0.js";import"./interceptor-42f26492.js";import"./order-d77b653c.js";import"./index-e4f90eff.js";import"./index-f227a669.js";const[U,I]=j("action-bar-icon"),W=E({},H,{dot:Boolean,text:String,icon:String,color:String,badge:q,iconClass:G,badgeProps:Object,iconPrefix:String});var X=$({name:U,props:W,setup(k,{slots:u}){const t=J();K(V);const y=()=>{const{dot:l,badge:b,icon:g,color:s,iconClass:C,badgeProps:_,iconPrefix:i}=k;return u.icon?a(Y,S({dot:l,class:I("icon"),content:b},_),{default:u.icon}):a(M,{tag:"div",dot:l,name:g,badge:b,color:s,class:[I("icon"),C],badgeProps:_,classPrefix:i},null)};return()=>a("div",{role:"button",class:I(),tabindex:0,onClick:t},[y(),u.default?u.default():k.text])}});const Z=z(X),ee={key:0,class:"order-detail-page"},te={class:"order-head"},ae={class:"area"},oe={class:"detail"},ne={class:"logistics"},se={class:"order-detail"},re={class:"price"},ie=$({__name:"OrderDetail",setup(k){const u=T(),{order:t}=O(u.params.id);return(y,l)=>{var P;const b=h,g=M,s=L,C=Q,_=Z,i=F,m=R;return e(t)?(r(),x("div",ee,[a(b,{title:"药品订单-"+e(t).statusValue},null,8,["title"]),o("div",te,[e(t).status===e(n).MedicineCancel||e(t).status===e(n).MedicinePay||e(t).status===e(n).MedicineSend?(r(),x("div",{key:0,class:"address",onClick:l[0]||(l[0]=B=>{var f;return y.$router.push(`/order/logistics/${(f=e(t))==null?void 0:f.id}`)})},[o("p",ae,[a(g,{name:"location"}),o("span",null,c(e(t).addressInfo.province+e(t).addressInfo.city+e(t).addressInfo.county),1)]),o("p",oe,c(e(t).addressInfo.addressDetail),1),o("p",null,c(e(t).addressInfo.receiver)+" "+c(e(t).addressInfo.mobile.replace(/^(\d{3})\d+(\d{4})$/,"$1****$2")),1)])):(r(),x("div",{key:1,class:"card",onClick:l[1]||(l[1]=B=>{var f;return y.$router.push(`/order/logistics/${(f=e(t))==null?void 0:f.id}`)})},[o("div",ne,[o("p",null,c(e(t).expressInfo.content),1),o("p",null,c(e(t).expressInfo.time),1)]),a(g,{name:"arrow"})]))]),a(A,{medicines:(P=e(t))==null?void 0:P.medicines},null,8,["medicines"]),o("div",se,[a(C,null,{default:p(()=>[a(s,{title:"药品金额",value:`￥${e(t).payment}`},null,8,["value"]),a(s,{title:"运费",value:`￥${e(t).expressFee}`},null,8,["value"]),a(s,{title:"优惠券",value:`-￥${e(t).couponDeduction}`},null,8,["value"]),a(s,{title:"实付款",value:`￥${e(t).actualPayment}`,class:"price"},null,8,["value"]),a(s,{title:"订单编号",value:e(t).orderNo},null,8,["value"]),a(s,{title:"创建时间",value:e(t).createTime},null,8,["value"]),e(t).status===e(n).MedicineSend||e(t).status===e(n).MedicineTake||e(t).status===e(n).MedicineComplete?(r(),x(D,{key:0},[a(s,{title:"支付时间",value:e(t).payTime},null,8,["value"]),a(s,{title:"支付方式",value:e(t).paymentMethod===0?"微信":"支付宝"},null,8,["value"])],64)):d("",!0)]),_:1})]),e(t).status===e(n).MedicineCancel?(r(),v(m,{key:0},{default:p(()=>[a(_,{icon:"delete-o",text:"删除"}),a(i,{type:"primary",text:"沟通记录"})]),_:1})):d("",!0),e(t).status===e(n).MedicineTake?(r(),v(m,{key:1},{default:p(()=>[a(i,{type:"primary",text:"确认收货"})]),_:1})):d("",!0),e(t).status===e(n).MedicineSend?(r(),v(m,{key:2},{default:p(()=>[a(i,{type:"primary",text:"提醒发货"})]),_:1})):d("",!0),e(t).status===e(n).MedicinePay?(r(),v(m,{key:3},{default:p(()=>[o("p",re,[N(" 需要支付："),o("span",null,"￥ "+c(e(t).actualPayment),1)]),a(i,{color:"#bbb",text:"取消问诊"}),a(i,{type:"primary",text:"继续支付"})]),_:1})):d("",!0),e(t).status===e(n).MedicineComplete?(r(),v(m,{key:4},{default:p(()=>[a(_,{icon:"delete-o",text:"删除"}),a(i,{type:"primary",text:"再次购买"})]),_:1})):d("",!0)])):d("",!0)}}});const $e=w(ie,[["__scopeId","data-v-5a224914"]]);export{$e as default};