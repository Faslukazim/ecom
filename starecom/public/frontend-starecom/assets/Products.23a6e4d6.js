import{f as l,o as t,A as u,w as i,h as s,t as d,k as m,B as p,a as _,g as a,F as f,n as g,E as h}from"./vendor.d2b082e7.js";import{f as x}from"./utils.e172e694.js";const y=["src"],k={class:"text-base text-gray-800 font-medium mt-2"},v={class:"text-xl font-bold text-gray-900"},w={__name:"ProductCard",props:{product:Object},setup(e){return(r,o)=>{const c=l("router-link");return t(),u(c,{to:{name:"ProductDetailsPage",params:{name:e.product.name}},href:"#",class:"shadow-md rounded-sm p-8 space-y-2 flex justify-between flex-col"},{default:i(()=>[s("img",{class:"h-36 w-44",src:e.product.preview_image,alt:""},null,8,y),s("p",k,d(e.product.name),1),s("p",v,d(m(x)(e.product.price,e.product.currency)),1)]),_:1},8,["to"])}}},b={class:"p-6"},P=s("h2",{class:"font-semibold text-lg"},"Our Products",-1),B={key:0,class:"mt-5 grid grid-cols-1 sm:grid-cols-4 gap-3"},L={__name:"Products",setup(e){const r=p({doctype:"Product",fields:["name","preview_image","price","currency"],auto:!0}),o=_(()=>r.list.data?r.list.data:[]);return(c,C)=>(t(),a("div",b,[P,o.value?(t(),a("div",B,[(t(!0),a(f,null,g(o.value,n=>(t(),u(w,{key:n.name,product:n},null,8,["product"]))),128))])):h("",!0)]))}};export{L as default};