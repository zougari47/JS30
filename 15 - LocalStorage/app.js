const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
  e.preventDefault(); //stop the reload
  const text = this.querySelector("[name=item]").value;
  const item = {
    text, //ES6
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
        <input type="chekbox" data-index=${i} id="item${i}"
        ${plate.done ? "checked" : ""} />
        <label for="items${i}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
}

let checkbox = document.querySelectorAll("input[type='checkbox']");
// items.forEach((item, i) => {

// });

addItems.addEventListener("submit", addItem);
