import{K as m,f as t,o as c,g as p,j as e,w as n,h as u,k as f,l as _,U as w}from"./vendor.d2b082e7.js";import{s as r}from"./index.7a46995a.js";const g={class:"m-3 flex flex-row items-center justify-center"},j=m({__name:"Login",setup(x){function l(a){let o=new FormData(a.target);r.login.submit({email:o.get("email"),password:o.get("password")})}return(a,o)=>{const s=t("Input"),i=t("Button"),d=t("Card");return c(),p("div",g,[e(d,{title:"Login to your FrappeUI App!",class:"w-full max-w-md mt-4"},{default:n(()=>[u("form",{class:"flex flex-col space-y-2 w-full",onSubmit:w(l,["prevent"])},[e(s,{required:"",name:"email",type:"text",placeholder:"johndoe@email.com",label:"User ID"}),e(s,{required:"",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",label:"Password"}),e(i,{loading:f(r).login.loading,variant:"solid"},{default:n(()=>[_("Login")]),_:1},8,["loading"])],32)]),_:1})])}}});export{j as default};