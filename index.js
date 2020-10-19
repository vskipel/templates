console.log('hello world')
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

const renderList = () => {
  const items = todoList.map(element => {
    return getItems(element);
  }).join('');

  listSection.insertAdjacentHTML("afterbegin", items);

  console.log(items);
};

const getItems = (data) => (`
  <li class="card">
    <div class="card__elements">
      <h2 class="card__title">${data.title}</h2>
    </div>
  </li>
  `);

const bindHanlders = () => {
  addButton.addEventListener('click', () => {
    const item = getItems({
      title: input.value
    });
    listSection.insertAdjacentHTML("afterbegin", item);
    input.value = '';
  });
};

bindHanlders();
renderList();