(()=>{"use strict";var e={d:(t,o)=>{for(var c in o)e.o(o,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:o[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Q:()=>a});const t=document.querySelector(".todo-list");document.querySelector(".done");class o{constructor(e,t,o,c,n){this.title=e,this.description=t,this.date=o,this.priority=c,this.project=n}}new o("Make Dinner","Make tacos","hi","hi","hi");const c=document.querySelector("#title"),n=document.querySelector("#description"),r=document.querySelector("#date"),l=document.querySelector("#priority"),d=document.querySelector("#project");function i(){t.innerHTML="";for(let e in a){let o=document.createElement("div");o.textContent=`${a[e].title}`;let c=document.createElement("input");c.type="checkbox",c.addEventListener("click",(()=>{o.remove(),a.splice(e,1),i(),console.log(a)})),o.appendChild(c),t.appendChild(o),o.addEventListener("click",(()=>{o.classList.toggle("cross-off")})),o.addEventListener("click",(()=>{let t=document.createElement("div");t.textContent=a[e].description,o.appendChild(t)}))}}const a=[],u=document.querySelector("[data-open-modal]"),s=document.querySelector("[data-close-modal]"),m=document.querySelector("[data-modal]");u.addEventListener("click",(()=>{m.showModal()})),s.addEventListener("click",(()=>{m.close()})),document.querySelector(".submit-button").addEventListener("click",(function(){a.push(new o(c.value,n.value,r.value,l.value,d.value)),i(),console.log(a)}))})();