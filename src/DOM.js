const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.done');

export function addTodo() {
  let newTodo = document.createElement('div');
  newTodo.textContent = `${title.value}`;
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newTodo.appendChild(checkbox);
  todoList.appendChild(newTodo);
  newTodo.addEventListener('click', () => {
    //newTodo.remove();
    //doneList.appendChild(newTodo);
    newTodo.classList.toggle('cross-off');
  });
  newTodo.addEventListener('click', () => {
    let div = document.createElement('div');
    div.textContent = des.value;
    div.style = 'text-decoration: none;';
    newTodo.appendChild(div);
  })
}

class Todo {
  constructor(title, description, date, priority, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}

let user = new Todo('Make Dinner', 'Make tacos', 'hi', 'hi', 'hi');

const title = document.querySelector('#title');
const des = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const project = document.querySelector('#project');

export function getTodo() {
  alert(title.value);
}