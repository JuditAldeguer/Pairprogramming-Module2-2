'use strict';

// //setInterval();
// let counter = 0;
// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector('.time');
//   time.innerHTML = counter;
// };
// setInterval(incrementAndShowCounter, 1000);

// //setTimeout();
// const removeMsg = () => {
//   const msg = document.querySelector('.msg');
//   msg.innerHTML = '';
// };
// setTimeout(removeMsg, 6000);

// //clearInterval();
// let counter = 0;
// let temp;
// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector('.time');
//   time.innerHTML = counter;
//   if (counter === 10) {
//     clearInterval(temp);
//   }
// };
// temp = setInterval(incrementAndShowCounter, 1000);

//clearTimeout()
let myVar;
let counter = 0;

function secondCount() {
  counter++;
  console.log(counter);

  return counter;
}
setInterval(myFunction, 1000); // si no podemos parámetro tiempo, se ejecuta inmediatamente
function myFunction() {
  let resta = 10 - counter;
  myVar = alert(`CUIDADO! Este texto desaparecerá en ${resta} segundos`); //no se actualiza
  if (counter === 7) {
    clearTimeout(endSetTimeout, 7000);
  }
}
const endSetTimeout = setTimeout(myFunction, 3000);
//-----------------------------da error/////////////////////
