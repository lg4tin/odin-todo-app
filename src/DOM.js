const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.done');

export function addTodo() {
  let newTodo = document.createElement('div');
  newTodo.textContent = `${user.title}, ${user.description}`;
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newTodo.appendChild(checkbox);
  todoList.appendChild(newTodo);
  newTodo.addEventListener('click', () => {
    newTodo.remove();
    doneList.appendChild(newTodo);
    //newTodo.classList.toggle('cross-off');
    //checkbox.setAttribute('checked');
    //set timeout remove todo
  });
}

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }


}

let user = new Todo('Make Dinner', 'Make tacos');