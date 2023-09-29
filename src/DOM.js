import { todoArray } from "./index.js";

const todoList = document.querySelector('.todo-list');

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
      console.log(todoArray);
    })
    newTodo.appendChild(checkbox);

    //addTooltip('tooltip');

    todoList.appendChild(newTodo);
    newTodo.addEventListener('click', () => {
      newTodo.classList.toggle('cross-off');
    });

    newTodo.addEventListener('click', () => {
      const description = document.querySelector('.done');
      document.querySelector('#one').textContent = 'Title: ' + todoArray[i].title;
      document.querySelector('#two').textContent = 'Description: ' + todoArray[i].description;
      document.querySelector('#three').textContent = 'Date: ' + todoArray[i].date;
      document.querySelector('#four').textContent = 'Priority: ' + todoArray[i].priority;
      document.querySelector('#five').textContent = 'Project: ' + todoArray[i].project;
    })
    
  }
}
/*
function addTooltip(name) {
  let name = document.createElement('span');
  name.textContent = 'This is my tooltip';
  name.classList.add('tooltip');
  newTodo.addEventListener("mouseover", showTooltip);
  newTodo.addEventListener("mouseout", hideTooltip);
  newTodo.appendChild(tooltip);
}

function showTooltip() {
  const tooltip = document.querySelectorAll(".tooltip");
  tooltip.style.display = "block";
}
function hideTooltip() {
  const tooltip = document.querySelectorAll(".tooltip");
  tooltip.style.display = "none";
}  
*/

export function displayAllTasks() {
  let header = document.querySelector('.todo-list-header');
  header.textContent = 'All Tasks';
  displayTodos();
}

export function displayTodaysTasks() {
  let header = document.querySelector('.todo-list-header');
  header.textContent = 'Today';
  /*for (let i in todoArray) {
    if (todoArray[i].date == todoArray.getDate()) {

    }
  }*/
}

export function displaythisWeeksTasks() {
  let header = document.querySelector('.todo-list-header');
  header.textContent = 'This Weeks Tasks';
}