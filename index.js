
const todoList = [{
    title: '1. КСП'
  },
  {
    title: '2. Мартынов'
  },
  {
    title: '3. Семинары'
  },
  {
    title: '4. Найм'
  },
  {
    title: '5. Съебнуть'
  }
];

const listSection = document.querySelector('.list-section');
const addButton = document.querySelector('.button-add');
const input = document.querySelector('.input');
const template = document.querySelector('.template');


const renderList = () => {
  // методом map разбиваем массив на строки
  const items = todoList.map(element => getItems(element));
  // добавляем новые строки в конец
  listSection.append(...items);
};

const handlerDelete = (event) => {
  // выбираем ближайший родительский элемент к элементу, на котором произошел клик
  // удаляем методом remove()
  event.target.closest('.card').remove()
};

const handlerDuplicate = (event) => {
  // выбираем ближайший родительский узел в ДОМ
  console.log(event.target.closest('.card').querySelector('.card__title'));
  // в нем выбираем заголовок 
  // и извлекаем его содержимое через innerHTML
  const cardTitle = event.target.closest('.card').querySelector('.card__title').innerHTML;
  // передаем значение в функцию обработки карточек
  const item = getItems({
    // передаем заголовок как элемент массива
    title: cardTitle
  });
  // вставляем новый элемент в список
  listSection.prepend(item);
};

// функция добавления карточек
const getItems = (data) => {
  // копируем темплейт
  const card = template.content.cloneNode(true);

  // вставляем в заголовок темплейта значения из массива
  card.querySelector('.card__title').innerText = data.title;

  // объявляем кнопки внутри функции (снаружи не получится)
  const duplicateBtn = card.querySelector('.duplicate');
  const deleteBtn = card.querySelector('.delete');
  
  // вешаем слушатели на кнопки
  duplicateBtn.addEventListener('click', handlerDuplicate);
  deleteBtn.addEventListener('click', handlerDelete);

  //dublicateBtn.addEventListener('click', (evt) => {
   // evt.cloneNode(true);
  //})
  // console.log({dublicateBtn, deleteBtn})
  
  
  return card;
};


const bindHanlders = () => {
  addButton.addEventListener('click', () => {
    const item = getItems({
      title: input.value
    });
    listSection.prepend(item);
    input.value = '';
  });
};

bindHanlders();
renderList();