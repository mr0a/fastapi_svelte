import{S as t,i as s,s as e,a,e as n,t as o,q as i,d as r,c,b as l,f as u,g as h,h as d,j as f,k as p,l as m,n as g}from"./client.18ed1e8c.js";function v(t){let s,e,v,j,x,y,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){e=a(),v=n("h1"),j=o(E),x=a(),y=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),e=c(t),v=l(t,"H1",{});var s=u(v);j=h(s,E),s.forEach(r),x=c(t),y=l(t,"DIV",{class:!0}),u(y).forEach(r),this.h()},h(){d(y,"class","content svelte-9n1rgi")},m(t,s){f(t,e,s),f(t,v,s),p(v,j),f(t,x,s),f(t,y,s),y.innerHTML=H},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&E!==(E=t[0].title+"")&&m(j,E),1&e&&H!==(H=t[0].html+"")&&(y.innerHTML=H)},i:g,o:g,d(t){t&&r(e),t&&r(v),t&&r(x),t&&r(y)}}}async function j({params:t,query:s}){const e=await this.fetch(`blog/${t.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function x(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,x,v,e,{post:0})}}export{j as preload};
