import{S as u,i as f,s as m,e as p,c as _,b as x,d as c,h as o,k as v,n as r,t as l,g as d,l as h,C as y}from"./index.ff7e3b01.js";/* empty css                                              */function D(n){let t;return{c(){t=p("div"),this.h()},l(e){t=_(e,"DIV",{id:!0,class:!0}),x(t).forEach(c),this.h()},h(){o(t,"id","loading"),o(t,"class","svelte-1e2b3ig")},m(e,a){v(e,t,a)},p:r,i:r,o:r,d(e){e&&c(t)}}}class C extends u{constructor(t){super(),f(this,t,null,D,m,{})}}function S(n){let t,e,a;return{c(){t=p("div"),e=l("DESDR: "),a=l(n[0]),this.h()},l(s){t=_(s,"DIV",{class:!0});var i=x(t);e=d(i,"DESDR: "),a=d(i,n[0]),i.forEach(c),this.h()},h(){o(t,"class","text-center py-5 px-2 text-4xl font-bold")},m(s,i){v(s,t,i),h(t,e),h(t,a)},p(s,[i]){i&1&&y(a,s[0])},i:r,o:r,d(s){s&&c(t)}}}function g(n,t,e){let{country:a}=t;return n.$$set=s=>{"country"in s&&e(0,a=s.country)},[a]}class H extends u{constructor(t){super(),f(this,t,g,S,m,{country:0})}}export{H,C as S};