import{_ as k}from"./CpPaySheet-dc9b8950.js";import{_ as B}from"./CpNavBar-7cf3a7ed.js";import{_ as S}from"./avatar-doctor-206a2b5c.js";import{c as T,d as V,e as $}from"./consult-8ddc6603.js";import{d as N,z as O,r as l,B as K,v as U,C as g,a as z,b as E,c as e,e as a,t as F,w as y,f as G,h as L,y as M,p as R,k as j,_ as q}from"./index-1f5bf9e6.js";import{a as A,s as H}from"./function-call-6cb5de99.js";import"./index-1b559412.js";import{S as J}from"./index-39807dd2.js";import{a as Q}from"./request-2770c0b0.js";import{C as W}from"./index-5432fdfe.js";import{C as X}from"./index-35da296c.js";import{C as Y}from"./index-09f3a16d.js";import"./CpIcon-ef85b36d.js";import"./index-30acc300.js";import"./index-f227a669.js";import"./use-route-e787040d.js";import"./use-placeholder-d6a25d3e.js";import"./index-d4771de6.js";import"./interceptor-42f26492.js";const p=r=>(R("data-v-8109e807"),r=r(),j(),r),Z={key:0,class:"consult-pay-page"},ee={class:"pay-info"},te={class:"tit"},ae=p(()=>a("img",{class:"img",src:S},null,-1)),oe=p(()=>a("p",{class:"desc"},[a("span",null,"极速问诊"),a("span",null,"自动分配医生")],-1)),se=p(()=>a("div",{class:"pay-space"},null,-1)),le={class:"pay-schema"},ne=p(()=>a("span",{class:"text"},"支付协议",-1)),ue=N({__name:"ConsultPay",setup(r){const o=O(),s=l(),C=async()=>{const t=await T({type:o.consult.type,illnessType:o.consult.illnessType});console.log(t),s.value=t.data},n=l(),b=async()=>{if(!o.consult.patientId)return;const t=await V(o.consult.patientId);console.log(t),n.value=t.data},_=l(!1),d=l(!1);l();const i=l(""),m=l(!1),w=async()=>{if(!_.value)return Q("请勾选我已同意支付协议");m.value=!0;const t=await $(o.consult);i.value=t.data.id,m.value=!1,o.clear(),d.value=!0},x=async()=>H({title:"关闭支付",message:"取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？",cancelButtonText:"仍要关闭",confirmButtonText:"继续支付"}).then(()=>!1).catch(()=>(i.value="",g.push("/user/consult"),!0));return K(()=>{if(i.value)return!1}),U(()=>{if(!["type","illnessType","depId","illnessDesc","illnessTime","consultFlag","patientId"].every(v=>o.consult[v]!==void 0))return A({title:"温馨提示",message:"问诊信息不完整请重新填写，如有未支付的问诊订单可在问诊记录中继续支付！",closeOnPopstate:!1}).then(()=>{g.push("/")});C(),b()}),(t,u)=>{const v=B,c=W,h=X,P=Y,I=J,D=k;return s.value&&n.value?(z(),E("div",Z,[e(v,{title:"支付"}),a("div",ee,[a("p",te,"图文问诊 "+F(s.value.payment)+" 元",1),ae,oe]),e(h,null,{default:y(()=>[e(c,{title:"优惠券",value:`-¥${s.value.couponDeduction}`},null,8,["value"]),e(c,{title:"积分抵扣",value:`-¥${s.value.pointDeduction}`},null,8,["value"]),e(c,{title:"实付款",value:`¥${s.value.actualPayment}`,class:"pay-price"},null,8,["value"])]),_:1}),se,e(h,null,{default:y(()=>[e(c,{title:"患者信息",value:`${n.value.name} | ${n.value.genderValue} | ${n.value.age}岁`},null,8,["value"]),e(c,{title:"病情描述",label:G(o).consult.illnessDesc},null,8,["label"])]),_:1}),a("div",le,[e(P,{modelValue:_.value,"onUpdate:modelValue":u[0]||(u[0]=f=>_.value=f)},{default:y(()=>[L("我已同意 "),ne]),_:1},8,["modelValue"])]),e(I,{"button-type":"primary",price:s.value.actualPayment*100,"button-text":"立即支付","text-align":"left",onClick:w,loading:m.value},null,8,["price","loading"]),e(D,{show:d.value,"onUpdate:show":u[1]||(u[1]=f=>d.value=f),"order-id":i.value,"actual-payment":s.value.actualPayment,"on-colse":x,"pay-callback":"/room"},null,8,["show","order-id","actual-payment"])])):M("",!0)}}});const ke=q(ue,[["__scopeId","data-v-8109e807"]]);export{ke as default};
