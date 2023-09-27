const todoList = document.querySelector('.todo-list');

export function addTodo() {
  let newTodo = document.createElement('div');
  newTodo.textContent = `${user.title}, ${user.description}`;
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newTodo.appendChild(checkbox);
  newTodo.addEventListener('click', () => {
    newTodo.classList.toggle('cross-off');
    checkbox.setAttribute('checked');
  });
  todoList.appendChild(newTodo);
}

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }


}

let user = new Todo('Make Dinner', 'Make tacos');