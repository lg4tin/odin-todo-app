

const content = document.querySelector('.content');
const title = document.querySelector('.title');
const addProjectBtn = document.querySelector('.add-project')
const projectsDisplay = document.querySelector('.projects-display');
const newProjects = document.querySelector('.new-projects');
const today = document.querySelector('#today');
const highPriority = document.querySelector('#high-priority');
const ideas = document.querySelector('#ideas');
today.addEventListener('click', () => {
  title.textContent = 'Today';
  displayTodos(1);
})
highPriority.addEventListener('click', () => {
  title.textContent = 'High Priority';
})
ideas.addEventListener('click', () => {
  title.textContent = 'Ideas'
})

const todoBtn = document.querySelector('.add-todo-btn');
todoBtn.addEventListener('click', () => {
  TodoApp.addTodo();
  displayTodos(0)
})

addProjectBtn.addEventListener('click', () => {
  TodoApp.addProject();
  displayProjects();
})

function displayTodos(x) {
  content.textContent = '';
  title.textContent = TodoApp.projectsArray[x].title;

  for (let i in TodoApp.projectsArray[x].projectArray) {
    let div = document.createElement('div');
    div.textContent = TodoApp.projectsArray[x].projectArray[i].title;

    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', () => {
      TodoApp.removeTodo(i);
      div.remove();
      return TodoApp.projectsArray[x].projectArray.splice(i, 1);
    });

    let desBtn = document.createElement('button');
    desBtn.textContent = 'Description';
    desBtn.addEventListener('click', () => {
      //TodoApp.projectsArray[x].projectArray[i].showDescription();
      
      let popup = document.createElement('div');
      popup.textContent = `Title: ${TodoApp.projectsArray[x].projectArray[i].title}, Description: ${TodoApp.projectsArray[x].projectArray[i].description}, 
      Date: ${TodoApp.projectsArray[x].projectArray[i].date}, 
      Priority: ${TodoApp.projectsArray[x].projectArray[i].priority}`;

      let delBtn = document.createElement('button');
      delBtn.textContent = 'Close';
      delBtn.addEventListener('click', () => {
        popup.remove();
      })
      popup.appendChild(delBtn);
      div.appendChild(popup);
      
      
      
      
    }, {once: false});

    div.appendChild(desBtn);

    div.appendChild(button);
    
    content.appendChild(div);
  }
}

function displayProjects() {
  newProjects.textContent = '';
  for (let i = 3; i < TodoApp.projectsArray.length; i++) {

    let div = document.createElement('div');
    div.textContent = TodoApp.projectsArray[i].title;

    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', () => {
      TodoApp.removeProject(i);
      div.remove();
    });

    let addButton = document.createElement('button');
    addButton.textContent = 'Add Todo';
    addButton.addEventListener('click', () => {
      TodoApp.projectsArray[i].addTodoToProject(x = prompt('hi'))
    })

    div.addEventListener('click', () => {
      displayTodos(i);
    })

    div.appendChild(button);
    div.appendChild(addButton);
    
    newProjects.appendChild(div);
  }
}

///////////////////

const TodoApp = (() => {
  const todoArray = {
    title: 'Todo',
    projectArray: []
  };

  const todayArray = {
    title: 'Today',
    projectArray: []
  };

  const highPriority = {
    title: 'High Priority',
    projectArray: []
  };

  const projectsArray = [todoArray, todayArray, highPriority];

  function addTodo(a = prompt('Title'),b = prompt('Description'),c = prompt('Date'),d = prompt('Priority')) {
    let x = new Todo(a,b,c,d);
    todoArray.projectArray.push(x);
  }

  function removeTodo(i) {
    return todoArray.projectArray.splice(i, 1);
  }

  function addProject(a = prompt('New Project:')) {
    let x = new Project(a);
    projectsArray.push(x);
  }

  function removeProject(i) {
    return projectsArray.splice(i, 1);
  }

  return {
     todoArray,
     todayArray,
     highPriority,
     projectsArray,
     addProject,
     addTodo,
     removeTodo,
     removeProject
  }
})();

class Todo {
  constructor(title, description, date, priority) {
     this.title = title;
     this.description = description;
     this.date = date;
     this.priority = priority;
  }

  showDescription() {
     alert(this.description);
     alert(this.title);
     alert(this.date);
     alert(this.priority);
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.projectArray = [];
  } 

  addTodoToProject(x) {
     let y = new Todo(x, x, x, x);
     this.projectArray.push(y);
  }

  displayProject() {
     for (let i in this.projectArray) {
        console.log(this.projectArray[i]);
     }
  }

  removeTodoFromProject(i) {
    return this.projectArray.splice(i, 1);
  }
}

function displayTodaysTodos() {
  for (let i in todoArray) {
     if (todoArray[i].date == 29) {
        todayArray.push(todoArray[i]);
     }
  }

  console.log(todayArray);
}

function displayHighPriority() {
  for (let i in todoArray) {
     if (todoArray[i].priority == 3) {
        highPriority.push(todoArray[i]);
     }
  }

  console.log(highPriority)
}

/*
const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
export const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', () => {
  modal.showModal();
})

closeButton.addEventListener('click', () => {
  modal.close();
})
import { addTodoToArray, displayAllTasks, displayTodaysTasks, displaythisWeeksTasks,todoList } from './DOM.js';

export const todoArray = [];



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
*/