(()=>{"use strict";var e={d:(t,o)=>{for(var c in o)e.o(o,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:o[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Q:()=>s});const t=document.querySelector(".todo-list");class o{constructor(e,t,o,c,n){this.title=e,this.description=t,this.date=o,this.priority=c,this.project=n}}const c=document.querySelector("#title"),n=document.querySelector("#description"),r=document.querySelector("#date"),d=document.querySelector("#priority"),l=document.querySelector("#project");function i(){t.innerHTML="";for(let e in s){let o=document.createElement("div");o.textContent=`${s[e].title}`;let c=document.createElement("input");c.type="checkbox",c.addEventListener("click",(()=>{o.remove(),s.splice(e,1),i(),console.log(s)})),o.appendChild(c),t.appendChild(o),o.addEventListener("click",(()=>{o.classList.toggle("cross-off")})),o.addEventListener("click",(()=>{let t=document.createElement("div");t.textContent=s[e].description,o.appendChild(t)}))}}const s=[],u=document.querySelector("[data-open-modal]"),a=document.querySelector("[data-close-modal]"),m=document.querySelector("[data-modal]");u.addEventListener("click",(()=>{m.showModal()})),a.addEventListener("click",(()=>{m.close()})),document.querySelector(".submit-button").addEventListener("click",(function(){s.push(new o(c.value,n.value,r.value,d.value,l.value)),i(),console.log(s)})),document.querySelector(".all-tasks").addEventListener("click",(function(){document.querySelector(".todo-list-header").textContent="All Tasks",i()})),document.querySelector(".today").addEventListener("click",(function(){document.querySelector(".todo-list-header").textContent="Today"})),document.querySelector(".this-week").addEventListener("click",(function(){document.querySelector(".todo-list-header").textContent="This Weeks Tasks"}))})();