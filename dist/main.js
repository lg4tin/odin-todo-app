(()=>{const t=document.querySelector(".content"),e=document.querySelector(".title"),r=document.querySelector(".add-project"),o=(document.querySelector(".projects-display"),document.querySelector(".new-projects"));function n(r){t.textContent="",e.textContent=c.projectsArray[r].title;for(let e in c.projectsArray[r].projectArray){let o=document.createElement("div");o.textContent=c.projectsArray[r].projectArray[e].title;let n=document.createElement("button");n.textContent="Delete",n.addEventListener("click",(()=>{c.removeTodo(e),o.remove()}));let i=document.createElement("button");i.textContent="Description",i.addEventListener("click",(()=>{c.projectsArray[r].projectArray[e].showDescription()})),o.appendChild(i),o.appendChild(n),t.appendChild(o)}}document.querySelector(".add-todo-btn").addEventListener("click",(()=>{c.addTodo(),n(0)})),r.addEventListener("click",(()=>{c.addProject(),function(){o.textContent="";for(let t=3;t<c.projectsArray.length;t++){let e=document.createElement("div");e.textContent=c.projectsArray[t].title;let r=document.createElement("button");r.textContent="Delete",r.addEventListener("click",(()=>{c.removeProject(t),e.remove()}));let i=document.createElement("button");i.textContent="Add Todo",i.addEventListener("click",(()=>{c.projectsArray[t].addTodoToProject(x=prompt("hi"))})),e.addEventListener("click",(()=>{n(t)})),e.appendChild(r),e.appendChild(i),o.appendChild(e)}}()}));const c=(()=>{const t=[],e=[],r=[],o=[t,e,r];return{todoArray:t,todayArray:e,highPriority:r,projectsArray:o,addProject:function(t=prompt("hi")){let e=new d(t);o.push(e)},addTodo:function(e=prompt("hi"),r=prompt("hi"),o=prompt("hi"),n=prompt("hi")){let c=new i(e,r,o,n);t.projectArray.push(c)},removeTodo:function(e){return t.splice(e,1)},removeProject:function(t){return o.splice(t,1)}}})();class i{constructor(t,e,r,o){this.title=t,this.description=e,this.date=r,this.priority=o}showDescription(){alert(this.description),alert(this.title),alert(this.date),alert(this.priority)}}class d{constructor(t){this.title=t,this.projectArray=[]}addTodoToProject(t){let e=new i(t,t,t,t);this.projectArray.push(e)}displayProject(){for(let t in this.projectArray)console.log(this.projectArray[t])}removeTodoFromProject(t){return this.projectArray.splice(t,1)}}})();