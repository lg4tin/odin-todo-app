(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};e.d({},{Q:()=>v});var t={};e.r(t),e.d(t,{kA:()=>u,rz:()=>p,xH:()=>y,LD:()=>n});let o=document.querySelector(".todo-list-header");const n=document.querySelector(".todo-list");class c{constructor(e,t,o,n,c){this.title=e,this.description=t,this.date=o,this.priority=n,this.project=c}}const l=document.querySelector("#title"),r=document.querySelector("#description"),d=document.querySelector("#date"),i=document.querySelector("#priority"),a=document.querySelector("#project");function u(){v.push(new c(l.value,r.value,d.value,i.value,a.value=o.textContent)),s(),console.log(v)}function s(){n.innerHTML="";for(let e in v){let t=document.createElement("div");t.textContent=`${v[e].title}`;let o=document.createElement("input");o.type="checkbox",o.addEventListener("click",(()=>{t.remove(),v.splice(e,1),s(),console.log(v)})),t.appendChild(o),n.appendChild(t),t.addEventListener("click",(()=>{t.classList.toggle("cross-off")}))}}function p(){document.querySelector(".todo-list-header").textContent="All Tasks",s()}const m=[];function y(){document.querySelector(".todo-list-header").textContent="Today";const e=new Date;let t=e.getDate(),o=e.getMonth()+1,c=e.getFullYear();m=[];let l=`${c}-0${o}-${t}`;console.log(l);for(let e in v)v[e].date==l&&m.push(v[e]);n.innerHTML="";for(let e in m){let t=document.createElement("div");t.textContent=`${m[e].title}`;let o=document.createElement("input");o.type="checkbox",o.addEventListener("click",(()=>{t.remove(),v.splice(e,1),s(),console.log(v)})),t.appendChild(o),n.appendChild(t)}console.log(m)}const v=[],h=document.querySelector("[data-open-modal]"),S=document.querySelector("[data-close-modal]"),k=document.querySelector("[data-modal]");function E(e){n.innerHTML="";for(let t in v)if(v[t].project==e){let e=document.createElement("div");e.textContent=`${v[t].title}`;let o=document.createElement("input");o.type="checkbox",o.addEventListener("click",(()=>{e.remove(),v.splice(t,1),displayTodos(),console.log(v)})),e.appendChild(o),n.appendChild(e)}E(e)}h.addEventListener("click",(()=>{k.showModal()})),S.addEventListener("click",(()=>{k.close()})),document.querySelector(".plus").addEventListener("click",(()=>{let e=document.querySelector(".sidebar"),t=document.createElement("div"),o=prompt("New project?");t.innerText=o,t.addEventListener("click",(()=>{document.querySelector(".todo-list-header").textContent=o})),t.addEventListener("click",(()=>{E(o)})),e.appendChild(t)})),document.querySelector(".submit-button").addEventListener("click",u),document.querySelector(".all-tasks").addEventListener("click",p),document.querySelector(".today").addEventListener("click",y),document.querySelector(".this-week").addEventListener("click",t.displaythisWeeksTasks)})();