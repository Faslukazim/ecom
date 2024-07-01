var b=(c,o,r)=>new Promise((t,e)=>{var s=a=>{try{u(r.next(a))}catch(p){e(p)}},n=a=>{try{u(r.throw(a))}catch(p){e(p)}},u=a=>a.done?t(a.value):Promise.resolve(a.value).then(s,n);u((r=r.apply(c,o)).next())});import{c as L,r as I,a as D,b as N,d as j,u as q,i as V,e as A,f as x,o as g,g as h,h as m,j as i,w as v,k as l,_ as U,l as P,t as k,m as F,F as C,n as T,p as B,q as O,D as z,s as H,v as J,x as W,y as G,C as K,I as Y,z as M}from"./vendor.d2b082e7.js";const Q=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};Q();const X="modulepreload",R={},Z="/assets/starecom/frontend-starecom/",y=function(o,r){return!r||r.length===0?o():Promise.all(r.map(t=>{if(t=`${Z}${t}`,t in R)return;R[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":X,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((u,a)=>{n.addEventListener("load",u),n.addEventListener("error",a)})})).then(()=>o())},w=L({url:"frappe.auth.get_logged_user",cache:"User",onError(c){c&&c.exc_type==="AuthenticationError"&&_.push({name:"LoginPage"})}});function E(){let o=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return o==="Guest"&&(o=null),o}const f=I({login:L({url:"login",makeParams({email:c,password:o}){return{usr:c,pwd:o}},onSuccess(c){w.reload(),f.user=E(),f.login.reset(),_.replace(c.default_route||"/")}}),logout:L({url:"logout",onSuccess(){w.reset(),f.user=E(),_.replace({name:"Login"})}}),user:E(),isLoggedIn:D(()=>!!f.user)}),ee=[{path:"/",name:"Home",redirect:{name:"ProductsListPage"}},{path:"/products",name:"ProductsListPage",component:()=>y(()=>import("./Products.23a6e4d6.js"),["assets/Products.23a6e4d6.js","assets/vendor.d2b082e7.js","assets/vendor.f874cace.css","assets/utils.e172e694.js"])},{path:"/products/:name",name:"ProductDetailsPage",component:()=>y(()=>import("./ProductDetails.67643a5f.js"),["assets/ProductDetails.67643a5f.js","assets/vendor.d2b082e7.js","assets/vendor.f874cace.css","assets/utils.e172e694.js","assets/index.8baf7187.js","assets/index.b1290c36.css"])},{name:"Login",path:"/account/login",component:()=>y(()=>import("./Login.834605c8.js"),["assets/Login.834605c8.js","assets/vendor.d2b082e7.js","assets/vendor.f874cace.css"])},{name:"CheckoutPage",path:"/checkout",component:()=>y(()=>import("./Checkout.af849127.js"),["assets/Checkout.af849127.js","assets/vendor.d2b082e7.js","assets/vendor.f874cace.css","assets/index.8baf7187.js","assets/index.b1290c36.css"]),meta:{requiresLogin:!0}}];let _=N({history:j("/frontend-starecom"),routes:ee});_.beforeEach((c,o,r)=>b(void 0,null,function*(){let t=f.isLoggedIn;try{yield w.promise}catch(e){t=!1}c.name==="Login"&&t?r({name:"Home"}):c.name!=="Login"&&!t?r({name:"Login"}):r()}));const te={class:"fixed top-0 bg-white-overlay-900 z-50 p-4 items-center w-full"},oe={class:"flex justify-between"},re=m("h1",{class:"text-2xl font-bold text-gray-800"},"Store",-1),se={__name:"Navbar",setup(c){const o=q(),r=V("cart"),t=A(!1);function e(s){r.items.splice(s,1)}return(s,n)=>{const u=x("router-link");return g(),h(C,null,[m("div",null,[m("nav",te,[m("div",oe,[i(u,{to:{name:"ProductsListPage"}},{default:v(()=>[re]),_:1}),m("button",{onClick:n[0]||(n[0]=a=>t.value=!0),class:"flex"},[i(l(U),{name:"shopping-cart",class:"h-6"}),i(l(F),{variant:"solid"},{default:v(()=>[P(k(l(r).items.length),1)]),_:1})])])])]),i(l(z),{options:{title:"Your Cart",size:"3xl",actions:[{label:"Proceed to Checkout",variant:"solid",onClick:a=>{a(),l(o).push({name:"CheckoutPage"})}}]},modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=a=>t.value=a)},{"body-content":v(()=>[m("ul",null,[(g(!0),h(C,null,T(l(r).items,(a,p)=>(g(),h("li",null,[P(" *"+k(p+1)+"-"+k(a.product)+" ",1),i(l(B),{modelValue:a.qty,"onUpdate:modelValue":S=>a.qty=S,type:"number",placeholder:"qty"},null,8,["modelValue","onUpdate:modelValue"]),i(l(O),{onClick:S=>e(p),cariant:"outline",theme:"red",class:"mt-2"},{default:v(()=>[P("Remove")]),_:2},1032,["onClick"])]))),256))])]),_:1},8,["options","modelValue"])],64)}}},ne={class:"mt-12"},ae={__name:"App",setup(c){const o=V("cart");return H(o.items,()=>{console.log("watch works"),localStorage.setItem("cart",JSON.stringify(o))}),(r,t)=>{const e=x("router-view");return g(),h(C,null,[i(se,{class:""}),m("div",ne,[i(e)])],64)}}};let d=J(ae),$=JSON.parse(localStorage.getItem("cart")||'{"items": []}');localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify($));const ce=I($);d.provide("cart",ce);W("resourceFetcher",M);d.use(_);d.use(G);d.component("Button",O);d.component("Card",K);d.component("Input",Y);d.mount("#app");export{f as s};
