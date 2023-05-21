import{_ as L}from"./CpPaySheet-dc9b8950.js";import{_ as M}from"./ConsultMore.vue_vue_type_script_setup_true_lang-a8bd8fff.js";import{_ as U}from"./CpNavBar-7cf3a7ed.js";import{_ as W}from"./avatar-doctor-206a2b5c.js";import{h as q}from"./consult-8ddc6603.js";import{d as A,r as S,v as H,a as i,b as d,c as e,e as o,t as m,n as J,f as a,w as l,h as s,y as p,g as h,j as K,i as Q,p as X,k as Y,_ as Z}from"./index-1f5bf9e6.js";import{O as c}from"./index-750a2ba0.js";import{C as tt,g as et,a as at}from"./filiter-36d750b9.js";import{b as ot,c as lt,a as st}from"./index-88ea42a3.js";import{a as nt}from"./index-ec5414d3.js";import{S as ut}from"./index-079ddc50.js";import{s as it,b as rt}from"./request-2770c0b0.js";import{I as dt}from"./index-30acc300.js";import{C as ct}from"./index-5432fdfe.js";import{C as pt}from"./index-35da296c.js";import{B as _t}from"./index-f227a669.js";import"./CpIcon-ef85b36d.js";import"./index-09f3a16d.js";import"./use-placeholder-d6a25d3e.js";import"./index-e4f90eff.js";import"./interceptor-42f26492.js";import"./order-d77b653c.js";import"./use-route-e787040d.js";const f=y=>(X("data-v-dd262975"),y=y(),Y(),y),vt={key:0,class:"consult-detail-page"},mt={class:"detail-head"},ft={class:"text"},yt=f(()=>o("p",{class:"tip"},"服务医生信息",-1)),Ct={class:"card"},ht=f(()=>o("img",{class:"avatar",src:W,alt:""},null,-1)),gt={class:"doc"},kt=f(()=>o("span",null,"极速问诊",-1)),wt={class:"detail-patient"},It={class:"detail-order"},$t=f(()=>o("h3",null,"订单信息",-1)),bt={key:0,class:"detail-time"},xt={key:1,class:"detail-action van-hairline--top"},Dt={class:"price"},St=f(()=>o("span",null,"需付款",-1)),Pt={key:2,class:"detail-action van-hairline--top"},Tt={key:3,class:"detail-action van-hairline--top"},Ot={key:4,class:"detail-action van-hairline--top"},Bt={key:5,class:"detail-action van-hairline--top"},Nt={key:1,class:"consult-detail-page"},Vt=A({__name:"ConsultDetail",setup(y){const P=K(),T=Q(),t=S();H(async()=>{const v=await q(P.params.id);t.value=v.data});const{loding:g,cancelConsultOrder:k}=ot(),{showPrescription:O}=st(),{deleteLoading:B,deleteConsultOrder:N}=lt(()=>{T.push("/user/consult")}),{copy:V,isSupported:F}=nt(),R=async()=>{var v;if(!F.value)return it("未授权，不支持");await V(((v=t.value)==null?void 0:v.orderNo)||""),rt("已复制")},C=S(!1);return(v,n)=>{var b,x;const w=U,j=dt,r=ct,I=pt,z=tt,u=_t,E=M,G=L,$=ut;return t.value?(i(),d("div",vt,[e(w,{title:"问诊详情"}),o("div",mt,[o("div",ft,[o("h3",null,"图文问诊 "+m(t.value.payment)+" 元",1),o("span",{class:J(["sta",{orange:t.value.status===a(c).ConsultPay,green:t.value.status===a(c).ConsultChat}])},m(t.value.statusValue),3),yt]),o("div",Ct,[ht,o("p",gt,[kt,o("span",null,m((b=t.value.docInfo)==null?void 0:b.name),1)]),e(j,{name:"arrow"})])]),o("div",wt,[e(I,{border:!1},{default:l(()=>[e(r,{title:"患者信息",value:`${t.value.patientInfo.name} | ${t.value.patientInfo.genderValue} | ${t.value.patientInfo.age}岁`},null,8,["value"]),e(r,{title:"患病时长",value:a(et)(t.value.illnessTime)},null,8,["value"]),e(r,{title:"就诊情况",value:a(at)(t.value.consultFlag)},null,8,["value"]),e(r,{title:"病情描述",label:t.value.illnessDesc},null,8,["label"])]),_:1})]),o("div",It,[$t,e(I,{border:!1},{default:l(()=>[e(r,{title:"订单编号"},{value:l(()=>[o("span",{class:"copy",onClick:R},"复制"),s(" "+m(t.value.orderNo),1)]),_:1}),e(r,{title:"创建时间",value:t.value.createTime},null,8,["value"]),e(r,{title:"应付款",value:`￥${t.value.payment}`},null,8,["value"]),e(r,{title:"优惠券",value:`-￥${t.value.couponDeduction}`},null,8,["value"]),e(r,{title:"积分抵扣",value:`-￥${t.value.pointDeduction}`},null,8,["value"]),e(r,{title:"实付款",value:`￥${t.value.actualPayment}`,class:"price"},null,8,["value"])]),_:1})]),t.value.status===a(c).ConsultPay?(i(),d("div",bt,[s(" 请在 "),e(z,{time:t.value.countdown*1e3},null,8,["time"]),s(" 内完成支付，超时订单将取消 ")])):p("",!0),t.value.status===a(c).ConsultPay?(i(),d("div",xt,[o("div",Dt,[St,o("span",null,"￥"+m(t.value.actualPayment),1)]),e(u,{type:"default",round:"",loading:a(g),onClick:n[0]||(n[0]=_=>a(k)(t.value))},{default:l(()=>[s("取消问诊")]),_:1},8,["loading"]),e(u,{type:"primary",round:"",onClick:n[1]||(n[1]=_=>C.value=!0)},{default:l(()=>[s("继续支付")]),_:1})])):p("",!0),t.value.status===a(c).ConsultWait?(i(),d("div",Pt,[e(u,{type:"default",round:"",loading:a(g),onClick:n[2]||(n[2]=_=>a(k)(t.value))},{default:l(()=>[s("取消问诊")]),_:1},8,["loading"]),e(u,{type:"primary",round:"",to:`/room?orderId=${t.value.id}`},{default:l(()=>[s(" 继续沟通 ")]),_:1},8,["to"])])):p("",!0),t.value.status===a(c).ConsultChat?(i(),d("div",Tt,[t.value.prescriptionId?(i(),h(u,{key:0,type:"default",round:"",onClick:n[3]||(n[3]=_=>{var D;return a(O)((D=t.value)==null?void 0:D.prescriptionId)})},{default:l(()=>[s(" 查看处方 ")]),_:1})):p("",!0),e(u,{type:"primary",round:"",to:`/room?orderId=${t.value.id}`},{default:l(()=>[s(" 继续沟通 ")]),_:1},8,["to"])])):p("",!0),t.value.status===a(c).ConsultComplete?(i(),d("div",Ot,[e(E),e(u,{type:"default",round:"",to:`/room?orderId=${t.value.id}`},{default:l(()=>[s(" 问诊记录 ")]),_:1},8,["to"]),t.value.evaluateId?(i(),h(u,{key:0,type:"default",round:""},{default:l(()=>[s(" 查看评价 ")]),_:1})):(i(),h(u,{key:1,type:"primary",round:""},{default:l(()=>[s(" 写评价 ")]),_:1}))])):p("",!0),t.value.status===a(c).ConsultCancel?(i(),d("div",Bt,[e(u,{type:"default",round:"",loading:a(B),onClick:n[4]||(n[4]=_=>a(N)(t.value))},{default:l(()=>[s("删除订单")]),_:1},8,["loading"]),e(u,{type:"primary",round:"",to:"/"},{default:l(()=>[s("咨询其他医生")]),_:1})])):p("",!0),e(G,{show:C.value,"onUpdate:show":n[5]||(n[5]=_=>C.value=_),"order-id":t.value.id,"actual-payment":(x=t.value)==null?void 0:x.actualPayment,"pay-callback":"http://localhost:5173"},null,8,["show","order-id","actual-payment"])])):(i(),d("div",Nt,[e(w,{title:"问诊详情"}),e($,{title:"",row:4,style:{"margin-top":"30px"}}),e($,{title:"",row:4,style:{"margin-top":"30px"}})]))}}});const le=Z(Vt,[["__scopeId","data-v-dd262975"]]);export{le as default};
