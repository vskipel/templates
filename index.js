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

const renderList = () => {
  const items = todoList.map(element => {
    return `
    <li class="card">
    <div class="card__elements">
      <h2 class="card__title">${element.title}</h2>
    </div>
  </li>
    `;
  }).join('');

  listSection.insertAdjacentHTML("afterbegin", items);

  console.log(items);
};

renderList();