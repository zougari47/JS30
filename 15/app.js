const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const btns = document.querySelectorAll('button');

function addItem(e) {
  e.preventDefault(); //stop the reload
  const text = this.querySelector('[name=item]').value;
  const item = {
    text, //ES6
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  if (plates.length === 0) return;
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
        <label for="items${i}">${plate.text}</label>
        </li>
        `;
    })
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; //skip this unless it's an input
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function doAll(e) {
  // check all
  const _checkboxes = document.querySelectorAll('[data-index]') || '';
  if (e.target.innerText === 'Check all') {
    _checkboxes.forEach(_checkboxe => (_checkboxe.checked = true));
    items.forEach(itm => (itm.done = !itm.done));
    localStorage.setItem('items', JSON.stringify(items));
  } else if (e.target.innerText === 'Uncheck all') {
    _checkboxes.forEach(_checkboxe => (_checkboxe.checked = false));
    items.forEach(itm => (itm.done = !itm.done));
    localStorage.setItem('items', JSON.stringify(items));
  } else if (e.target.innerText === 'Clear all') {
    localStorage.clear();
    items.length = 0;
    itemsList.innerHTML = '<li>Loading Tapas...</li>';
    addItems.reset();
  }
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
btns.forEach(btn => btn.addEventListener('click', doAll));
populateList(items, itemsList);
