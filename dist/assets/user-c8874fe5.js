import{r as s}from"./request-2770c0b0.js";const n=(t,a)=>s("/login/password","POST",{mobile:t,password:a}),o=(t,a)=>s("/code","GET",{mobile:t,type:a}),i=(t,a)=>s("/login","POST",{mobile:t,code:a}),d=()=>s("/patient/myUser"),c=()=>s("/patient/mylist"),l=t=>s("/patient/add","POST",t),p=t=>s("/patient/update","PUT",t),r=t=>s(`/patient/del/${t}`,"DELETE");export{i as a,c as b,l as c,r as d,d as g,n as l,o as s,p as u};