/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".modal-btn"),p=document.querySelector(".close-btn"),a=document.querySelector(".mob-menu");l.addEventListener("click",()=>{a.classList.add("is-open")});p.addEventListener("click",()=>{a.classList.remove("is-open")});document.addEventListener("click",c=>{!a.contains(c.target)&&!l.contains(c.target)&&a.classList.remove("is-open")});const d=document.querySelector(".list-catalog"),n=document.getElementById("product-modal"),b=document.getElementById("modal-title"),m=document.getElementById("modal-gallery"),u=document.getElementById("modal-close"),w="/romanenko-accessories/",g={branchlet:{title:"Гілочки",images:["branchlet-card.webp"]},earrings:{title:"Сережки",images:["earrings-1.webp","earrings-2.webp","earrings-3.webp","earrings-4.webp","earrings-5.webp","earrings-6.webp","earrings-7.webp","earrings-8.webp","earrings-9.webp","earrings-10.webp","earrings-card.webp"]},hoops:{title:"Обручі",images:["hoops-card.webp","hoops-1.webp","hoops-2.webp","hoops-3.webp","hoops-4.webp","hoops-5.webp","hoops-6.webp","hoops-7.webp","hoops-8.webp"]},necklaces:{title:"Намиста",images:["necklaces-card.webp","necklaces-1.webp","necklaces-2.webp","necklaces-3.webp","necklaces-4.webp","necklaces-5.webp","necklaces-6.webp","necklaces-7.webp","necklaces-8.webp","necklaces-9.webp","necklaces-10.webp","necklaces-12.webp","necklaces-13.webp","necklaces-14.webp","necklaces-15.webp","necklaces-16.webp","necklaces-17.webp"]},combs:{title:"Гребінці",images:["combs-card.webp"]},pins:{title:"Шпильки",images:["pins-card.webp","pins-1.webp","pins-2.webp","pins-3.webp","pins-4.webp","pins-5.webp","pins-6.webp","pins-7.webp"]}};d.addEventListener("click",c=>{const o=c.target.closest(".item-catalog");if(!o)return;const r=o.dataset.type,s=g[r];if(s){b.textContent=s.title;const e=s.images.map(t=>`<li><img src="${w}/assets/${r}/${t}" alt="${s.title}" /> <h3>Price</h3></li>`).join("");m.innerHTML=e,n.style.display="flex",document.body.style.overflow="hidden"}u.addEventListener("click",()=>{n.style.display="none",document.body.style.overflow="auto"}),n.addEventListener("click",e=>{e.target===n&&(n.style.display="none",document.body.style.overflow="auto")})});
//# sourceMappingURL=index.js.map
