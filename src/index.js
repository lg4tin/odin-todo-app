import { addTodoToArray, displayAllTasks, displayTodaysTasks, displaythisWeeksTasks } from './DOM.js';

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

const submitButton = document.querySelector('.submit-button');
//submitButton.addEventListener('click', displayTodos);
submitButton.addEventListener('click', addTodoToArray);

const allTasksButton = document.querySelector('.all-tasks');
allTasksButton.addEventListener('click', displayAllTasks);

const todayButton = document.querySelector('.today');
todayButton.addEventListener('click', displayTodaysTasks);

const thisWeekButton = document.querySelector('.this-week');
thisWeekButton.addEventListener('click', displaythisWeeksTasks);

