import{S as t,i as s,s as e,e as l,t as n,b as o,f as r,g as a,d as h,h as c,j as f,k as i,l as u,a as p,q as g,c as d,n as m,m as v}from"./client.5ebe904c.js";function b(t,s,e){const l=t.slice();return l[1]=s[e],l}function E(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=n(d),this.h()},l(t){s=o(t,"LI",{});var l=r(s);e=o(l,"A",{rel:!0,href:!0});var n=r(e);p=a(n,d),n.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,k,x=t[0],q=[];for(let s=0;s<x.length;s+=1)q[s]=E(b(t,x,s));return{c(){s=p(),e=l("h1"),u=n("Recent posts"),j=p(),k=l("ul");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=o(t,"H1",{});var l=r(e);u=a(l,"Recent posts"),l.forEach(h),j=d(t),k=o(t,"UL",{class:!0});var n=r(k);for(let t=0;t<q.length;t+=1)q[t].l(n);n.forEach(h),this.h()},h(){document.title="Blog",c(k,"class","svelte-dkckuz")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,k,l);for(let t=0;t<q.length;t+=1)q[t].m(k,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=b(t,x,e);q[e]?q[e].p(l,s):(q[e]=E(l),q[e].c(),q[e].m(k,null))}for(;e<q.length;e+=1)q[e].d(1);q.length=x.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(k),v(q,t)}}}function k({params:t,query:s}){return this.fetch("/static/blog.json").then((t=>t.json())).then((t=>({posts:t})))}function x(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,x,j,e,{posts:0})}}export{k as preload};
