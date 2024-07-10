var A=Object.defineProperty;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var b=(s,o,t)=>o in s?A(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,k=(s,o)=>{for(var t in o||(o={}))B.call(o,t)&&b(s,t,o[t]);if(g)for(var t of g(o))Q.call(o,t)&&b(s,t,o[t]);return s};import{o as l,c as _,a as e,t as u,p as F,b as R,r as v,d as I,e as D,u as f,f as L,F as h,g as q,n as E,h as x,i as M}from"./vendor.9f34b5a8.js";const T=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function t(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=t(n);fetch(n.href,c)}};T();var C="/assets/makeup.50536e54.jpeg";var O=(s,o)=>{const t=s.__vccOpts||s;for(const[r,n]of o)t[r]=n;return t};const y=s=>(F("data-v-e2c9b95e"),s=s(),R(),s),V={class:"product"},j={class:"details"},z=["src","alt"],H={class:"product-info"},K={class:"product-name"},G={class:"product-price"},J={class:"controls"},U={class:"quantity"},W=y(()=>e("i",{class:"fa-solid fa-minus fa-sm"},null,-1)),X=[W],Y={class:"quantity-num"},Z=y(()=>e("i",{class:"fa-solid fa-plus fa-sm"},null,-1)),tt=[Z],et=y(()=>e("i",{class:"fa-solid fa-trash-can fa-lg"},null,-1)),st=[et],ot={props:["product"],emits:["remove-item","decrement-quantity","increment-quantity"],setup(s){return(o,t)=>(l(),_("div",V,[e("div",j,[e("img",{src:s.product.img,alt:s.product.name,class:"product-img"},null,8,z),e("div",H,[e("p",K,u(s.product.name),1),e("p",G,"$"+u(s.product.price),1)])]),e("div",J,[e("div",U,[e("button",{class:"decrement-btn",onClick:t[0]||(t[0]=r=>o.$emit("decrement-quantity",s.product.id))},X),e("p",Y,u(s.product.quantity),1),e("button",{class:"increment-btn",onClick:t[1]||(t[1]=r=>o.$emit("increment-quantity",s.product.id))},tt)]),e("button",{class:"trash-btn",onClick:t[2]||(t[2]=r=>o.$emit("remove-item",s.product.id))},st)])]))}};var nt=O(ot,[["__scopeId","data-v-e2c9b95e"]]);const ct={class:"product"},at={class:"details"},it=["src","alt"],dt={class:"product-info"},rt={class:"product-name"},ut={class:"product-price"},lt={class:""},pt={props:["product"],emits:["add-product"],setup(s){return(o,t)=>(l(),_("div",ct,[e("div",at,[e("img",{src:s.product.img,alt:s.product.name,class:"product-img"},null,8,it),e("div",dt,[e("p",rt,u(s.product.name),1),e("p",ut,"$"+u(s.product.price),1)])]),e("div",lt,[e("button",{onClick:t[0]||(t[0]=r=>o.$emit("add-product",s.product))},"add product")])]))}};var _t=O(pt,[["__scopeId","data-v-bd239d34"]]);const mt=e("i",{class:"fa-brands fa-opencart fa-xl"},null,-1),vt=[mt],ft={class:"cart-header-padding"},ht={class:"cart-header"},yt=e("span",{class:"title"},"cart",-1),$t={class:"items"},gt=L(" ("),bt=e("i",{class:"fa-solid fa-xmark fa-xl"},null,-1),kt=[bt],It={class:"cart-products"},qt={class:"cart-footer"},xt={class:"total"},Ct=e("p",null,"total",-1),Lt=e("a",{href:"#",class:"checkout-link"},"checkout",-1),Ot={setup(s){const o=v(!1),t=v([]),r=v([{id:1,img:C,name:"Red lipstick",price:16,quantity:2}]),n=I(()=>t.value.reduce((a,i)=>a+i.quantity,0)),c=I(()=>t.value.reduce((a,i)=>a+i.price*i.quantity,0));D(async()=>{t.value=[{id:1,img:C,name:"Red lipstick",price:16,quantity:2}],console.log(t.value)});const p=()=>{o.value=!0},N=()=>{o.value=!1},$=a=>{const i=a;t.value=t.value.filter(d=>d.id!==i)},P=a=>{const i=a,d=t.value.findIndex(m=>m.id===i);t.value[d].quantity===1?$(i):t.value[d].quantity--},S=a=>{const i=a,d=t.value.findIndex(m=>m.id===i);t.value[d].quantity++},w=a=>{console.log(a),t.value[t.value.length++]=k({},a)};return(a,i)=>(l(),_(h,null,[e("button",{id:"cart-btn",onClick:p},vt),e("div",{id:"cart-sidebar",class:E(["cart-sidebar",{show:o.value}])},[e("div",ft,[e("div",ht,[e("p",null,[yt,e("span",$t,[gt,e("span",null,u(f(n)),1),L(" "+u(f(n)===1?"item":"items")+")",1)])]),e("button",{id:"close-btn",onClick:N},kt)])]),e("div",It,[(l(!0),_(h,null,q(t.value,d=>(l(),x(nt,{key:d.id,product:d,onRemoveItem:$,onDecrementQuantity:P,onIncrementQuantity:S},null,8,["product"]))),128))]),e("div",qt,[e("div",xt,[Ct,e("p",null,"$"+u(f(c)),1)]),Lt])],2),(l(!0),_(h,null,q(r.value,d=>(l(),x(_t,{key:d.id,product:d,onAddProduct:w},null,8,["product"]))),128))],64))}};M(Ot).mount("#app");
