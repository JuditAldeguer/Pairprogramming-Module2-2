'use strict';

const ul = document.querySelector('.js-ul');
let input = '';
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

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
    tasks[event].completed = false;
  }
  console.log(tasks);
}

forObject();
