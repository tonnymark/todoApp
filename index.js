let inputText = document.getElementById('inputText');
let closeIcon = document.getElementById('x-image');
let listItems = document.querySelector('.todoList');
let tasks = document.querySelector('.tasks');
let add = document.getElementById('addTask');
let input = document.querySelector('.input');
let inserTask = document.querySelector('.insertTask');
let warn = document.createElement('p');

// creating the list items
function addToDo() {
  // check  if we enter the task
  if (inputText.value === '') {
    warn.innerHTML = 'Please type in your task to add !';
    inserTask.appendChild(warn);
  } else {
    let list = inputText.value;
    let taskList = document.createElement('li');
    taskList.innerHTML = list;
    tasks.appendChild(taskList);

    // add the close icon

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    taskList.appendChild(span);

    warn.remove();
  }

  inputText.value = '';
  saveData();
}

tasks.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');

      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// saving our data in local storage

function saveData() {
  localStorage.setItem('data', tasks.innerHTML);
}

// open data when we open the browser

function showTask() {
  tasks.innerHTML = localStorage.getItem('data');
}
showTask();
