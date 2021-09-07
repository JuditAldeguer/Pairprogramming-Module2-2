'use strict';
const list = document.querySelector('.js-list');
const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');

function getCharacter(ev) {
  ev.preventDefault();

  let character = input.value;
  fetch(`https://swapi.dev/api/people/?search=${character}`)
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
      list.innerHTML += `<li>Personaje: ${results[name]}</li>`;
    });
}
btn.addEventListener('click', getCharacter);
