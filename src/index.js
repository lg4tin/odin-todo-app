import { addTodoToArray, displayAllTasks, displayTodaysTasks, displaythisWeeksTasks,todoList } from './DOM.js';

export const todoArray = [];

const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
export const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', () => {
  modal.showModal();
})

closeButton.addEventListener('click', () => {
  modal.close();
})

const addProjectsButton = document.querySelector('.plus');
addProjectsButton.addEventListener('click', () => {
  let sidebar = document.querySelector('.sidebar')
  let div = document.createElement('div');
  let pro = prompt('New project?');
  div.innerText = pro;
  let proArray = [];
  div.addEventListener('click', () => {
    let header = document.querySelector('.todo-list-header');
    header.textContent = pro;
  })
  div.addEventListener('click', () => {
    displayProject(pro);
  });
  sidebar.appendChild(div);
})

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', addTodoToArray);

const allTasksButton = document.querySelector('.all-tasks');
allTasksButton.addEventListener('click', displayAllTasks);

const todayButton = document.querySelector('.today');
todayButton.addEventListener('click', displayTodaysTasks);

const thisWeekButton = document.querySelector('.this-week');
thisWeekButton.addEventListener('click', displaythisWeeksTasks);

function displayProject(name) {
  todoList.innerHTML = '';
  for (let i in todoArray) {
    if (todoArray[i].project == name) {
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
    }
  }
  displayProject(name);
}
