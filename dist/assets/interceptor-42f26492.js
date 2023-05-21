import{J as r,k as p}from"./index-30acc300.js";function e(l,{args:t=[],done:i,canceled:s}){if(l){const f=l.apply(null,t);r(f)?f.then(o=>{o?i():s&&s()}).catch(p):f?i():s&&s()}else i()}export{e as c};
