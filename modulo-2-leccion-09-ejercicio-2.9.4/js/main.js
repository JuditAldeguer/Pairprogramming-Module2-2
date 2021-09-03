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
      const html = `<li><input class="js_input" checked type="checkbox"/><label class="completed">${data.name}</label></li>`;
      ul.innerHTML += html;
    } else if (data.completed !== true) {
      const html = `<li><input class="js_input" type="checkbox"/><label class="completed">${data.name}</label><li>`;
      ul.innerHTML += html;
    }
  }
  const allInput = document.querySelectorAll('.js_input');
  console.log(allInput); //array checkbox
  listenerEv();
}
function listenerEv() {
  for (const eachInput of allInput) {
    eachInput.addEventListener('click', handleClickTask);
  }
}
function handleClickTask(event) {
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
