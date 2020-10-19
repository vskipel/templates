
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
  const items = todoList.map(element => getItems(element));
  listSection.append(...items);
}


const getItems = (data) => {
  const card = template.content.cloneNode(true);
  console.log(card);
  card.querySelector('.card__title').innerText = data.title;
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