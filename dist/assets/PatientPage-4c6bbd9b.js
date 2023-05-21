import{C as W}from"./CpRadioBtn-a6241701.js";import{_ as S}from"./CpNavBar-7cf3a7ed.js";import{_ as X}from"./CpIcon-ef85b36d.js";import{b as Y,u as Z,c as ee,d as ae}from"./user-c8874fe5.js";import{F as te,n as oe,i as ne}from"./rules-5b422eb0.js";import{d as se,m as $,r as p,z as le,v as ie,a as l,b as i,c as o,f as _,y as f,e as s,F as ue,x as de,w as u,h as I,A as re,g as ce,j as pe,i as _e,n as me,t as k,p as ve,k as fe,_ as ge}from"./index-1f5bf9e6.js";import{A as he,a as Ce}from"./index-d4771de6.js";import{a as ke,b as F,P as be}from"./request-2770c0b0.js";import{s as N}from"./function-call-6cb5de99.js";import{B as we}from"./index-f227a669.js";import{F as ye}from"./index-ed65eb93.js";import{C as Pe}from"./index-09f3a16d.js";import"./use-placeholder-d6a25d3e.js";import"./index-30acc300.js";import"./use-route-e787040d.js";import"./interceptor-42f26492.js";import"./index-5432fdfe.js";import"./use-id-657f33f2.js";const b=g=>(ve("data-v-57d705a9"),g=g(),fe(),g),Ve={class:"patient-page"},Fe={key:0,class:"patient-change"},xe=b(()=>s("h3",null,"请选择患者信息",-1)),Be=b(()=>s("p",null,"以便医生给出更准确的治疗，信息仅医生可见",-1)),Re=[xe,Be],Se={class:"patient-list"},$e=["onClick"],Ie={class:"info"},Ne={class:"name"},Ue={class:"id"},Ae={class:"icon"},Te={key:0,class:"tag"},ze=b(()=>s("p",null,"添加患者",-1)),Le=b(()=>s("div",{class:"patient-tip"},"最多可添加 6 人",-1)),De={key:1,class:"patient-next"},je=se({__name:"PatientPage",setup(g){const U=pe(),m=$(()=>U.query.isChange==="1"),d=p(),A=n=>{m.value&&(d.value=n.id)},T=_e(),z=le(),L=()=>{if(!d.value)return ke("请选就诊择患者");z.setPatient(d.value),T.push("/consult/pay")},r=p([]),w=async()=>{const n=await Y();if(r.value=n.data,m.value&&r.value.length){const a=r.value.find(v=>v.defaultFlag===1);a?d.value=a.id:d.value=r.value[0].id}},D=[{label:"男",value:1},{label:"女",value:0}];p(0);const c=p(!1),x=n=>{if(n){console.log(n);const{id:a,idCard:v,name:h,gender:P,defaultFlag:V}=n;e.value={id:a,idCard:v,name:h,gender:P,defaultFlag:V}}else e.value={...B};c.value=!0},B={name:"",idCard:"",gender:1,defaultFlag:0},e=p({...B}),y=$({get(){return e.value.defaultFlag===1},set(n){e.value.defaultFlag=n?1:0}}),R=p(),j=async()=>{var a;await((a=R.value)==null?void 0:a.validate()),+e.value.idCard.slice(-2,-1)%2!==+e.value.gender&&await N({title:"温馨提示",message:`填写的性别和身份证号中的不一致
您确认提交吗？`}),e.value.id?await Z(e.value):await ee(e.value),c.value=!1,w(),e.value.id?F("编辑成功"):F("添加成功")},q=async()=>{e.value.id&&(await N({title:"温馨提示",message:`您确认要删除 ${e.value.name} 患者信息吗 ？`}),await ae(e.value.id),c.value=!1,w(),F("删除成功"))};return ie(()=>{w()}),(n,a)=>{const v=S,h=X,P=we,V=S,C=ye,E=W,M=Pe,G=te,H=he,J=Ce,K=be;return l(),i("div",Ve,[o(v,{title:_(m)?"选择患者":"家庭档案"},null,8,["title"]),_(m)?(l(),i("div",Fe,Re)):f("",!0),s("div",Se,[(l(!0),i(ue,null,de(r.value,(t,O)=>(l(),i("div",{class:me(["patient-item",{selected:d.value===t.id}]),key:O,onClick:Q=>A(t)},[s("div",Ie,[s("span",Ne,k(t.name),1),s("span",Ue,k(t.idCard.replace(/^(.{6}).+(.{4})$/,"$1********$2")),1),s("span",null,k(t.genderValue),1),s("span",null,k(t.age)+"岁",1)]),s("div",Ae,[o(h,{name:"user-edit",onClick:Q=>x(t)},null,8,["onClick"])]),t.defaultFlag===1?(l(),i("div",Te,"默认")):f("",!0)],10,$e))),128)),r.value.length<6?(l(),i("div",{key:0,class:"patient-add",onClick:a[0]||(a[0]=t=>x())},[o(h,{name:"user-add"}),ze])):f("",!0),Le,_(m)?(l(),i("div",De,[o(P,{type:"primary",onClick:L,round:"",block:""},{default:u(()=>[I("下一步")]),_:1})])):f("",!0)]),o(K,{show:c.value,"onUpdate:show":a[5]||(a[5]=t=>c.value=t),position:"right"},{default:u(()=>[o(V,{title:e.value.id?"编辑患者":"添加患者",back:()=>c.value=!1,rightText:"保存",onClickRight:j},null,8,["title","back"]),o(G,{autocomplete:"off",ref_key:"form",ref:R},{default:u(()=>[o(C,{rules:_(oe),modelValue:e.value.name,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.name=t),label:"真实姓名",placeholder:"请输入真实姓名"},null,8,["rules","modelValue"]),o(C,{rules:_(ne),modelValue:e.value.idCard,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.idCard=t),label:"身份证号",placeholder:"请输入身份证号"},null,8,["rules","modelValue"]),o(C,{label:"性别",class:"pb4"},{input:u(()=>[o(E,{options:D,modelValue:e.value.gender,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.gender=t)},null,8,["modelValue"])]),_:1}),o(C,{label:"默认就诊人"},{input:u(()=>[o(M,{modelValue:_(y),"onUpdate:modelValue":a[4]||(a[4]=t=>re(y)?y.value=t:null),"icon-size":18,round:""},null,8,["modelValue"])]),_:1})]),_:1},512),e.value.id?(l(),ce(J,{key:0},{default:u(()=>[o(H,{onClick:q},{default:u(()=>[I("删除")]),_:1})]),_:1})):f("",!0)]),_:1},8,["show"])])}}});const sa=ge(je,[["__scopeId","data-v-57d705a9"]]);export{sa as default};