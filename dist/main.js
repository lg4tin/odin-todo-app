(()=>{const t=document.querySelector(".content"),e=document.querySelector(".title"),r=document.querySelector(".add-project"),o=(document.querySelector(".projects-display"),document.querySelector(".new-projects")),n=document.querySelector("#today"),c=document.querySelector("#high-priority"),i=document.querySelector("#ideas");function d(r){t.textContent="",e.textContent=a.projectsArray[r].title;for(let e in a.projectsArray[r].projectArray){let o=document.createElement("div");o.textContent=a.projectsArray[r].projectArray[e].title;let n=document.createElement("button");n.textContent="Delete",n.addEventListener("click",(()=>(a.removeTodo(e),o.remove(),a.projectsArray[r].projectArray.splice(e,1))));let c=document.createElement("button");c.textContent="Description",c.addEventListener("click",(()=>{let t=document.createElement("div");t.textContent=`Title: ${a.projectsArray[r].projectArray[e].title}, Description: ${a.projectsArray[r].projectArray[e].description}, \n      Date: ${a.projectsArray[r].projectArray[e].date}, \n      Priority: ${a.projectsArray[r].projectArray[e].priority}`;let n=document.createElement("button");n.textContent="Close",n.addEventListener("click",(()=>{t.remove()})),t.appendChild(n),o.appendChild(t)}),{once:!1}),o.appendChild(c),o.appendChild(n),t.appendChild(o)}}n.addEventListener("click",(()=>{e.textContent="Today",d(1)})),c.addEventListener("click",(()=>{e.textContent="High Priority"})),i.addEventListener("click",(()=>{e.textContent="Ideas"})),document.querySelector(".add-todo-btn").addEventListener("click",(()=>{a.addTodo(),d(0)})),r.addEventListener("click",(()=>{a.addProject(),function(){o.textContent="";for(let t=3;t<a.projectsArray.length;t++){let e=document.createElement("div");e.textContent=a.projectsArray[t].title;let r=document.createElement("button");r.textContent="Delete",r.addEventListener("click",(()=>{a.removeProject(t),e.remove()}));let n=document.createElement("button");n.textContent="Add Todo",n.addEventListener("click",(()=>{a.projectsArray[t].addTodoToProject(x=prompt("hi"))})),e.addEventListener("click",(()=>{d(t)})),e.appendChild(r),e.appendChild(n),o.appendChild(e)}}()}));const a=(()=>{const t={title:"Todo",projectArray:[]},e={title:"Today",projectArray:[]},r={title:"High Priority",projectArray:[]},o=[t,e,r];return{todoArray:t,todayArray:e,highPriority:r,projectsArray:o,addProject:function(t=prompt("New Project:")){let e=new p(t);o.push(e)},addTodo:function(e=prompt("Title"),r=prompt("Description"),o=prompt("Date"),n=prompt("Priority")){let c=new l(e,r,o,n);t.projectArray.push(c)},removeTodo:function(e){return t.projectArray.splice(e,1)},removeProject:function(t){return o.splice(t,1)}}})();class l{constructor(t,e,r,o){this.title=t,this.description=e,this.date=r,this.priority=o}showDescription(){alert(this.description),alert(this.title),alert(this.date),alert(this.priority)}}class p{constructor(t){this.title=t,this.projectArray=[]}addTodoToProject(t){let e=new l(t,t,t,t);this.projectArray.push(e)}displayProject(){for(let t in this.projectArray)console.log(this.projectArray[t])}removeTodoFromProject(t){return this.projectArray.splice(t,1)}}})();