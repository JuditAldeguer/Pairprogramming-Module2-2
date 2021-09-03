'use strict';

const ul = document.querySelector('.js-ul');
let tasks = [];

fetch('http://api.igarrido.es/tasks.json')
  .then((response) => response.json())
  .then((jsonData) => {
    tasks = jsonData;

    render();
  });

function render() {
  for (const data of tasks) {
    if (data.completed) {
      const html = `<li class="completed">${data.name}</li>`;
      main.innerHTML += html;
    } else {
      const html = `<li>${data.name}</li>`;
      main.innerHTML += html;
    }
  }
}

function forObject() {
  for (const data of tasks) {
    if (data.completed) {
      input = '<input checked type="checkbox" class="inputClass"/>';
      const html = `<li class="completed">${data.name}</li>${input}`;
      ul.innerHTML += html;
    } else {
      input = '<input type="checkbox" class="inputClass"/>';
      const html = `<li class="">${data.name}</li>${input}`;
      ul.innerHTML += html;
    }
  }
  listenerEv();
}
function listenerEv() {
  const checkboxList = document.querySelectorAll('.inputClass');
  console.log(checkboxList); //array checkbox
  for (const checkbox of checkboxList) {
    checkbox.addEventListener('click', inputCheck);
  }
}
function inputCheck(event) {
  debugger;
  if (input.checked === true) {
    input.checked = true;
    console.log('Checked');
  } else {
    // input.checked = false;
    console.log('No checked');
    tasks[event.currentTarget].completed = false; // ------------------------falta indicar sobre el elemento current target
  }
  console.log(tasks);
}

forObject();
