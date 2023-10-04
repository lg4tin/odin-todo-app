import { todoArray } from "./index.js";

let header = document.querySelector('.todo-list-header');

export const todoList = document.querySelector('.todo-list');

class Todo {
  constructor(title, description, date, priority, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}

const title = document.querySelector('#title');
const des = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const project = document.querySelector('#project');

export function addTodoToArray() {
  todoArray.projectArray.push(new Todo(title.value, des.value, date.value, priority.value, project.value = header.textContent));
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
      console.log(todoArray);
    })
    newTodo.appendChild(checkbox);

    todoList.appendChild(newTodo);
    newTodo.addEventListener('click', () => {
      newTodo.classList.toggle('cross-off');
    });
  }
}


export function displayAllTasks() {
  let header = document.querySelector('.todo-list-header');
  header.textContent = 'All Tasks';
  displayTodos();
}

const todayArray = [];

export function displayTodaysTasks() {
  let header = document.querySelector('.todo-list-header');
  header.textContent = 'Today';
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  todayArray = [];

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${year}-0${month}-${day}`;
  console.log(currentDate); // "17-6-2022"
    for (let i in todoArray) {
      if (todoArray[i].date == currentDate) {
        todayArray.push(todoArray[i]);
      }
    }

  todoList.innerHTML = '';
  for (let i in todayArray) {
    let newTodo = document.createElement('div');
    newTodo.textContent = `${todayArray[i].title}`;
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
      newTodo.remove();
      todoArray.splice(i, 1);
      displayTodos();
      console.log(todoArray);
    })
    newTodo.appendChild(checkbox);
    todoList.appendChild(newTodo);
  }
  
  
  console.log(todayArray);
}
