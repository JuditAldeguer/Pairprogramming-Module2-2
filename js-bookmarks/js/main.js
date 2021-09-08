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
const search = document.querySelector('.js_filter');
const searchDesc = document.querySelector('.js_filter_desc');
const searchCheck = document.querySelectorAll('.js_filter_check');
let ebooks = [
  {
    url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion',
    seen: true,
    desc: 'JS en los materiales de Adalab',
    tags: ['javascript', 'HTML'],
  },
  {
    url: 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/',
    seen: true,
    desc: 'Ideas de proyectos JS',
    tags: ['javascript', 'portfolio'],
  },
  {
    url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web',
    seen: false,
    desc: 'HTML en los materiales de Adalab',
    tags: ['HTML', 'CSS'],
  },
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
function writeEbooksFiltred(searchText) {
  dataList.innerHTML = '';
  for (const eachBook of searchText) {
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

// Buscador / Filtro
function handleSearch(ev) {
  let searchText = ebooks.filter((book) =>
    book.desc.toLowerCase().includes(searchDesc.value)
  );
  //searchCheckFunction();
  console.table(searchText);
  writeEbooksFiltred(searchText);
}

function searchCheckFunction() {
  //check function da error -----------
  debugger;
  let searchText = ebooks.filter((book) => {
    for (const eachSearchCheck of searchCheck) {
      if (eachSearchCheck.checked === true) {
        for (const eachTag of book.tags) {
          eachTag.toLowerCase().includes(eachSearchCheck.value);
        }
        console.log(`${eachSearchCheck} is checked`);
      } else {
        console.log(`${eachSearchCheck} is NOT checked`);
      }
    }
  });
  writeEbooksFiltred(searchText);
  // searchText = ebooks.filter((book) =>
  //   book.desc.toLowerCase().includes(searchCheck[0].value)
  // );
}

searchDesc.addEventListener('keyup', handleSearch);
search.addEventListener('change', handleSearch);

//Etiqueta vacia PENDIENTE
//si etiqueta está vacia --> display none - si etiqueta está llena --> ok
// Lección 2.3	ejercicio 1 (condicionales)
// avatar por defecto

//Reset PENDIENTE

//Select leido/no leiodo PENDIENTE

//tags por separado PENDIENTE
