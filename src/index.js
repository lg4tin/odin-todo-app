import { addTodo } from './DOM.js';

const todoArray = [];

const addTodoBtn = document.querySelector('.add-todo');
addTodoBtn.addEventListener('click', addTodo);

const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', () => {
  modal.showModal();
})

closeButton.addEventListener('click', () => {
  modal.close();
})

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', addTodo);