import { addTodoToArray, displayTodos } from './DOM.js';

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