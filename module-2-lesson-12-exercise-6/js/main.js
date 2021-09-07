'use strict';
const body = document.querySelector('body');
//const main = document.querySelector('.js_main');
const ul = document.querySelector('.js_ul');
const btn = document.querySelector('.js_btn');
body.style = 'background-color:black; height:100vh; color:white;'; // solo usar si se debe evaluar desde JS - sino son buenas prácticas escribirlo en CSS

function hendelClick100(ev) {
  let newEl = document.createElement('li');
  let newText = document.createTextNode('Hola, como estas?');
  debugger;
  newEl.appendChild(newText);
  ul.appendChild(newEl);
  newEl.removeChild(newText); //Eliminar texto! :)
  newEl.remove(); //Elimina li
  for (let index = 0; index < 100; index++) {
    newText = document.createTextNode(
      'He aprendido bien cómo funcionan los bucles'
    );
    newEl = document.createElement('li');
    newEl.appendChild(newText);
    ul.appendChild(newEl);
  }
  console.log(document.documentElement.parentNode); // busca de DOM - si no hay elemento padre te da el HTML entero.
  console.log(document.documentElement.parentElement); // busca de HTML - si no es un elemento de DOM, te va a devolver null
}

btn.addEventListener('click', hendelClick100);
