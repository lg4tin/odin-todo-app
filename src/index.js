import { addTodo } from './DOM.js';

const addTodoBtn = document.querySelector('.add-todo');
addTodoBtn.addEventListener('click', addTodo);