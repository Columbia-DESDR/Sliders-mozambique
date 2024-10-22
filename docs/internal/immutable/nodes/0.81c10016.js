import{S as Y,i as Z,s as ee,e as v,c as b,b as $,d as i,h as m,k as g,l as d,n as y,J as te,t as T,g as w,q as le,a as A,K as ae,f as V,u as se,v as L,w as P,p as ne,L as re,y as N,z as B,A as H,M as oe,N as ie,O as ce,B as W}from"../chunks/index.ff7e3b01.js";import{_ as O}from"../chunks/preload-helper.a4192956.js";import{b as Q}from"../chunks/paths.8c27b622.js";import{H as ue,S as fe}from"../chunks/Header.f8159939.js";import{a as _e}from"../chunks/database.135d7550.js";const me=!0,de=!1,Oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:me,ssr:de},Symbol.toStringTag,{value:"Module"}));function U(c,e,n){const t=c.slice();return t[3]=e[n].title,t[4]=e[n].link,t[6]=n,t}function X(c){let e,n=c[3]+"",t;return{c(){e=v("a"),t=T(n),this.h()},l(r){e=b(r,"A",{class:!0,href:!0});var o=$(e);t=w(o,n),o.forEach(i),this.h()},h(){m(e,"class","px-2 py-1 mr-1 border-solid border-2 border-slate-500 rounded inline-block text-slate hover:text-slate-800 hover:font-bold"),m(e,"href",c[4])},m(r,o){g(r,e,o),d(e,t)},p:y,d(r){r&&i(e)}}}function he(c){let e,n,t,r,o=c[0],a=[];for(let l=0;l<o.length;l+=1)a[l]=X(U(c,o,l));return{c(){e=v("div"),n=v("nav"),t=v("div"),r=v("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var f=$(e);n=b(f,"NAV",{class:!0});var u=$(n);t=b(u,"DIV",{class:!0});var h=$(t);r=b(h,"DIV",{class:!0});var I=$(r);for(let E=0;E<a.length;E+=1)a[E].l(I);I.forEach(i),h.forEach(i),u.forEach(i),f.forEach(i),this.h()},h(){m(r,"class","flex flex-wrap items-center justify-center space-x-4"),m(t,"class","text-center"),m(n,"class","flex justify-center items-center"),m(e,"class","grid place-items-center")},m(l,f){g(l,e,f),d(e,n),d(n,t),d(t,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null)},p(l,[f]){if(f&1){o=l[0];let u;for(u=0;u<o.length;u+=1){const h=U(l,o,u);a[u]?a[u].p(h,f):(a[u]=X(h),a[u].c(),a[u].m(r,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},i:y,o:y,d(l){l&&i(e),te(a,l)}}}function pe(c){const e=Object.assign({"../routes/+layout.svelte":()=>O(()=>Promise.resolve().then(()=>Ie),void 0,import.meta.url),"../routes/+page.svelte":()=>O(()=>import("../chunks/_page.559994f4.js"),["../chunks/_page.559994f4.js","../chunks/index.ff7e3b01.js","../chunks/config.19616c6e.js","../chunks/index.e7ce1f94.js","../chunks/paths.8c27b622.js","../chunks/http_client.072ad181.js","../assets/http_client.b678f2d9.css","../chunks/Header.f8159939.js","../assets/Spinner.828e47de.css","../assets/config.b097d646.css","../chunks/model_out.2e53c411.js"],import.meta.url),"../routes/config/+page.svelte":()=>O(()=>import("../chunks/_page.908d9456.js"),["../chunks/_page.908d9456.js","../chunks/index.ff7e3b01.js","../chunks/config.19616c6e.js","../chunks/index.e7ce1f94.js","../chunks/paths.8c27b622.js","../chunks/http_client.072ad181.js","../assets/http_client.b678f2d9.css","../chunks/Header.f8159939.js","../assets/Spinner.828e47de.css","../assets/config.b097d646.css","../chunks/model_out.2e53c411.js"],import.meta.url),"../routes/dashboard-new-framework/+page.svelte":()=>O(()=>import("../chunks/_page.5e7e06e9.js"),["../chunks/_page.5e7e06e9.js","../chunks/index.ff7e3b01.js","../chunks/index.e7ce1f94.js","../chunks/paths.8c27b622.js","../chunks/http_client.072ad181.js","../assets/http_client.b678f2d9.css","../chunks/database.135d7550.js","../chunks/model_out.2e53c411.js","../chunks/params.47941289.js"],import.meta.url),"../routes/debug/+page.svelte":()=>O(()=>import("../chunks/_page.ab7fe7d5.js"),["../chunks/_page.ab7fe7d5.js","../chunks/index.ff7e3b01.js","../chunks/index.e7ce1f94.js","../chunks/paths.8c27b622.js","../chunks/database.135d7550.js","../chunks/model_out.2e53c411.js","../chunks/params.47941289.js","../assets/_page.a59c1c48.css","../assets/Spinner.828e47de.css"],import.meta.url)});let n=[];console.log("BASE!!",Q);for(let t in e){if(t.includes("layout"))continue;let r=t.replace(".svelte","").replace("./","/").replace("/+page","").replace("./routes","");r!=""&&n.push({title:r.substring(r.lastIndexOf("/")+1),link:r.includes("index")?r.replace("index",""):Q.concat(r)})}return console.log("routes for nav...",n,n.length),[n]}class ve extends Y{constructor(e){super(),Z(this,e,pe,he,ee,{})}}function be(c){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function $e(c){let e,n,t=c[3]+"",r,o,a,l,f,u,h,I,E,R,S,k,C,x,M,q,D;f=new ue({props:{country:"Mozambique"}}),h=new ve({});const F=c[2].default,p=re(F,c,c[1],null);return{c(){e=v("div"),n=T("Time to initialize database is "),r=T(t),o=T(" milliseconds."),a=A(),l=v("div"),N(f.$$.fragment),u=A(),N(h.$$.fragment),I=A(),E=v("main"),p&&p.c(),R=A(),S=v("footer"),k=v("p"),C=T("This website is created by the "),x=v("a"),M=T("WuLab"),q=T(`
                with the Financial Instruments Sector Team (FIST) of the International
                Research Institute for Climate and Society at the Columbia Climate
                School.`),this.h()},l(s){e=b(s,"DIV",{class:!0});var _=$(e);n=w(_,"Time to initialize database is "),r=w(_,t),o=w(_," milliseconds."),_.forEach(i),a=V(s),l=b(s,"DIV",{class:!0});var j=$(l);B(f.$$.fragment,j),u=V(j),B(h.$$.fragment,j),j.forEach(i),I=V(s),E=b(s,"MAIN",{});var G=$(E);p&&p.l(G),G.forEach(i),R=V(s),S=b(s,"FOOTER",{class:!0});var J=$(S);k=b(J,"P",{class:!0});var z=$(k);C=w(z,"This website is created by the "),x=b(z,"A",{href:!0,class:!0});var K=$(x);M=w(K,"WuLab"),K.forEach(i),q=w(z,`
                with the Financial Instruments Sector Team (FIST) of the International
                Research Institute for Climate and Society at the Columbia Climate
                School.`),z.forEach(i),J.forEach(i),this.h()},h(){m(e,"class","text-xs"),m(l,"class","flex flex-row items-center justify-between"),m(x,"href","https://cudbg.github.io/lab/"),m(x,"class","svelte-r3qhfe"),m(k,"class","svelte-r3qhfe"),m(S,"class","text-center px-4 py-2 svelte-r3qhfe")},m(s,_){g(s,e,_),d(e,n),d(e,r),d(e,o),g(s,a,_),g(s,l,_),H(f,l,null),d(l,u),H(h,l,null),g(s,I,_),g(s,E,_),p&&p.m(E,null),g(s,R,_),g(s,S,_),d(S,k),d(k,C),d(k,x),d(x,M),d(k,q),D=!0},p(s,_){p&&p.p&&(!D||_&2)&&oe(p,F,s,s[1],D?ce(F,s[1],_,null):ie(s[1]),null)},i(s){D||(L(f.$$.fragment,s),L(h.$$.fragment,s),L(p,s),D=!0)},o(s){P(f.$$.fragment,s),P(h.$$.fragment,s),P(p,s),D=!1},d(s){s&&i(e),s&&i(a),s&&i(l),W(f),W(h),s&&i(I),s&&i(E),p&&p.d(s),s&&i(R),s&&i(S)}}}function ge(c){let e,n;return e=new fe({}),{c(){N(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){H(e,t,r),n=!0},p:y,i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function ye(c){let e,n,t,r,o={ctx:c,current:null,token:null,hasCatch:!1,pending:ge,then:$e,catch:be,value:3,blocks:[,,,]};return le(c[0],o),{c(){e=v("meta"),n=A(),t=v("div"),o.block.c(),this.h()},l(a){const l=ae("svelte-1nv18rm",document.head);e=b(l,"META",{name:!0,content:!0}),l.forEach(i),n=V(a),t=b(a,"DIV",{class:!0});var f=$(t);o.block.l(f),f.forEach(i),this.h()},h(){document.title="DESDR: Mozambique",m(e,"name","description"),m(e,"content","DESDR Ethiopia"),m(t,"class","container px-10 py-5 mx-auto md-auto")},m(a,l){d(document.head,e),g(a,n,l),g(a,t,l),o.block.m(t,o.anchor=null),o.mount=()=>t,o.anchor=null,r=!0},p(a,[l]){c=a,se(o,c,l)},i(a){r||(L(o.block),r=!0)},o(a){for(let l=0;l<3;l+=1){const f=o.blocks[l];P(f)}r=!1},d(a){i(e),a&&i(n),a&&i(t),o.block.d(),o.token=null,o=null}}}function Ee(c,e,n){let{$$slots:t={},$$scope:r}=e,o=_e();return ne(async()=>{await o}),c.$$set=a=>{"$$scope"in a&&n(1,r=a.$$scope)},[o,r,t]}class ke extends Y{constructor(e){super(),Z(this,e,Ee,ye,ee,{})}}const Ie=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{ke as component,Oe as universal};
