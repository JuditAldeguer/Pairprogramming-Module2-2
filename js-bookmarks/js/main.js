'use strict';

/*              Sección de elementos que usamos en el HTML             */
/*  -----------------------------------------------------------------  */
const hamburgerMenu = document.querySelector('.js_header__menu');
const menuDropDown = document.querySelector('.js_menuDropDown');
const boardData = document.querySelector('.js_boardData');
const buttonListView = document.querySelector('.js_list_view');
const buttonTableView = document.querySelector('.js_table_view');
const formNewLineBtn = document.querySelector('.js_btnLine');
const formNewLine = document.querySelector('.data-actions__add');
const dataList = document.querySelector('.data__list');
const formBtnAccept = document.querySelector('.accept');
const formBtnCancel = document.querySelector('.cancel');
const inputArray = document.querySelectorAll('.data-actions__input');
const main = document.querySelector('.main');
const search = document.querySelector('.js_search');
let ebooks = [
  {
    url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion',
    desc: 'JS en los materiales de Adalab',
    seen: true,
    tags: ['javascript', 'HTML'],
  },
  {
    url: 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/',
    desc: 'Ideas de proyectos JS',
    seen: true,
    tags: ['javascript', 'portfolio'],
  },
  { url: '', desc: '', seen: true, tags: [] },
];

writeEbooks();

//Menu desplegable
function handleClickMenu(event) {
  event.preventDefault();
  if (menuDropDown.classList.contains('collapsed')) {
    menuDropDown.classList.remove('collapsed');
  } else {
    menuDropDown.classList.add('collapsed');
  }
}

function handleClickMenu2(event) {
  if (!menuDropDown.classList.contains('collapsed')) {
    menuDropDown.classList.add('collapsed');
  }
}

hamburgerMenu.addEventListener('click', handleClickMenu);
main.addEventListener('click', handleClickMenu2);

//Cambiar de vista targetas / tabla
function handleClicView(event) {
  event.preventDefault();
  if (event.currentTarget.value === 'list') {
    boardData.classList.remove('tableview');
    boardData.classList.add('listview');
    buttonTableView.classList.remove('selected');
    buttonListView.classList.add('selected');
  } else {
    boardData.classList.remove('listview');
    boardData.classList.add('tableview');
    buttonTableView.classList.add('selected');
    buttonListView.classList.remove('selected');
  }
}
buttonListView.addEventListener('click', handleClicView);
buttonTableView.addEventListener('click', handleClicView);

//Añadir sección para nueva linea en table / nueva tarjeta
function handleClickBtn(event) {
  event.preventDefault();
  formNewLine.classList.toggle('hidden');
  formNewLineBtn.classList.toggle('hidden');
}
formNewLineBtn.addEventListener('click', handleClickBtn);
//Cerrar sección con Cancelar
formBtnCancel.addEventListener('click', handleClickBtn);

//Funcion nueva linea en tabla
function checking(eachBook) {
  let interactionCheck = '';
  if (eachBook.seen === true) {
    interactionCheck = 'checked title="Enlace leído"';
  } else if (eachBook.seen === false) {
    interactionCheck = 'title="Por leer"';
  }
  return interactionCheck;
}

function writeEbooks() {
  dataList.innerHTML = '';
  for (const eachBook of ebooks) {
    let htmlLineInput = `
    <li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${eachBook.url}" target="_blank" rel="noopener noreferrer">
          ${eachBook.url}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${checking(
            eachBook
          )} name="item_imp_2" id="item_imp_2">
        </p>
        <p class="item__desc">${eachBook.desc}</p>
        <ul class="item__tags">
          <li class="item__tag">${eachBook.tags}</li>
        </ul>
      </article>
    </li>
    `;
    dataList.innerHTML += htmlLineInput;
  }
}

function htmlLineInput() {
  const newBookData = {
    url: inputArray[0].value,
    seen: inputArray[1].checked,
    desc: inputArray[2].value,
    tags: inputArray[3].value.split(','),
  };

  ebooks.push(newBookData);

  writeEbooks();
}
//pendiente conseguir que se muestren tantos tags como palabras en array[3].innerhtml
function newLineAdded(event) {
  event.preventDefault();
  console.log(inputArray);
  htmlLineInput();
}
formBtnAccept.addEventListener('click', newLineAdded);

//Listener Pendientes
//si etiqueta está vacia --> display none - si etiqueta está llena --> ok
// Lección 2.3	ejercicio 1 (condicionales)
// avatar por defecto

//

// Buscador input texto
function handleSearch() {
  const searchText = ebooks.find((book) =>
    book.toLowerCase().includes(search.value)
  );
}
search.addEventListener('keyup', handleSearch);

console.log(ebooks);
