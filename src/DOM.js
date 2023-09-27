import { todoArray, modal } from "./index.js";

const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.done');

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

export function addTodoToArray() {
  todoArray.push(new Todo(title.value, des.value, date.value, priority.value, project.value));
  displayTodos();
  console.log(todoArray);
}


export function displayTodos() {
  todoList.innerHTML = '';
  for (let i in todoArray) {
    let newTodo = document.createElement('div');
    newTodo.textContent = `${todoArray[i].title}`;
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
      newTodo.remove();
      todoArray.splice(i, 1);
      displayTodos();
      //modal.close();
      console.log(todoArray);
    })
    newTodo.appendChild(checkbox);
    todoList.appendChild(newTodo);
    newTodo.addEventListener('click', () => {
      newTodo.classList.toggle('cross-off');
    });
    newTodo.addEventListener('click', () => {
      let div = document.createElement('div');
      div.textContent = todoArray[i].description;
      newTodo.appendChild(div);
    })
  }
}